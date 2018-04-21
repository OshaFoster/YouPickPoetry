import React from "react";
import Header from "./Header";
import {words} from "../global"
import Word from "./Word"
import Poem from "./Poem"
import PoemLine from "./PoemLine";
import Footer from "./Footer";
import glamorous from "glamorous";

const { Div } = glamorous


const WordsDiv = glamorous.div({
    width: "55%",
    height: "400px",
    backgroundColor: "#fdfdfd",
    margin: "0px auto",
    fontFamily: "'PT Sans Narrow'",
})

const FinalPoemDiv = glamorous.div({
    height: "500px",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fdfdfd",
    color: "#676767",
    borderLeft: "1px solid #ebbe46",
    marginTop: "60px",
    paddingTop:"30px",
    fontFamily:"'Amatic SC'",
    fontSize: "30px",

})
const PoemContainer = glamorous.div({
    margin: "35px auto 40px auto",
    width: "85%",
    height: "40px",
    padding: "0px 15px 0px 15px",
    display: "flex",
    justifyContent: "center",
    color: "#522053",
    fontFamily:"'Amatic SC'",
    fontSize: "26px",

});

const InputDiv =glamorous.form({
//
})

const RefreshButton = glamorous.button({
    color: "#fdfdfd",
    background: "#ebbe46", //"#522053"
    fontSize: "18px",
    borderColor: "#898985",
    display: "block",
    margin: " 20px auto",
    border: "none",
    fontFamily: "'PT Sans Narrow'",
    ':hover,:active,:focus': {
   background: "linear-gradient(-90deg, rgba(193,125,127,1), rgb(235,190,70))",
 },
})


class App extends React.Component {
    state = {
        words: [],
        poemLine: " ",
        finalPoem: []

    }

    componentDidMount() {
        this.randomItems(words)
    }

    randomItems(words) {

        let newArray = []
        for (let i = 0; i < 100; i++) {
            const word = words[Math.floor(Math.random() * words.length)]
            newArray.push(word)
        }

        this.setState({words: newArray})
    }

    addFoo = (event) => {

        const newWord = event.target.innerText;
        let updatedPoem = this.state.poemLine;

        updatedPoem += ` ${newWord}`;
        // console.log(updatedPoem);
        // const poemArray = ['shoe', 'house', 'tickle']
        // const poemList = poemArray.toString()
        this.setState({poemLine: updatedPoem})
        event.target.style.visibility = 'hidden';
        // console.log('adding foo')
    };

    lineToPoem = (event) => {
        // create a poem line component
        //push poem to finalPoem
        //set state of poem to empty string
        const finalPoem = this.state.finalPoem
        finalPoem.push(this.state.poemLine)
        this.setState({poemLine: " ", finalPoem})
    }
    mapPoem() {
        return this.state.finalPoem.map((line, i) => {
            return (<PoemLine line={line} key={line + i}/>)
        })
    }

    DeleteWord = () => {
        var poemLine = this.state.poemLine;
        var lastIndex = poemLine.lastIndexOf(' ')
        poemLine = poemLine.substring(0, lastIndex)
        console.log(poemLine)
        this.setState({poemLine});

    };

    DeletePoem = () => {
        const finalPoem = []

        this.setState({finalPoem})
    }

    mapWord() {
        return this.state.words.map((word, i) => {
            return (<Word word={word} key={word + i} addFoo={this.addFoo} poemLine={this.state.poemLine}/>)
        })
    }
    render() {

        return (
            <div>
                <Header/>
                <Div display="flex" justifyContent="space-around" height="auto">
                    <WordsDiv>
                        <PoemContainer>
                            <Poem poemLine={this.state.poemLine}/>
                        </PoemContainer>

                        {this.mapWord()}
                        <RefreshButton onClick={() => this.randomItems(words)}>Refresh</RefreshButton>
                    </WordsDiv>
                    <Div style={{ width: "40%" }}>
                    <FinalPoemDiv>
                        {this.mapPoem()}
                    </FinalPoemDiv>

                    </Div>
                    <Footer
                        lineToPoem={this.lineToPoem}
                        DeletePoem={this.DeletePoem}
                        DeleteWord={this.DeleteWord}
                        />
                </Div>

            </div>

        )
    }

}

export default App;
