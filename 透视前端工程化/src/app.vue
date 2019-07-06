<template>
    <div id="app">
        <h2>欢迎使用模板</h2>
        <router-view/>
    </div>
</template>

<style lang='scss'>
$black: black;
$yellow: yellow;
h2 {
  // 将字体设置为40px
  font-size: 40px;
  color: $black;
  background: $yellow;
}
</style>

<script>
// conole.log('asdf')
export default {
    name: "App"
}
</script>