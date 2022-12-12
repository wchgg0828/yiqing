<!--
 * @Autor: wencaihao
 * @Date: 2022-12-11 13:21:46
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-11 14:43:37
 * @aim: 
-->
<template>
    <div class="spring">
        <h3 class="title">春节旅行各地政策</h3>
        <Cascader :options="options" label="出发城市" @onValue="getgoCity"/>
        <Cascader :options="options" label="到达城市" @onValue="getonCity"/>
        <van-button type="info" block @click="gotoSpringView">查看政策</van-button>
    </div>
</template>

<script>
import api from "../api";
import Cascader from "./Cascader"
export default {
    data() {
        return {
            options: [],
            citys:[]
        };
    },
    components:{
        Cascader
    },
    mounted() {
        api.springTravel({
            key: "5f5cd55ef368b7cb8c13a01645bf09e7",
        }).then((res) => {
            var currentAll = [];
            console.log(res)
            if (res.status === 200) {
                for (var i = 0; i < res.data.result.length; i++) {
                    var arr = [];
                    for (var j = 0; j < res.data.result[i].citys.length; j++) {
                        var temp2 = {
                            text: res.data.result[i].citys[j].city,
                            value: res.data.result[i].citys[j].city_id,
                        };
                        arr.push(temp2);
                    }
                    var temp1 = {
                        text: res.data.result[i].province,
                        value: res.data.result[i].province_id,
                        children: arr,
                    };
                    currentAll.push(temp1);
                }
                this.options = currentAll;
            }
        });
    },
    methods:{
        getgoCity(data){
            this.citys.push(data)
        },
        getonCity(data){
            this.citys.push(data)
        },
        gotoSpringView(){
            if(this.citys.length === 2){
                this.$router.push({ name:"SpringView",params:{citys:this.citys} })
            }else{
                this.$notify({ type: 'danger', message: '请选择城市' });
            }
        }
    }
}

</script>

<style scoped>
.spring {
    width: 100%;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
}

.spring .title {
    font-size: 0.16rem;
    margin: 0 0 0.08rem 0.16rem;
}
</style>