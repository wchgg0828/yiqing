
<!--
 * @Autor: wencaihao
 * @Date: 2022-12-08 20:34:09
 * @LastEditors: wencaihao
 * @LastEditTime: 2022-12-09 22:04:31
 * @aim: 
-->
<template>
    <div class="info">
        <p class="title">
            <i></i>
            疫情防控信息
        </p>
        <div class="content">
            <p>{{ covid19Info.title1 }}</p>
            <p>{{ covid19Info.title2 }}</p>
            <p>{{ covid19Info.title3 }}</p>
            <p>{{ covid19Info.title4 }}</p>
            <p>{{ covid19Info.title5 }}</p>
        </div>
    </div>
</template>

<script>

export default {
//import引入的组件需要注入到对象中才能使用
    props: {
        covid19Info:{
            type: Object,
            default:function(){
                return {}
            }
        }
    }

}
</script>

<style scoped>
.info {
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
}
.title {
    font-size: 0.17rem;
}

.title i {
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
}
.content {
    padding: 0.06rem 0.16rem;
}

.content p {
    font-size: 13px;
    margin: 5px 0;
}
</style>