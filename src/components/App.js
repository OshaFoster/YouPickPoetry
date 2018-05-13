import React from "react";
import Header from "./Header";
import {words, mediaQueries} from "../global"
import Word from "./Word"
import Poem from "./Poem"
import PoemLine from "./PoemLine";
import Footer from "./Footer";
import glamorous from "glamorous";

const  DivWrap  = glamorous.div({
    display: "flex",
    justifyContent: "space-around",
    height: "auto",
    paddingBottom: "10px",
    transition: "all 0.4s ease-in-out",
    [mediaQueries.small]: {
        flexDirection: "column",
        justifyContent: "center",
    }

})

const DivFinalWrap = glamorous.div({
     width: "40%",
     [mediaQueries.small]: {
             width: "95%"
         }
})


const WordsDiv = glamorous.div({
    width: "55%",
    backgroundColor: "#fdfdfd",
    margin: "0px auto",
    fontFamily: "'PT Sans Narrow'",
    [mediaQueries.small]: {
            width: "95%",
        }
})

const FinalPoemDiv = glamorous.div({
    height: "420px",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fdfdfd",
    color: "#121212",
    marginTop: "60px",
    paddingTop:"30px",
    paddingBottom: "80px",
    overflow: "scroll",
    fontFamily:"'Amatic SC'",
    fontSize: "28px",
    [mediaQueries.small]: {
            height: "auto",
            fontSize: "22",
            margin: "20px",
            paddingTop:"0px",
            // background: "red"
        }

})
const PoemContainer = glamorous.div({
    margin: "20px auto 20px auto",
    width: "85%",
    minHeight: "85px",
    padding: "0px 15px 0px 15px",
    display: "flex",
    justifyContent: "center",
    color: "#121212",
    fontFamily:"'Amatic SC'",
    fontSize: "26px",
    transition: "all 1s",
    [mediaQueries.small]: {
        fontSize: "22",
        padding: "0px 5px 0px 5px",
        margin: "0",
        }

});


const RefreshButton = glamorous.button({
    color: "#fdfdfd",
    background: "#FeB229", //"#522053"
    fontSize: "18px",
    display: "block",
    margin: " 20px auto",
    border: "none",
    outline: "none",
    fontFamily: "'PT Sans Narrow'",
    ':hover,:active,:focus': {
   background: "linear-gradient(-90deg, rgba(75,4,76,1), rgb(255,178,41))",
 },
 [mediaQueries.small]: {
     fontSize: "16",
     marginBottom: "0px",
     background: "#4B044C",
     }
})


class App extends React.Component {
    state = {
        words: [],
        poemLine: " ",
        finalPoem: [],

    }

    componentDidMount() {
        this.randomItems(words, 70)
        window.addEventListener("resize", this.onResize);


    }

    onResize = () => {
        const wordCount = window.innerWidth > 960 ? 70 : 35;
        // console.log(`onResize: ${wordCount}`);
        if (wordCount !== this.state.wordCount){
            this.setState({ wordCount });

        }
    }

    randomItems(words, wordCount) {
        let newArray = []
        // const wordCount = window.innerWidth > 750 ? 70 : 25;
        console.log(wordCount);
        for (let i = 0; i < wordCount; i++) {
            const word = words[Math.floor(Math.random() * words.length)]
            newArray.push(word)
        }
        this.setState({words: newArray})
    }

    addFoo = (event) => {

        const newWord = event.target.innerText;
        let updatedPoem = this.state.poemLine;

        updatedPoem += ` ${newWord}`;
        this.setState({poemLine: updatedPoem})
        event.target.style.visibility = 'hidden';

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
        // console.log(poemLine)
        this.setState({poemLine});

    };

    DeletePoem = () => {
        const finalPoem = []

        this.setState({finalPoem})
    }

    mapWord() {
      const wordCount = window.innerWidth > 960 ? 70 : 35;

      const wordElements = [];
      for (let i = 0; i < wordCount; i++) {
        wordElements.push(<Word word={this.state.words[i]} key={i} addFoo={this.addFoo} poemLine={this.state.poemLine}/>)
      }
       console.log(this.state.words)
      return wordElements;

    }

    // mapWord() {
    //
    //     const maxLength = this.state.wordCount;
    //     console.log(maxLength)
    //     const words = this.state.words.slice(0, maxLength + 1);
    //     console.log(words.length)
    //     return words.map((word, i) => {
    //         return (<Word word={word} key={word + i} addFoo={this.addFoo} poemLine={this.state.poemLine}/>)
    //     })
    // }

   //  ***
   //  mapWord() {
   //     return this.state.words.map((word, i) => {
   // console.log(word)
   //         return (<Word word={word} key={word + i} addFoo={this.addFoo} poemLine={this.state.poemLine}/>)
   //     })
   // }
    render() {
        // console.log(this.state.words);
        return (
            <div>
                <Header/>
            <DivWrap>
                    <WordsDiv>
                        <PoemContainer>
                            <Poem poemLine={this.state.poemLine}/>
                        </PoemContainer>

                        {this.mapWord()}
                        <RefreshButton onClick={() => this.randomItems(words, this.state.wordCount)}>Refresh</RefreshButton>
                    </WordsDiv>
                    <DivFinalWrap>
                    <FinalPoemDiv>
                        {this.mapPoem()}
                    </FinalPoemDiv>

                    </DivFinalWrap>
                    <Footer
                        lineToPoem={this.lineToPoem}
                        DeletePoem={this.DeletePoem}
                        DeleteWord={this.DeleteWord}
                        />
                </DivWrap>

            </div>

        )
    }

}

export default App;
