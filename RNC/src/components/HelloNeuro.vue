<template>
  <div class="hello">
    <img src="../assets/default-img.jpg">
    <iframe src="http://127.0.0.1:8888/processImg" frameborder="0"></iframe>
    <!-- <form enctype=multipart/form-data method="post">
      <input type=file name=file>
      <input type=submit value="Analizar">
    </form> -->
  </div>
</template>

<script>
export default {
  name: 'HelloNeuro',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe {
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto
}
 /* {
  color: #42b983;
} */
</style>
