
import React,{useState} from 'react';

export const Input = ({addPlace, addSomePlaces}) => {

    const [input1, setInput] = useState('');

    const entryPlace = (event) => {
        setInput(event.target.value);
        
    };

    const submitInput = (event) => {
        if(event.key === 'Enter'){

            const id=`${input1}_${new Date().getTime()}`;
            
            addPlace(input1, id);
            setInput('');        
        }
    };
    
    
    return (
        <div>
            <button onClick={addSomePlaces}>Нажми на меня</button>
            <input onChange={entryPlace} value={input1} onKeyPress={submitInput} placeholder="Enter place"/> 
        </div>
    )
}