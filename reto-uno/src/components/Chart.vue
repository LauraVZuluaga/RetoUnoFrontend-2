<template>
  <div>
    <Gender v-if="$store.state.flag===1"/>
    <AgeRange v-if="$store.state.flag===2"/>
    <InfectedCities v-if="$store.state.flag===3"/>

  </div>
</template>

<script>

import store from "vuex";
import Gender from './Gender.vue'
import AgeRange from './AgeRange'
import InfectedCities from './InfectedCities'

export default {
    components: {
        Gender,
        AgeRange, 
        InfectedCities
    },
}
</script>