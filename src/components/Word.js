import React from "react";
import glamorous from "glamorous";
import { mediaQueries } from "../global";

export default class Word extends React.Component {
    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    randomSkew(){
        if (this.random(1, 5) % 2 === 0) {
            return this.random(-12, 12);
        }
        return 0;
        //pick a random number between -10 and 10, return that number

    }

    randomMargin(){

        return this.random(0, 10)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.poemLine !== this.props.poemLine) {
            return false;
        }
        return true;
    }



    render() {

        const skew = this.randomSkew();

        const Button = glamorous.button({
            color: "#fdfdfd",
            background: "#696965",
            borderColor: "#898985",
            // color: "#fdfdfd",
            // border: "1px solid #4e4e4e",
            // background: "#676767",
            fontSize: "14px",
            transform: `rotate(${skew}deg)`,
            margin: `${this.randomMargin()}px ${this.randomMargin()}px ${this.randomMargin()}px ${this.randomMargin()}px`,
            outline: "none",
            [mediaQueries.small]: {
                    fontSize: "12",
                }
        });
        return (
            <Button onClick={this.props.addFoo}>{this.props.word}</Button>
        )
    }

}
