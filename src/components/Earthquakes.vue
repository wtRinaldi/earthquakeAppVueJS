<template lang="pug">
    div.relative
      div.bg-white
        table
          thead.bg-blue-500
            th.text-white Magnitude
            th.text-white Location
          tr(v-for="earthquake in earthquakes" @click="$emit('updateEarthquake', earthquake)" class="hover:bg-gray-200")
            td {{ earthquake.magnitude }}
            td.whitespace-no-wrap {{ earthquake.location }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'Earthquakes',
  props: {
    isListShown: Boolean,
    default: true
  },
  data() {
    return {
      earthquakes: []
    }
  },
  created() {
    const date = new Date()
    const today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=' + today + '&minmagnitude=1&orderby=magnitude&limit=10')
      .then(response => {
        this.formatResponse(response.data.features)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    formatResponse(response) {
      response.forEach(report => {
        let earthquake = {
          "magnitude": report.properties.mag,
          "location": report.properties.place,
          "time": report.properties.time,
          "lng": report.geometry.coordinates[0],
          "lat": report.geometry.coordinates[1]
        }
        this.earthquakes.push(earthquake);
      })
    }
  }
}
</script>

<style scoped lang="sass">
  #list
    z-index: 1000
</style>
