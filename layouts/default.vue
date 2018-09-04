<template>
  <div>
    <Navbar/>
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar"
import Footer from "~/components/Footer"

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
