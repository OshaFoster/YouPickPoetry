import React from "react";
import glamorous from "glamorous";

const FooterContainer = glamorous.div({

    height: "75px",
    width: "100vw",
    position: "fixed",
    backgroundColor: "#dfdfdf",
    zIndex: "1",
    bottom: "0px",
})


const ButtonWrapper = glamorous.div({display: "flex",
    width: "100vw",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20px auto"})

const PoemButton = glamorous.button({
    color: "#fdfdfd",
    // background: "#6ABBB1",
    backgroundColor: "transparent",
    fontFamily: "'PT Sans Narrow'",
    fontSize: "18px",
    borderColor: "#898985",
    border: "none",
    outline: "none",
    width: "30%",
    ':hover,:active,:focus': {
   background: "linear-gradient(-90deg, rgb(223,223,223), rgb(106,187,177))",
 },

})
function Footer(props){

    return(
        <FooterContainer>
            <ButtonWrapper>
                <PoemButton onClick={props.lineToPoem}>Add to Poem</PoemButton>
                <PoemButton onClick={props.DeleteWord}>Delete Word</PoemButton>
                <PoemButton onClick={props.DeletePoem}>Delete Poem</PoemButton>
            </ButtonWrapper>
        </FooterContainer>

    )
}

export default Footer;
