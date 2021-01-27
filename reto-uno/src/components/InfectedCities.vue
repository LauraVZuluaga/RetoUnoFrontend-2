<template>
  <div>
      <h3>Cities with the Highest Number of Infections Chart</h3>
      <column-chart :data="this.$store.state.chartInfo3" :download="true"></column-chart>
  </div>
</template>

<script>

import store from 'vuex';

export default {
    data() {
        return {
            result: []
        }
    },
    created () {
        this.infectedCities;
    },
    methods: {
        infectedCities() {
        let json = {};
        array = array.map((element) => {
        if (!json[element["ciudad_municipio_nom"]]) {
            json[element["ciudad_municipio_nom"]] = {
            name: element["ciudad_municipio_nom"],
            value: 1,
            };
        } else {
            json[element["ciudad_municipio_nom"]].value += 1;
        }

        return json[element["ciudad_municipio_nom"]];
        });

        const dataArr = new Set(array);
        result = [...dataArr];
        result.sort((a, b) => {
        return b["value"] - a["value"];
        });
        this.$set(this.$store.state.chartInfo3, this.result.name[0], this.result.value[0]); 
        },
    }
}
</script>
