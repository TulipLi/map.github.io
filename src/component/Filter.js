import React, {useState} from "react";

import PointsInfo from './PointsInfo';

const filterList = [{
    title: '物业类型',
    item: [{
        text: '住宅',
    }, {
        text: '商办'
    }]
}, {
    title: '是否开渠',
    item: [{
        text: '是',
    }, {
        text: '否'
    }]
}, {
    title: '是否合作',
    item: [{
        text: '是',
    }, {
        text: '否'
    }],
    show: {
        key: '是否开渠',
        value: '是'
    }
}]

const Filter = ({filter, setFilter, points}) => {
    const [isShow, setIsShow] = useState(true)
    return <div className="filter-container">
        {
            isShow ? <div style={{padding: '10px'}}>
                <FilterItem filter={filter} setFilter={setFilter}/>
                <PointsInfo points={points}/>
            </div> : null
        }
        <Line isShow={isShow} setIsShow={setIsShow}/>
    </div>
}

export default Filter

const FilterItem = ({filter, setFilter}) => {
    return <div>
        {
            filterList.map((filterItem) => {
                const isShow = filterItem.show ? filter.findIndex(f => f.key === filterItem.show.key && f.value === filterItem.show.value) > -1 : true
                if (isShow) {
                    return <div key={filterItem.title}>
                        <p className="filter-item-title">{filterItem.title}</p>
                        <div className="filter-item-btn-container">
                            {
                                filterItem.item.map((itemItem) => {
                                    const index = filter.findIndex(i => i.key === filterItem.title)
                                    const isSelect = index > -1 && filter[index].value === itemItem.text
                                    return <button className={`filter-item-button ${isSelect ? 'cur' : ''}`} key={itemItem.text} onClick={() => {
                                        console.log('click')
                                        if (index > -1) {
                                            if (isSelect) {
                                                setFilter(filter.slice(0, index).concat(filter.slice(index+1)))
                                            } else {
                                                filter[index].value = itemItem.text
                                                setFilter(filter)
                                            }
                                        } else {
                                            filter.push({
                                                key: filterItem.title,
                                                value: itemItem.text
                                            })
                                            setFilter(filter)
                                        }
                                    }}>{itemItem.text}</button>
                                })
                            }
                        </div>
                    </div>
                } else return null
            })
        }
    </div>
}

const Line = ({isShow, setIsShow}) => {
    return <div className="line" onClick={() => setIsShow(!isShow)}>
        <span>{isShow ? '收起' : '展开'}</span>
        <span className={`arrow ${isShow ? 'arrow-up' : 'arrow-down'}`}/>
    </div>
}