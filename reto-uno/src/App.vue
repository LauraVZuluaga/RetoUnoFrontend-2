<template>
  <div id="app">
    <b-row>
      <b-col>
       <Principal/>
      </b-col>
      <b-col>
        <Chart/>
      </b-col>
    </b-row>
   
  </div>
</template>

<script>
import Principal from './components/Principal.vue'
import Chart from './components/Chart.vue'

export default {
  name: 'App',
  components: {
    Principal, 
    Chart
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

