/* eslint-disable no-undef */
import './App.css';
import React, { useState } from 'react'
import Map from 'react-bmapgl/Map'
import { MapApiLoaderHOC, Polygon } from 'react-bmapgl'
import { originProps } from './mapData/origin'
import project from './mapData/project'
import floor from './mapData/floor'
import Point from './component/Marker'

function App() {
  // console.log(new BMapGL.Boundary())
  // var bd = new BMapGL.Boundary();
  // const [boundaries, setBoundaries] = useState([])
  // bd.get('太仓市', function (rs) {
  //   // console.log('外轮廓：', rs.boundaries[0])
  //   // console.log('内镂空：', rs.boundaries[0])

  //   setBoundaries(rs.boundaries[0].split(';'))
  //   // var hole = new BMapGL.Polygon(rs.boundaries, {
  //   //     fillColor: 'blue',
  //   //     fillOpacity: 0.2
  //   // });
  //   // map.addOverlay(hole);
  // });
  // console.log(boundaries)
  return (
    <Map {...originProps}>
      {
        project.map((item) => {
          return <Point key={item.id} {...item} />
        })
      }
      {
        floor.map((item) => {
          return <Point key={item.id} icon="loc_blue" {...item} />
        })
      }
      {/* {boundaries.length ? <Polygon
        path={boundaries}
        strokeColor="#f00"
        strokeWeight={2}
        fillColor="#ff0"
        fillOpacity={0.3}
        onMouseover={e => { console.log(e) }}
      /> : null} */}
    </Map>
  );
}

export default MapApiLoaderHOC({ ak: '7zVZamZcs64S2GTsKdfR2hqakDVQNWmK' })(App);
