import React from "react";

const Board = (props) =>{

    const drop = (event) =>{
        event.preventDefault();
        const card_id = event.dataTransfer.getData("card_id");
        const card = document.getElementById(card_id);
        card.style.display = "block";
        event.target.appendChild(card);
    }

    const dragOver =(event) =>{
        event.preventDefault();
    }

    return(
        <div
        id={props.id}
        className={props.className}
        onDrop = {(event)=>drop(event)}
        onDragOver = {(event)=>dragOver(event)}
        >
            {props.children}
        </div>
    )
}

export default Board;