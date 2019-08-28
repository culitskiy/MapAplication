import React from 'react';

import {YMaps,withYMaps, ZoomControl, Map,Polyline, Placemark} from 'react-yandex-maps';


  export const Map1 = withYMaps(({places, center}) => {
    // let coordinaitesMarks=[[]];
//     function geocode(ymaps) {
//      places.map((item) => {
//       console.log(item.data);
//      var myGeocoder = ymaps.geocode(`${item.data}`);
// myGeocoder.then(
//   function (res) {
//     //выуживаем массив результатов
//     Map.geoObjects.add(res.geoObjects);
//     console.log(res);
//     const coordinates = res.geoObjects.properties.data.metaDataProperty.GeocoderResponseMetaData.Point.coordinates;
//     coordinaitesMarks.push(coordinates);
//     console.log(coordinates);
//     console.log(coordinaitesMarks);
    // var objs = res.geoObjects.getAll();
    //выводим их в консоль
   
    // for(let i=0; i < objs.length; i++)
    //   console.log(objs[i].properties.getAll());

      
  // });})
  //   }
  
  let marks = places.map((item, id) => {
    let beforId = (id-1 >= 0) ? id-1 : id;
    
    return (
      <div key={`${item.data}${new Date().getTime()}`}>
      
      <Placemark
            
            geometry={[item.coordinates[0],item.coordinates[1]]}
            properties={{
              hintContent: item.data,
              iconCaption: item.data,
              balloonContentHeader: item.data,
              balloonContentBody: "Some place in the Moscow",
              
            }}
            options={{
              iconColor: '#000000',
              draggable: true,
              openBalloonOnClick: true,
              openEmptyBalloon: false,
              
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            
            />
      <Polyline
            geometry={[places[beforId].coordinates, item.coordinates]}
            options={{
              balloonCloseButton: false,
              strokeColor: '#000',
              strokeWidth: 4,
              strokeOpacity: 0.5,
      }}
    />
   
    </div>
    )
  })

    return (
    <div>
      <YMaps 
      instanceRef = {inst => inst.events.add('drag', DragEvent)} 
      query={{
      apikey: '9f221f3a-8b4e-4385-b137-246c59d1d655',
    }}>
        <Map
        // onLoad={ymaps => geocode(ymaps)}  
            modules={['geocode']} state={{ center: center, zoom: 15 }}  height='60vh' width='60vw' >
            {marks}
            <ZoomControl/>
        </Map>
      </YMaps>
    </div>
    )
  })
