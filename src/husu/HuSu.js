/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import '../App.css';
import React, { useEffect, useState } from 'react'
import Map, { MapApiLoaderHOC } from 'react-bmapgl/Map'
import { originProps } from '../mapData/origin'
// import project from './mapData/project'
// import floor from './mapData/floor'
import husuPoint from '../mapData/husuPoint'
import Point from '../component/Marker'

// eslint-disable-next-line no-unused-vars
import UpLoader from '../component/UploadJS'
import Filter from '../component/Filter'

function HuSu() {
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
	const [points, setPoints] = useState(husuPoint)
	const [filter, setFilter] = useState([])
	console.log({filter})
	useEffect(() => {
		const newPoints = husuPoint.filter((dataItem) => {
			let needFilter = true
			filter.map(filterItem => {
				dataItem.infos.map(infoItem => {
					if (infoItem.key === filterItem.key && infoItem.value !== filterItem.value) {
						needFilter = false
					} 
				})
			})
			return needFilter
		})
		setPoints(newPoints)
	}, [filter])
	console.log({ points })
	return (
		<Map {...originProps}>
			{/* {
        project.map((item) => {
          return <Point key={item.id} {...item} />
        })
      }
      {
        floor.map((item) => {
          return <Point key={item.id} icon="loc_blue" {...item} />
        })
      } */}
			{
				points.map((item) => {
					return <Point key={item.id} icon="loc_red" {...item} />
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
			<Filter setFilter={setFilter} filter={[...filter]} points={points}/>
		</Map>
	);
}

export default MapApiLoaderHOC({ ak: '7zVZamZcs64S2GTsKdfR2hqakDVQNWmK' })(HuSu);

// export default UpLoader
// export default <div>husu</div>