<template lang="pug">
  div#map
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from "leaflet"

  export default {
    name: 'Map',
    props: {
      earthquake: Object,
      default: {}
    },
    data() {
      return {
        map: null
      }
    },
    mounted() {
      this.map = L.map('map').setView([51.505, -0.09], 5)
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid3RyaW5hbGRpIiwiYSI6ImNqeG5ka3R3eTBka2QzbmxpY2dobmtxbmQifQ.yPg9An91IxNNHIF0vogS3w', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoid3RyaW5hbGRpIiwiYSI6ImNqeG5ka3R3eTBka2QzbmxpY2dobmtxbmQifQ.yPg9An91IxNNHIF0vogS3w'
      }).addTo(this.map);
    },
    methods: {
      setMap(lat, lng, mag) {
        this.map.panTo([lat, lng])
        L.circle([lat, lng], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: mag * 100000,
          stroke: false
        }).addTo(this.map);
      }
    },
    watch: {
      earthquake(val) {
        this.setMap(val.lat, val.lng, val.magnitude)
      }
    }
  }
</script>

<style scoped lang="sass">
  #map
    height: 100vh
    width: 100vw
</style>
