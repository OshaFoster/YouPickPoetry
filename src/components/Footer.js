import React from "react";
import glamorous from "glamorous";

const FooterContainer = glamorous.div({

    height: "75px",
    width: "100vw",
    position: "fixed",
    backgroundColor: "#d8d8d8",
    zIndex: "1",
    bottom: "0px",
})


const ButtonWrapper = glamorous.div({display: "flex",
    width: "100vw",
    alignItems: "center",
    justifyContent: "space-around",



})

const PoemButton = glamorous.button({
    color: "#676767",
    backgroundColor: "transparent",
    fontFamily: "'PT Sans Narrow'",
    fontSize: "18px",
    border: "none",
    outline: "none",
    height: "75px",
    width: "33%",
    transition: "all 0.2s ease-in-out",
    ':hover,:active,:focus': {
   background: '#898985',
   color: '#FDFBFC'

 },

})
function Footer(props){

    return(
        <FooterContainer>
            <ButtonWrapper>
                <PoemButton onClick={props.DeleteWord}>Delete Word</PoemButton>
            <PoemButton onClick={props.lineToPoem}>Add to Poem</PoemButton>
                <PoemButton onClick={props.DeletePoem}>Delete Poem</PoemButton>
            </ButtonWrapper>
        </FooterContainer>

    )
}

export default Footer;
