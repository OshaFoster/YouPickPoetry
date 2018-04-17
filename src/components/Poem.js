import React from "react";
import glamorous from "glamorous";

const AddToButton = glamorous.button ({

    color: "#fdfdfd",
    background: "#6ABBB1",
    fontSize: "14px",
    borderColor: "#898985",
    display: "block",
    margin: " 20px auto",
})

export default function Poem(props){

    return (
        <div>
        <p>{props.poem}</p>
    <AddToButton>Add To Poem</AddToButton>
        </div>

    )
}
