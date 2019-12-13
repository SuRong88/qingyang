<template>
  <div id="app">
  	<router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
  	this.getMyInfo();
  }
}
</script>

<style>

</style>