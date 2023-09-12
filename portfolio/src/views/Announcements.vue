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
      <Loading />
    </div>
  </div>  
</template>

<script>
import { anPage } from "../firebase"
import Loading from "./Loading.vue"
export default {
  name: 'Announcements',
  components: { Loading },
  setup() {
    return { anPage }
  }
}
</script>

<style>
</style>