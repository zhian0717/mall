<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
	beforeCreate() {
		// this.$router.push("/index")
	}
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	ul,
	li {
		list-style: none;
	}
	
	a:hover {
		text-decoration: none;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
