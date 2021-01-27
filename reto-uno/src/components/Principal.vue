<template>
  <div>
    <b-container>
      <b-list-group>
        <b-list-group-item v-for="(item, index) in options" :key="index" @click="chart(index)">
          {{ item.title }}
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>

import axios from "axios";
import store from "vuex";

export default {
  data (){
      return{
          options:[{
              title: "Gender", 
          },
          {
              title: "Age",
          },
          {
              title: "Most affected cities"
          }]
      }
  }, 
  created() {
        this.consults();
    },
    methods: {
        async consults() {
            let response = await axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json');
            this.$store.state.data = response.data;      
            console.log(response.data);      
        },
        chart(index){
            if (index === 0){
                this.$store.state.flag = 1;
            }
            else if (index=== 1){
                this.$store.state.flag = 2;
            }
            else{
                this.$store.state.flag = 3;
            }
        }
    } 
};
</script>

<style scoped lang="scss">
</style>