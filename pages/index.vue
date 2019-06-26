<template>
  <section class="container is-full">
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
.container.is-full {
  flex: none;
  width: 100%;
  max-width: 100%;
}
</style>
