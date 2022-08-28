import { fileUploader } from '../utils/jsToJSON'

const UpLoader = () => {
    return <div>
        <input type="file" id="fileUploader" name="fileUploader" accept=".xls, .xlsx, numbers" onChange={fileUploader}/>
        <div id="jsonObject"></div>
    </div>
}

export default UpLoader