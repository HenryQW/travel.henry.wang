<template>
  <div id="map" class="map" style="height:90vh;"/>
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
        style: "mapbox://styles/mapbox/streets-v10",
        center: [-74.5, 40],
        zoom: 9
      })
      map.addControl(new mapboxgl.NavigationControl())

      const mapCanvas = document.getElementsByClassName("mapboxgl-canvas")[0]

      window.addEventListener("resize", function() {
        mapCanvas.style.width = "100%"
        mapCanvas.style.height = "100%"
        map.style.width = "100%"
        map.style.height = "100%"
        map.resize()
      })
    }
  }
}
</script>
<style>
</style>
