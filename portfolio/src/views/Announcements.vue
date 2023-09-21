<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "anPage[0] && anns">
      <div class="container">
          <h2 class="header"> {{ anPage[0].header }} </h2>
          <div>
            <p> {{ anPage[0].top_text }} </p>
          </div>
          <div v-for="a in anns" :key="a">
            <annCard :ann="a" />
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
import { anPage, anns } from "../firebase"
import Loading from "./Loading.vue"
import annCard from "../components/AnnCard.vue"
export default {
  name: 'Announcements',
  components: { Loading, annCard },
  setup() {
    return { anPage, anns }
  }
}
</script>

<style>
</style>