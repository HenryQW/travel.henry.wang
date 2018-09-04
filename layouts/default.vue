<template>
  <div>
    <NavBar/>
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar"

export default {
  components: {
    NavBar
  }
}
</script>
