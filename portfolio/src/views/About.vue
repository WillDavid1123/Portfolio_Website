<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "abPage[0]">
      <h2 class="header"> {{ abPage[0].header }} </h2>
    </div>
    <!-- Data from Firebase unsuccessfully grabbed -->
    <div v-else>
      <p>Data loading...</p>
      <p>If data doesn't load in the next few seconds, please fill out a bug report and try again.</p>
    </div>
  </div>  
</template>

<script>
import { abPage } from "../firebase"
export default {
  name: 'About',
  components: {
  },
  setup() {
    return { abPage }
  }
}
</script>

<style>

</style>