<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "pPage[0]">
      <h2 class="header"> {{ pPage[0].header }} </h2>
    </div>
    <!-- Data from Firebase unsuccessfully grabbed -->
    <div v-else>
      <p>Data loading...</p>
      <p>If data doesn't load in the next few seconds, please fill out a bug report and try again.</p>
    </div>
  </div> 
</template>

<script>
import { pPage } from "../firebase"
export default {
  name: 'Projects',
  components: {
  },
  setup() {
    return { pPage }
  }
}
</script>

<style>

</style>