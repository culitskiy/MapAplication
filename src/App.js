import React,{useState} from 'react';
import {Input} from './components/input/input';
import './App.css';
import { Places } from './components/places/places';
import {Map1} from './components/map/map.jsx';
import {YMaps} from 'react-yandex-maps';
import {DragDropContext} from 'react-beautiful-dnd';
import {somePlaces} from './somePlaces.js';

function App() {
  
  const [places, setPlace] = useState([]);
  let [count, setCount] = useState(0);
  
  let [center, setCenter] = useState([55.768581, 37.681822]);

  const addPlace = (data, id) => {
      let newPlaces = [...places];
      newPlaces.push({id:id,data:data, coordinates:places[places.length - 1].coordinates});
      setPlace(newPlaces);
      
  };
    
  const addSomePlaces = () => {

    if (count > 4){
      return;
    }
    
    let newPlaces = [...places];
    newPlaces.push(somePlaces[count]);
    setPlace(newPlaces);
    setCount(count+1);
    setCenter(newPlaces[newPlaces.length - 1].coordinates)
  };

  const deletePlace = (id) => {
    let newPlaces = [...places];
    newPlaces.map((item,index)=> {
      
        if(item.id === id){
          newPlaces.splice(index,1);
        }

      return(
      setPlace(newPlaces)
      )
    })
  };
  const onDragEnd = (result) => {
    
    const {destination, source} = result;

    if(!destination){
      return;
      }
    if(destination.droppableId === source.droppableId 
      && destination.index === source.index){
        return;
      }

    let newState = [...places];
    let i = newState[source.index];
    newState.splice(source.index, 1);
    newState.splice(destination.index, 0, i);
    setPlace(newState);
  };

  return (
    <div className='container'>
        <div className='places'>
          <DragDropContext onDragEnd={onDragEnd}>
            <Input  addPlace={addPlace} addSomePlaces={addSomePlaces}/>
            <Places deletePlace={deletePlace} places={places} />
          </DragDropContext>
        </div>
        <YMaps>
        <div className='map'> <Map1 center={center} places={places}/></div>
        </YMaps>
    </div>
  );
}

export default App;
