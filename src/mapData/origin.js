import {
    // taiCangAndKunShan,
    jiaBeiJiaoYeGongYuan
} from './common'

// 地图级别，数字越大，放大倍数越大
const MAP_LEVEL = 12

export const originProps = {
    center: jiaBeiJiaoYeGongYuan, // 地图中心点
    zoom: MAP_LEVEL, // 初使缩放倍数
    style: {
        postion: 'relative',
        height: '100vh'
    },
    enableScrollWheelZoom: true, // 滚轮缩放
    mapType: 'normal', // 地图模式
}