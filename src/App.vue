<template>
  <NavBar />
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components:{NavBar},
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
}

h2,h3{
  font-weight: 700;
  color: #3498db;
}

p{
  color: #2c3e50;
  font-weight: 400;
}

a{
  text-decoration: none;
}

.separator {
  margin: 0 5px; 
  color: #fff;
}

.wrapper{
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px;
}

.flex__wrapper{
  display: flex;
  align-items: flex-start;
  gap: 30px;
}
</style>
