/* eslint-disable array-callback-return */
import {read, utils} from 'xlsx'

export const fileUploader = (evt) => {
    const selectedFile = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        const data = event.target.result;
        const workbook = read(data, {
            type: 'binary'
        });
        workbook.SheetNames.forEach(function (sheetName) {
            const XL_row_object = utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            if (XL_row_object.length > 0) {
                console.log({XL_row_object})
                const points = format(XL_row_object)
                console.log(points)
                // console.log(encodeURIComponent(JSON.stringify(points)))
                document.getElementById("jsonObject").innerHTML = JSON.stringify(encodeURIComponent(JSON.stringify(points)));
            }
        })
    };
    reader.onerror = function (event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };
    // 读取上传文件为二进制
    reader.readAsBinaryString(selectedFile);
}

const format = (list) => {
    const newList = []
    list.map((infoObj, index) => {
        if (infoObj['坐标']) {
            const newObj = {
                id: index
            }
            const infos = []
            const longInfos = []
            Object.keys(infoObj).map((name) => {
                let value = infoObj[name]
                if (name === '坐标') {
                    let position = value.split(',')
                    newObj.position = {
                        lng: position[0],
                        lat: position[1]
                    }
                    return
                } else if (name === '项目名') {
                    newObj.title = value
                    return
                } else if (name.indexOf("时间") > -1 || name.indexOf("日期") > -1) {
                    value = formatTime(value)
                } else if (value % 1 !== 0) {
                    value = formatNumCeil(value)
                }
                if (name.indexOf('备注') > -1) {
                    longInfos.push({
                        key: name,
                        value
                    })
                } else {
                    infos.push({
                        key: name,
                        value
                    })
                }
            })
            newObj.infos = infos
            newObj.longInfos = longInfos
            newList.push(newObj)
        }
    })
    return newList
}

const formatTime = (value) => {
    let d = new Date((value - (25567 + 2)) * 86400 * 1000)
    let year = d.getFullYear() + ''
    let month = d.getMonth() + 1 + ''
    let date = d.getDate() + ''
    value = `${year}/${month}/${date}`
    return value
}

const formatNumCeil = (value) => {
    if (value > 0.01 && value < 100) {
        value = value.toFixed(1)
    } else if (value > 100) {
        value = value.toFixed(0)
    }
    return value
}
