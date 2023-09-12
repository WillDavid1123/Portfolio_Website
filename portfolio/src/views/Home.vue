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
      <Loading />
    </div>
  </div>
</template>

<script>
import { hPage } from "../firebase"
import Loading from "./Loading.vue"
export default {
  name: 'Home',
  components: { Loading },
  setup() {
   return { hPage }
  },
}
</script>

<style>
</style>
