<template>
  <div>
    <header-cpn></header-cpn>

    <login-cpn></login-cpn>    

  </div>
</template>

<script>
import HeaderCpn from '../components/headercpn'
import LoginCpn from '../components/logincpn'
export default {
    name: 'login',
    components: {
      HeaderCpn,
      LoginCpn
    },
};
</script>

<style lang="less">

</style>