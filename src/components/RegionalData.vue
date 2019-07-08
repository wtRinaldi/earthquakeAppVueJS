<template lang="pug">
  div
    div.pb-2 {{ regionalData.name }}
    div#summary.h-64.overflow-scroll.text-left(v-html="regionalData.summary")

</template>

<script>
import axios from 'axios'

  export default {
    name: 'RegionalData',
    props: {
      earthquake: Object,
      default: {}
    },
    data() {
      return {
        regionalData: {}
      }
    },
    methods: {
      getRegionalData(lat, lng) {
        axios.get('https://earthquake.usgs.gov/ws/geoserve/regions.json?latitude=' + lat + '&longitude=' + lng)
          .then(response => {
            this.regionalData = response.data.tectonic.features[0].properties
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    watch: {
      earthquake(val) {
        this.getRegionalData(val.lat, val.lng)
      }
    }
  }
</script>
<style scoped lang="sass">
  #summary
    p
      padding-bottom: 1rem

</style>
