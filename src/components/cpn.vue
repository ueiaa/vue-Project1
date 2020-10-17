<template>
    <div></div>
</template>

<script>
//1.创建组件构造器对象
    const cpnC = Vue.extend({
        template: 
    <div class="title1" style="cursor:pointer;">
      <div class="text">
        <p>
          <span>账号密码登录</span>
        </p>
      </div>
    </div>

    }) 
//2.注册组件（全局组件，意味着可以在多个Vue的实例下面使用）
    Vue.component('my-cpn', cpnC)
//3.使用组件
export default {
    
}
</script>

<style lang="less">
    
</style>