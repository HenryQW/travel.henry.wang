<template>
  <div id="map" class="map" style="height:calc(100vh - 3.25rem);" />
</template>

<script>
export default {
  name: 'MapBox',
  mounted() {
    this.createMap()
  },
  methods: {
    createMap: () => {
      const mapboxgl = require('mapbox-gl')
      mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/wqr624/cjlnqdmy96gku2rpdplxlo5pt',
        center: [-3, 55],
        zoom: 2
      })
      map.addControl(new mapboxgl.NavigationControl())

      map.on('mouseover', 'symbols', function (e) {
        map.getCanvas().style.cursor = 'pointer'
      })

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'symbols', function (e) {
        map.getCanvas().style.cursor = ''
      })

      map.on('click', function (e) {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['travels']
        })
        if (!features.length) {
          return
        }

        const feature = features[0]

        map.flyTo({
          center: feature.geometry.coordinates,
          zoom: map.getZoom() > 4 ? map.getZoom() : 4,
          bearing: 0,
          speed: 1,
          curve: 2,
          easing: function (t) {
            return t
          }
        })
        new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<div class="tags has-addons"><span class="tag is-success is-medium">${
              feature.properties.place_name.split(', ')[0]
            }</span><span class="tag is-warning is-medium">${
              feature.properties.place_name.split(', ')[1]
            }</span>${
              feature.properties.year !== undefined
                ? '<span class="tag is-danger is-medium">' +
                  feature.properties.year +
                  '</span></div>'
                : ''
            }`
          )
          .setLngLat(feature.geometry.coordinates)
          .addTo(map)
      })
    }
  }
}
</script>
<style>
.mapboxgl-popup, .mapboxgl-popup-anchor-bottom {
  max-width: fit-content !important;
}
</style>
