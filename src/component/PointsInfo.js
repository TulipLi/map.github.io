/* eslint-disable array-callback-return */
import React from "react";

const PointsInfo = ({points}) => {
    let sailingNum = 0
    let waitSailNum = 0
    points.map(p => {
        p.infos.map(infoItem => {
            if (infoItem.key === '在售套数') {
                sailingNum += infoItem.value
            } else if (infoItem.key === '待售套数') {
                waitSailNum += infoItem.value
            }
        })
    })
    return <div>
        <p className="filter-item-title">盘数</p>
        <p>{points.length}</p>
        <p className="filter-item-title">在售套数</p>
        <p >{sailingNum}</p>
        <p className="filter-item-title">待售套数</p>
        <p>{waitSailNum}</p>
    </div>
}

export default PointsInfo