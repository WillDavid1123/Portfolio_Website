<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "hPage[0]">
      <div class="container">
        <h2 class="header"> {{ hPage[0].header }} </h2>
        <div>
          <p> {{ hPage[0].top_text }} </p>
        </div>
      </div>
    </div>
    <!-- Data from Firebase unsuccessfully grabbed -->
    <div v-else>
      <p>Data loading...</p>
      <p>If data doesn't load in the next few seconds, please fill out a bug report and try again.</p>
    </div>
  </div>
</template>

<script>
import { hPage } from "../firebase"
export default {
  name: 'Home',
  components: { },
  setup() {
   return { hPage }
  },
}
</script>

<style>
</style>
