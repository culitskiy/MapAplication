import React from 'react';
import './place.css';
import {Draggable} from 'react-beautiful-dnd';


export const Place = ({namePlace, id, index, deletePlace}) => {
    
    return (
        <Draggable draggableId={id} index={index}>
            {provided => {
                 
                return(
                   
                    <div className="place-container"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}>
                        
                        {namePlace}
                        
                        <div onClick={()=>deletePlace(id)} className='cross'></div>
                        
                    </div>
                )
            }}
       
        </Draggable>
    )
}