/*
 * @Autor: wencaihao
 * @Date: 2022-12-08 19:49:16
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-11 04:06:57
 * @aim: 
 */

import axios from "../utils/request"

const base = {
    baseUrl:"https://apis.tianapi.com",
    ncov:"/ncov/index",
    ncovbroad:"/ncovabroad/index",
    ncovcity:"/api/API/yiqing.php",
    juheBaseUrl:"/juhe",
    springTravel:"/springTravel/citys",
    springTravelQuery:"/springTravel/query"
}
const api = {
    //疫情数据
    getNcov(params){
        return axios.get(base.baseUrl + base.ncov,{
            params
        })
    },

    //省市疫情
    getncovcity(){
        return axios.get(base.ncovcity)
    },

    //世界疫情
    getncovbroad(params){
        return axios.get(base.baseUrl + base.ncovbroad,{
            params
        })
    },

    //城市疫情
    getncovcity(){
        return axios.get(base.ncovcity)
    },

    //各地政策城市数据
    springTravel(params){
        return axios.get(base.juheBaseUrl + base.springTravel,{
            params
        })
    },

    //各地政策详情
    springTravelQuery(params){
        return axios.get(base.juheBaseUrl + base.springTravelQuery,{
            params
        })
    }
}

export default api;