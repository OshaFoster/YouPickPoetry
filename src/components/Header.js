import { mediaQueries } from "../global";
import React from "react";
import glamorous from "glamorous";
const spiral = require("../images/spiral.png");
const smspiral = require("../images/smspiral.png");

// const tree = require("../images/tree.png")

function Header() {


    const HeaderDiv = glamorous.div({
         background: "linear-gradient(-90deg, rgb(193,125,127,1), rgba(75,4,76,1))",
         height: "164px",
         display: "flex",
         justifyContent: "center",
         borderBottom: "3px solid #6bbe94",
         position: "relative",
         // [mediaQueries.small]: {
         //     position: "fixed",
         //     zIndex: 10,
         // }
     });

    const HeaderH1 = glamorous.h1({
        fontSize: '52px',
        color: "#FDFBFC",
        fontFamily: "'Amatic SC'",
        fontWeight: "300",
        margin: "45px 20px 0px 0px",
        [mediaQueries.small]: {
            fontSize: '45px',
            margin: "50px 10px 0px 0px",
        }
     });


    const ImageDiv = glamorous.div({
        height: '184px',
        width: "184px",
        background: `url(${spiral}) no-repeat`,
        backgroundSize: "cover",
        display: "flex",
        zIndex: "10",
        [mediaQueries.small]: {
            background: `url(${smspiral}) no-repeat`,
            width: "140px",
            height: '140px',
            marginTop:"0px",
            marginLeft: "0px",
            zIndex:1
        },
    });

        const Icons = glamorous.div({
            color: "#FFB229",
            height: "50px",
            position: "absolute",
            right: "2%",
            bottom: "5%",
            [mediaQueries.small]: {
                right: "0%",
                bottom: "0%",
                height: "45px",
            }

        })

    return (

        <HeaderDiv>
            <HeaderH1>
                You-Pick-it-
                <span style={{
                    color: "#FeB229"

                }}>Poetry</span>
            </HeaderH1>
            <ImageDiv/>
            <div className="icons">

                <Icons href="https://github.com/OshaFoster" target="_blank" rel="noopener noreferrer">
                    <span class="fa-stack fa-lg">
                        <i className="icon" class="fa fa-circle fa-stack-2x"></i>
                        <i className="icon" class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                </Icons>

            </div>
        </HeaderDiv>
    )
}

export default Header;
