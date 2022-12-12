/*
 * @Autor: wencaihao
 * @Date: 2022-12-09 22:09:39
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-11 14:31:51
 * @aim: 
 */
import echarts from "echarts"
import nameMap from "./name"

const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    chinaMap(id, data) {
                        var myEcharts = echarts.init(document.getElementById(id))
                        var option = {
                            // 提示信息
                            tooltip: {
                                triggerOn: "click",  // 事件类型
                                enterable: true, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
                                formatter(data) {
                                    return "<a href='/#/city/" + data.name + "' style='color:#fff'><div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div></a>"
                                }
                            },
                            visualMap: [{  // 映射-颜色值
                                orient: "vertical", // 分段方向:horizontal水平
                                type: "piecewise", // 分段
                                pieces: [  // 配置颜色区间
                                    { min: 0, max: 0, color: "#FFFFF0" },
                                    { min: 1, max: 100, color: "#FDFDCF" },
                                    { min: 100, max: 1000, color: "#FE9E83" },
                                    { min: 1000, max: 10000, color: "#E55A4E" },
                                    { min: 10000, color: "#4F070D" }
                                ]
                            }],
                            series: [{
                                name: "省",
                                type: "map",  // 配置图表类型
                                map: "china", // 中国地图
                                roam: false,  // 是否允许自动缩放
                                zoom: 1.2,    // 地图缩放比例
                                label: {      // 配置字体
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 10
                                        }
                                    }
                                },
                                itemStyle: {  // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data: data
                            }]
                        }
                        myEcharts.setOption(option);
                    },
                    worldMap(id, data) {
                        var myEcharts = echarts.init(document.getElementById(id))
                        var option = {
                            tooltip: {
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            visualMap: [{  // 映射-颜色值
                                orient: "vertical", // 分段方向:horizontal水平
                                type: "piecewise", // 分段
                                pieces: [  // 配置颜色区间
                                    { min: 0, max: 0, color: "#FFFFF0" },
                                    { min: 1, max: 10000, color: "#FDFDCF" },
                                    { min: 10000, max: 100000, color: "#FE9E83" },
                                    { min: 100000, max: 1000000, color: "#E55A4E" },
                                    { min: 1000000, color: "#4F070D" }
                                ]
                            }],
                            series: [{
                                name: "世界地图",
                                type: "map",  // 配置图表类型
                                map: "world", // 中国地图
                                roam: true,  // 是否允许自动缩放
                                zoom: 1.8,    // 地图缩放比例
                                label: {      // 配置字体
                                    normal: {
                                        show: false,  // 控制地图显示名字
                                        textStyle: {
                                            fontSize: 10
                                        }
                                    }
                                },
                                nameMap: nameMap,
                                itemStyle: {  // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data: data
                            }]
                        }
                        myEcharts.setOption(option);
                    },
                    provinceMap(id,cityName,data) {
                        var myEcharts = echarts.init(document.getElementById(id))
                        var option = {
                            tooltip: {
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            visualMap: [{  // 映射-颜色值
                                orient: "vertical", // 分段方向:horizontal水平
                                type: "piecewise", // 分段
                                pieces: [  // 配置颜色区间
                                    { min: 0, max: 0, color: "#FFFFF0" },
                                    { min: 1, max: 100, color: "#FDFDCF" },
                                    { min: 100, max: 1000, color: "#FE9E83" },
                                    { min: 1000, color: "#E55A4E" }
                                ]
                            }],
                            series: [{
                                name: "市",
                                type: "map",  // 配置图表类型
                                map: cityName, // 必须写中文
                                roam: false,  // 是否允许自动缩放
                                zoom: 1.2,    // 地图缩放比例
                                label: {      // 配置字体
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 10
                                        }
                                    }
                                },
                                itemStyle: {  // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        }
                        myEcharts.setOption(option);
                    }
                }
            }
        }
    })
}

export default install;