/**
 * EnterResultsCode模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/axios'; // 导入创建的axios实例

const enterResultsCode = {  
    
    // post提交
    enterResultCode(params) {
        return axios.post(base.baseUrl + '/EnterResultsCode', null, {
            params: params
        });
    },
    
}

export default enterResultsCode;