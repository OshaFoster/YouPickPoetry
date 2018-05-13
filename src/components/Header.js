import { mediaQueries } from "../global";
import React from "react";
import glamorous from "glamorous";
const spiral = require("../images/spiral.png");
const smspiral = require("../images/smspiral.png");


function Header() {


    const HeaderDiv = glamorous.div({
         background: "linear-gradient(-90deg, rgb(193,125,127,1), rgba(75,4,76,1))",
         height: "164px",
         display: "flex",
         justifyContent: "center",
         borderBottom: "2px solid #6bbe94",
         position: "relative",
         transition: "all 0.4s ease-in-out",
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
         transition: "all 1s",
        [mediaQueries.small]: {
            fontSize: '42px',
            margin: "40px 0px 20px 0px",
        }
     });


    const ImageDiv = glamorous.div({
        height: '184px',
        width: "184px",
        background: `url(${spiral}) no-repeat`,
        backgroundSize: "cover",
        display: "flex",
        zIndex: "10",
        transition: "all 1s",
        [mediaQueries.small]: {
            background: `url(${smspiral}) no-repeat`,
            width: "140px",
            height: '140px',
            marginTop:"0px",
            marginLeft: "20px",
        },
    });

        const Icon = glamorous.a({
            color: "#FFB229",
            height: "50px",
            position: "absolute",
            right: "2%",
            bottom: "5%",
            transition: "all 1s",
            [mediaQueries.small]: {
                right: "0%",
                bottom: "0%",
                height: "45px",
            }
    });
        const WebAddress = glamorous.a({
            height: "40px",
            fontSize: "22px",
            textDecoration: "none",
            color: "#4B044C",
            position: "absolute",
            right: "7%",
            bottom: "5%",
            fontFamily: "'PT Sans Narrow'",
             transition: "all 1s",
            [mediaQueries.small]: {
                left: "2%",
                top: "2%",
                fontSize:"18px",
                color:"#FFB229"
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
            <div>
                <Icon href="https://github.com/OshaFoster" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i  className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                </Icon>
                <WebAddress href="https://www.oshafoster.com" target="_blank" rel="noopener noreferrer"><span>oshafoster.com</span>
                </WebAddress>

            </div>
        </HeaderDiv>
    )
}

export default Header;
