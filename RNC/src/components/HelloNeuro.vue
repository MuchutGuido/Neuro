<template>
  <div class="hello">
    <form enctype=multipart/form-data method="post">
      <input type=file name=file>
      <input type=submit value=Subir>
    </form>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloNeuro',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
