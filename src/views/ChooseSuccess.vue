<template>
    <div>
        <page-tab-Bar></page-tab-Bar>
        <success></success>
        
    </div>
</template>
<script>
import PageTabBar from '../components/content/tabbar/PageTabBar'
import Success from '../components/content/Success'
export default {
    name: 'cSuccess',
    components: {
        PageTabBar,
        Success
    },
}
</script>
<style lang="less">

</style>