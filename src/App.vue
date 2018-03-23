<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'App'
}

</script>
<style lang="scss">
*{
    padding: 0;
    margin: 0;
}
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
}

li {
    display: inline-block;
    color:#fff;
}

a {
    color: #42b983;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
body{
    background:pink;
    padding:0;margin:0;
}
</style>
