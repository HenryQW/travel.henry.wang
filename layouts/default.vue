<template>
  <div>
    <Navbar/>
    <main role="main">
      <nuxt/>
    </main>
    <Footer/>
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

<style>
</style>
