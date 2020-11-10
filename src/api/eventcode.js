/**
 * eventCode接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/axios'; // 导入创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const eventcode = {  
    
    //提交参与者选择的时间与填写的信息
    //attendEvent
    eventChoose(eventCode,params) {
        return axios.post(base.baseUrl + `/${eventCode}/`,null,
        /* qs.stringify(params) */
         {
            params: params
        }
        )
    },
    
    //创建者更新填写的相关信息
    editEvent(params) {
        return axios.post(base.baseUrl + `/${eventCode}/edit/${hostCode}`, null, {
            params: params
        })
    },

    //数据汇总界面 input:eventCode,hostCode
    resultData(eventCode,hostCode,params) {
        return axios.post(base.baseUrl + `/${eventCode}/result/${hostCode}`, /* qs.stringify(params) */null, {
            params: params
        })
    },

    
}

export default eventcode;