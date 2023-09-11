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
      <p>Data loading...</p>
      <p>If data doesn't load in the next few seconds, please fill out a bug report and try again.</p>
    </div>
  </div> 
</template>

<script>
import { pPage, projs } from "../firebase"
import ProjectCard from "../components/ProjectCard.vue"
export default {
  name: 'Projects',
  components: { ProjectCard },
  setup() {
    return { pPage, projs }
  }
}
</script>

<style>

</style>