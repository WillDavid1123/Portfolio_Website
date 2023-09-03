<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "anPage[0]">
      <div class="container">
          <h2 class="header"> {{ anPage[0].header }} </h2>
          <div>
            <p> {{ anPage[0].top_text }} </p>
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
import { anPage } from "../firebase"
export default {
  name: 'Announcements',
  components: {
  },
  setup() {
    return { anPage }
  }
}
</script>

<style>
</style>