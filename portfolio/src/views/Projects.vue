<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "pPage[0] && projs">
      <div class="container">
        <h2 class="header"> {{ pPage[0].header }} </h2>
        <div>
          <p> {{ pPage[0].top_text }} </p>
        </div>
        <br />
        <div class="row">
          <div v-for="project in projs" :key="project" class="col-12 col-md-6 col-lg-4">
            <ProjectCard :p="project" />
          </div>
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
import { pPage, projs } from "../firebase"
import ProjectCard from "../components/ProjectCard.vue"
import Loading from "./Loading.vue"
export default {
  name: 'Projects',
  components: { ProjectCard, Loading },
  setup() {
    return { pPage, projs }
  }
}
</script>

<style>

</style>