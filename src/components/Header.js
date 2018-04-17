import React from "react";
import glamorous from "glamorous";
const spiral = require("../images/spiral.png")
// const tree = require("../images/tree.png")

function Header(){
    const HeaderDiv = glamorous.div({
        background: "linear-gradient(-90deg,  rgba(193,125,127,1), rgba(75,4,76,1))",
        height: "164px",
        display: "flex",
        justifyContent: "center",
        borderBottom: "2px solid #6ABBB1",

    });

    const HeaderH1 = glamorous.h1({
        fontSize: '52px',
        color: "#FDFBFC",
        fontFamily:"'Amatic SC'",
        fontWeight: "300",
        margin: "45px 20px 0px 0px",


    });
    //
    // const HeaderImage = glamorous.div({
    //     height: '184px',
    //     width: "184px",
    //     background: "url(https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-0.3.5&s=26a822c267b5504ba58fa918a439c920&auto=format&fit=crop&w=800&q=80) no-repeat 30% 50%",
    //     backgroundSize: "500px",
    //     borderRadius: "50%",
    //     marginLeft: "30px"
    //
    // });

    const ImageDiv = glamorous.div({
        height: '184px',
        width: "184px",
        background: `url(${spiral}) no-repeat`,
        backgroundSize: "cover",
        display: "flex",
        justifySelf: "center",
    });


    return(

        <HeaderDiv>
            <HeaderH1> You-Pick-it- <span style={{color:" #ebbe46"}}>Poetry</span></HeaderH1>
            <ImageDiv/>

        </HeaderDiv>
    )
}

export default Header;
