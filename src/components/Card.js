import React from "react";

const Card = (props) =>{

    const dragStart = (event) =>{
        const target = event.target;
        event.dataTransfer.setData("card_id",target.id);
        setTimeout(()=>{
            target.style.display = "none";
        },0);
    }

    const dragOver = (event) =>{
        event.stopPropogation();
    }
    return(
        <div 
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={(event)=>dragStart(event)}
        onDragOver={(event)=>dragOver(event)}
        >
            {props.children}
        </div>
    )
}

export default Card;