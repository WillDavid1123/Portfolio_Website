<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "abPage[0]">
      <h2 class="header"> {{ abPage[0].header }} </h2>
    </div>
    <!-- Data from Firebase unsuccessfully grabbed -->
    <div v-else>
      <Loading />
    </div>
  </div>  
</template>

<script>
import { abPage } from "../firebase"
import Loading from "./Loading.vue"
export default {
  name: 'About',
  components: { Loading },
  setup() {
    return { abPage }
  }
}
</script>

<style>

</style>