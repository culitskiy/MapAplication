import React from 'react';
import './places.css';
import { Place } from './place/place';
import {Droppable} from 'react-beautiful-dnd';

export const Places = ({places, deletePlace}) => {
    

    const placeItem =  places.map((item, index) => <Place key={item.id} id={item.id} index={index}  namePlace={item.data} deletePlace={deletePlace}/>)
    

    return(
<Droppable droppableId={`${new Date().getTime()}`} >
              {provided => {
                return(
                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                            {placeItem} 
                            
                        {provided.placeholder}
                    </div>
                )
                }}
              
            </Droppable>
        
    )      
}
 