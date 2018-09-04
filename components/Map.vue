<template>
  <div id="map" class="map" style="height:calc(100vh - 3.25rem);"/>
</template>

<script>
export default {
  name: "MapBox",
  mounted() {
    this.createMap()
  },
  methods: {
    createMap: () => {
      const mapboxgl = require("mapbox-gl")
      mapboxgl.accessToken =
        "pk.eyJ1Ijoid3FyNjI0IiwiYSI6ImNpdTh0djF0cTAwMG0yb3BqMGwxeHJ4ZWQifQ.ZxuqJ97h61SLdI-CtV0HIw"
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/wqr624/cjlnqdmy96gku2rpdplxlo5pt",
        center: [-3, 55],
        zoom: 2
      })
      map.addControl(new mapboxgl.NavigationControl())
    }
  }
}
</script>
<style>
</style>
