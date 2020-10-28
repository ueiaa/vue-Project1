<template>
  <div>
    <page-tab-bar></page-tab-bar>

    <copy-link-cpn></copy-link-cpn>    

  </div>
</template>

<script>
import PageTabBar from '../components/content/tabbar/PageTabBar'
import CopyLinkCpn from '../components/content/CopyLinkCpn'

export default {
    name: 'copylink',
    components: {
      PageTabBar,
      CopyLinkCpn
    },
};
</script>

<style lang="less">


</style>