<template>
  <section class="map">
    <Map />
  </section>
</template>

<script>
import Map from '~/components/Map.vue'

export default {
  components: {
    Map
  }
}
</script>

<style>
.map{
  max-width: 100%;
}
</style>
