/**
 * eventCode接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/axios'; // 导入创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const eventinfo = {  
    
    //参与者填写页面日历渲染
    getEventInfo(eventCode,params) {
        return axios.post(base.baseUrl + `/eventinfo/${eventCode}`,null,
        /* qs.stringify(params) */
         {
            params: params
        }
        )
    }
}

export default eventinfo;