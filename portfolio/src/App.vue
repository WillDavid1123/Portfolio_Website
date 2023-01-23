<template>
 <div>
  <NavBar />
  <div id="content">
    <router-view style="margin-top: 60px;"/>
  </div>
  <Footer />
 </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  setup() {
    
  },
  components: {
    NavBar, Footer
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* #content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1
} */
</style>
