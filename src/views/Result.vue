<template>
    <div>
        <page-tab-Bar></page-tab-Bar>
        <result-check></result-check>
    </div>
</template>
<script>
import PageTabBar from '../components/content/tabbar/PageTabBar'
import ResultCheck from '../components/content/ResultCheck'
export default {
    name: 'result',
    components: {
        PageTabBar,
        ResultCheck,
    },
}
</script>
<style lang="less">
    
</style>