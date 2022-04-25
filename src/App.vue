<template>
<HeaderCom/>
    <router-view/>
</template>

<script>
  import HeaderCom from "@/components/header/HeaderCom";

  export default {
    name:'APP',
    components:{
      HeaderCom
    }
  }
</script>

<style lang="less">


</style>
