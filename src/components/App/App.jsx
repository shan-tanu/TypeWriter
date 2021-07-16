import React from 'react';
import Challenge from '../Challenge/Challenge';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const TotalTime = 60;
const apiURL = 'http://metaphorpsum.com/paragraphs/1/8';
const defaultState = {
    selectedParagraph: '',
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
};

class App extends React.Component {
    state = defaultState;

    fetchNewPara = () => {
        fetch(apiURL)
            .then((response) => response.text())
            .then((data) => {
                const selectedParagraphArr = data.split('');
                const testInfo = selectedParagraphArr.map((selectedLetter) => {
                    return {
                        testLetter: selectedLetter,
                        status: 'notAttempted',
                    };
                });

                this.setState({
                    ...defaultState,
                    testInfo: testInfo,
                    selectedParagraph: data,
                });
            });
    };

    componentDidMount() {
        this.fetchNewPara();
    }

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) this.startTimer();
        const characters = inputValue.length;
        const words = inputValue.split(' ').length;
        const index = characters - 1;

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: 'notAttempted',
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters: characters,
                words: words,
            });
            return;
        }

        if (index > this.state.selectedParagraph.length) {
            this.setState({ characters: characters, words: words });
            return;
        }

        const testInfo = this.state.testInfo;
        //check backspace
        if (!(index === this.state.selectedParagraph.length - 1)) {
            testInfo[index + 1].status = 'notAttempted';
        }

        //check correct typing
        const isCorrect = inputValue[index] === testInfo[index].testLetter;
        isCorrect
            ? (testInfo[index].status = 'correct')
            : (testInfo[index].status = 'incorrect');
        this.setState({
            testInfo: testInfo,
            characters: characters,
            words: words,
        });
    };

    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm =
                    timeSpent > 0
                        ? (this.state.words / timeSpent) * TotalTime
                        : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    };

    startAgain = () => this.fetchNewPara();

    render() {
        //console.log(this.state.testInfo);
        return (
            <div className="app">
                {/* Nav bar */}
                <Nav />
                {/* Landing */}
                <Landing />
                {/* Testing */}
                <Challenge
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;
