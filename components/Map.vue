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

      map.on("mouseover", "symbols", function(e) {
        console.log(e)
        map.getCanvas().style.cursor = "pointer"
      })

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "symbols", function(e) {
        console.log(e)
        map.getCanvas().style.cursor = ""
      })

      map.on("click", function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["travels"]
        })
        if (!features.length) {
          return
        }

        var feature = features[0]
        map.flyTo({
          center: feature.geometry.coordinates,
          zoom: 4,
          bearing: 0,
          speed: 1,
          curve: 2,
          easing: function(t) {
            return t
          }
        })
        new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML("<h3>" + feature.properties.place_name + "</h3>")
          .setLngLat(feature.geometry.coordinates)
          .addTo(map)
      })
    }
  }
}
</script>
<style>
</style>
