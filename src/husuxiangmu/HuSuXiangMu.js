/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import '../App.css';
import React, { useState } from 'react'
import Map, { MapApiLoaderHOC } from 'react-bmapgl/Map'
import { originProps } from '../mapData/origin'
import husuxiangmuPoint from '../mapData/husuxiangmuPoint'
import Point from '../component/Marker'
import Tip from '../component/Tip'

function HuSuXiangMu() {
	const [points, setPoints] = useState(husuxiangmuPoint)
	return (
		<>
			<Map {...originProps}>
				{
					points.map((item) => {
						return <Point key={item.id} icon="loc_red" {...item} />
					})
				}
			</Map>
			<Tip />
		</>
	);
}

export default MapApiLoaderHOC({ ak: '7zVZamZcs64S2GTsKdfR2hqakDVQNWmK' })(HuSuXiangMu);