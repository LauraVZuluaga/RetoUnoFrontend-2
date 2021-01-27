<template>
    <div>
        <h3>Age Range Chart</h3>
      <column-chart :data="this.$store.state.chartInfo" :download="true"></column-chart>
    </div>
</template>

<script>

import store from 'vuex';

export default {
    data() {
        return {
            range0to20: 0,
            range20to40: 0,
            range40OrMoreYears: 0
        }
    },
    created () {
        this.ageRange();
    },
    methods: {
        ageRange() {
            this.$store.state.data.map((age) =>{
                if(age.edad >= 0 && age.edad <=20){
                    this.range0to20++;
                }
                else if(age.edad >= 20 && age.edad <=40){
                    this.range20to40++;
                }
                else if(age.edad >=40){
                    this.range40OrMoreYears++;
                }
            });
            this.$set(this.$store.state.chartInfo, 'Range 0 to 20', this.range0to20);
            this.$set(this.$store.state.chartInfo, 'Range 20 to 40', this.range20to40);
            this.$set(this.$store.state.chartInfo, 'Range 40 or more years', this.range40OrMoreYears);
        }
    }
}
</script>

<style>

</style>