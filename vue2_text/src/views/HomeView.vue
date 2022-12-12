<!--
 * @Autor: wencaihao
 * @Date: 2022-12-11 12:50:51
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-11 13:23:28
 * @aim: 
-->
<template>
  <div class="home">
    <Header />
    <Covid19Info :covid19Info = "covid19Info"/>
    <CaseNum :caseNumData = "caseNumData"/>
    <Map />
    <SpringTravel />
  </div>
</template>

<script>
import api from "../api"
import Header from "../components/Header.vue"
import Covid19Info from "../components/Covid19Info.vue"
import CaseNum from "../components/CaseNum.vue"
import Map from "../components/Map.vue"
import SpringTravel from "../components/SpringTravel.vue"

export default {
  name: 'HomeView',
  data(){
    return{
      covid19Info: {
        title1 : "",
        title2 : "",
        title3 : "",
        title4 : "",
        title4 : ""
      },
      caseNumData:{
        modifyTime: "",

        currentConfirmedCount: "", //现存确诊人数
        confirmedCount: "", //累计确诊人数
        suspectedCount: "", //累计境外输入人数
        curedCount: "", //累计治愈人数
        deadCount: "", //累计死亡人数
        seriousCount: "", //现存无症状人数

        suspectedIncr: "", //新增境外输入人数
        currentConfirmedIncr: "", //相比昨天现存确诊人数
        confirmedIncr: "", //相比昨天累计确诊人数
        curedIncr: "", //相比昨天新增治愈人数
        deadIncr: "", //相比昨天新增死亡人数
        seriousIncr:"" //相比昨天现存无症状人数
      }
    }
  },
  components: {
    Header,
    Covid19Info,
    CaseNum,
    Map,
    SpringTravel
  },
  mounted(){
    api.getNcov({
      key: "8d010f27a22089bc6eb95f008dc57ca2"
    })
      .then(res =>{
        //console.log(res.data);
        if(res.status === 200){
          //疫情防控
          this.covid19Info.title1 = res.data.result.news[0].title
          this.covid19Info.title2 = res.data.result.news[1].title
          this.covid19Info.title3 = res.data.result.news[2].title
          this.covid19Info.title4 = res.data.result.news[3].title
          this.covid19Info.title5 = res.data.result.news[4].title
          
          //病例
          this.caseNumData.modifyTime = res.data.result.desc.modifyTime

          this.caseNumData.currentConfirmedCount = res.data.result.desc.currentConfirmedCount
          this.caseNumData.confirmedCount = res.data.result.desc.confirmedCount
          this.caseNumData.suspectedCount = res.data.result.desc.suspectedCount
          this.caseNumData.curedCount = res.data.result.desc.curedCount
          this.caseNumData.deadCount = res.data.result.desc.deadCount
          this.caseNumData.seriousCount = res.data.result.desc.seriousCount

          this.caseNumData.suspectedIncr = res.data.result.desc.suspectedIncr
          this.caseNumData.currentConfirmedIncr = res.data.result.desc.currentConfirmedIncr
          this.caseNumData.confirmedIncr = res.data.result.desc.confirmedIncr
          this.caseNumData.curedIncr = res.data.result.desc.curedIncr
          this.caseNumData.deadIncr = res.data.result.desc.deadIncr
          this.caseNumData.seriousIncr = res.data.result.desc.seriousIncr
        
        }
    })
      .catch(error =>{});

  }
}
</script>
