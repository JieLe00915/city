import React from 'react';
import SerchInput from '../../../components/SerchInput'
import './style.less'
const SeachHead = () => {
    // window 上的 返回上一级
    function backHandle() {
        window.history.back()
    }

    return (
        <div id="search-header" className="clear-fix">
            <span className="back-icon" onClick={backHandle}>
                <i className="icon-chevron-left"></i>
            </span>
            <div className="input-container">
                <i className="icon-search"></i>
                <SerchInput />
            </div>
        </div>
    )

}
export default SeachHead