<!--
 * @Autor: wencaihao
 * @Date: 2022-12-09 22:10:25
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-11 13:50:16
 * @aim: 
-->
<template>
    <div>
        <p class="title"><i></i>疫情地图</p>
        <Tabs :currentIndex="currentIndex" @onIndex="getIndex">
            <Tab index="1" label="国内疫情">
                <div id="chinaMap"></div>
            </Tab>
            <Tab index="2" label="国外疫情">
                <div id="worldMap"></div>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            currentIndex: "1",
        };
    },
    mounted() {

        function nocvCity() {
            return axios.get(
                "/api/API/yiqing.php"
            )
        }

        function nocvaBroad() {
            return axios.get(
                "https://apis.tianapi.com/ncovabroad/index?key=8d010f27a22089bc6eb95f008dc57ca2"
            )
        }

        axios.all([nocvCity(), nocvaBroad()]).then(
            axios.spread((nocvCity, nocvaBroad) =>{
                // 两个请求现在都执行完成 
                let allCitys = [];
                //console.log(nocvCity)
                for (let i = 0; i < nocvCity.data.list.length; i++) {
                    let temp = {
                        name: nocvCity.data.list[i].城市,
                        value: nocvCity.data.list[i].现存确诊,
                    };
                    allCitys.push(temp);
                }

                let worlds = [];
                //console.log(nocvaBroad)
                for(let j = 0;j<nocvaBroad.data.result.list.length;j++){
                    let temp = {
                        name:nocvaBroad.data.result.list[j].provinceName,
                        value:nocvaBroad.data.result.list[j].currentConfirmedCount
                    }
                    worlds.push(temp)
                }
                this.$charts.chinaMap("chinaMap", allCitys);
                this.$charts.worldMap("worldMap",worlds);
            })
        )

    },
    methods: {
        getIndex(index) {
            this.currentIndex = index;
        },
    }
}
</script>

<style scoped>

#chinaMap {
    width: 100%;
    height: 400px;
}
#worldMap {
    width: 375px;
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before {
    content: "";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}

</style>