<!--
 * @Autor: wencaihao
 * @Date: 2022-12-10 21:10:16
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-11 13:53:29
 * @aim: 
-->
<template>
    <div>
        <div id="city"></div>
    </div>
</template>

<script>
import api from "../api";

export default {
    props:{
        city:{
            type:String,
            default:""
        }
    },
    mounted() {
        var citys = []
        api.getncovcity().then((res) => {
            //console.log(res)
            if (res.status === 200) {
                for (var i = 0; i < res.data.list.length; i++) {
                    if (res.data.list[i].城市 === this.city) {
                        for (
                            var j = 0;
                            j < res.data.list[i].附属城市.length;
                            j++
                        ) {
                            var temp = {
                                name: res.data.list[i].附属城市[j].城市+"市",
                                value:res.data.list[i].附属城市[j].现存确诊,
                            };
                            citys.push(temp);
                        }
                    }
                }
            }
            this.$charts.provinceMap("city", this.city, citys);
        })
    }
}
</script>

<style scoped>
#city {
    width: 100%;
    height: 500px;
}
</style>