<template lang="pug">
  div
    Earthquakes.px-8(@updateEarthquake="setData")
    RegionalData(:earthquake="earthquake")
    Map(:earthquake="earthquake")
</template>

<script>
  import Earthquakes from '@/components/Earthquakes'
  import RegionalData from '@/components/RegionalData'
  import Map from '@/components/Map.vue'


export default {
  name: 'home',
  components: {
    Earthquakes,
    RegionalData,
    Map
  },
  data() {
    return {
      earthquake: {}
    }
  },
  methods: {
    setData(value) {
      this.earthquake = value
    }
  }
}
</script>
