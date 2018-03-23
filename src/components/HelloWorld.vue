<template>
    <div class="hello">
        <ul class="list">
            <router-link tag="li" :to="'webQuery'">面试问题</router-link>
            <router-link tag="li" :to="'twoPage'">54</router-link>  
            <router-link tag="li" :to="'threePage'">3333</router-link>  
            <li>4</li>
            <li>5</li>
        </ul>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoend lang="scss">
.hello{
    padding-top:70px;
}
.list{
    overflow: hidden;
    position: fixed;
    top:0;
    left:0;
    li{
        box-sizing: border-box;
        margin: 0 5px;
        width:140px;
        height:60px;
        line-height:60px;
        background: #a2283d;
        float:left;
        border-radius:10px;
        font-size:14px;
    }
}

</style>
