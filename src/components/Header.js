import React from "react";
import glamorous from "glamorous";
const spiral = require("../images/spiral.png")
// const tree = require("../images/tree.png")

function Header() {
    const HeaderDiv = glamorous.div({
         background: "linear-gradient(-90deg,rgba(193,125,127,1), rgba(75,4,76,1))",
         height: "164px", display: "flex",
         justifyContent: "center",
         borderBottom: "2px solid #6ABBB1",
         position: "relative"
     });

    const HeaderH1 = glamorous.h1({fontSize: '52px', color: "#FDFBFC", fontFamily: "'Amatic SC'", fontWeight: "300", margin: "45px 20px 0px 0px"});


    const ImageDiv = glamorous.div({
        height: '184px',
        width: "184px",
        background: `url(${spiral}) no-repeat`,
        backgroundSize: "cover",
        display: "flex",
        zIndex: "10"
    });

        const Icons = glamorous.div({
            color: "#FFB229",
            height: "50px",
            position: "absolute",
            right: "2%",
            bottom: "5%"

        })

    return (

        <HeaderDiv>
            <HeaderH1>
                You-Pick-it-
                <span style={{
                    color: " #FFB229"
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
