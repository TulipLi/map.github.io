/* eslint-disable no-undef */
import React, { useState } from 'react'
import Marker from 'react-bmapgl/Marker';
import InfoWindow from 'react-bmapgl/InfoWindow';
import Label from 'react-bmapgl/Label';

const Point = ({ position, title, infos, remark, distribution, longInfos, icon }) => {
    const [showInfoWindow, setShowInfoWindow] = useState(false)
    return <>
        <Label position={position} text={title} offset={new BMapGL.Size(20, -30)} style={{
            color: 'white',
            borderRadius: '15px',
            background: 'rgba(0, 0, 0, 0.6)',
            borderColor: '#666666',
            padding: '2px 10px',
            fontSize: '12px',
            fontWeight: 'bold',
            height: '20px',
            lineHeight: '20px',
            fontFamily: '微软雅黑',
        }} onClick={() => setShowInfoWindow(!showInfoWindow)} />
        <Marker position={position} icon={icon || "loc_red"} onClick={() => setShowInfoWindow(!showInfoWindow)} />
        {
            showInfoWindow &&
            <InfoWindow title={title} position={position} offset={new BMapGL.Size(0, -10)} onClose={() => setShowInfoWindow(false)} width={365} height={200}>
                {/* <img style={{ backgroundImage: `url(img/${title}.png)`, backgroundSize: "100% 100%", width: '360px', height: '240px' }} alt="" /> */}
                <div className="info-container">
                    {
                        infos.map(info => {
                            return <p className="info-p">
                                <span className={`info-title`}>{info.key}</span>
                                <span className="info-value">{info.value}</span>
                            </p>
                        })
                    }
                    {distribution ? <p className="info-distribution">
                        <span className="info-title">分销</span>
                        <span className="info-value">{distribution}</span>
                    </p> : null}
                    {longInfos.map(info => {
                        return <p className="info-distribution">
                            <span className={`info-title`}>{info.key}</span>
                            <span className="info-value">{info.value}</span>
                        </p>
                    })}

                </div>
                {remark ? <p className="info-remark">
                    <span className="info-title">备注</span>
                    <span className="">{remark}</span>
                </p> : null}

            </InfoWindow>
        }
    </>
}

export default Point