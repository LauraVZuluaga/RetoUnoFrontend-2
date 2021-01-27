<template>
  <div>
      <h3>Gender Chart</h3>
      <column-chart :data="this.$store.state.chartInfo2" :download="true"></column-chart>
  </div>
</template>

<script>
export default {
    data() {
        return {
            female: 0, 
            male: 0
        }
    },
    created () {
        this.gender();
    },
    methods: {
        gender() {
            this.$store.state.data.map((gender) => {
                if(gender.sexo == 'F'){
                    this.female++;
                }
                else{
                    this.male++;
                }
            });
            this.$set(this.$store.state.chartInfo2, 'Female', this.female);
            this.$set(this.$store.state.chartInfo2, 'Male', this.male);
        }
    },

}
</script>

<style>

</style>