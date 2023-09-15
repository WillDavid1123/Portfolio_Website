<template>  
  <!-- Use cards to create small project "samples" -->
  <div v-if="project">
    <div class="card mb-4">
      <!-- <img class="card-img-top" :src="project.Picture" alt="Image of {{ project.Name }}" /> -->
      <div class="card-body">
        <h5 class="card-title" style="text-decoration: underline">{{ project.Name }}</h5>
        <div class="row">
          <div class="col-4" v-for="tag in tags" :key="tag">
            <p :class="[x, tag]">{{ tag }}</p>
          </div>
        </div>
        <p class="card-text text-truncate">
          {{ project.Desc }}
        </p>
        <button class="btn expand" type="button" data-bs-toggle="modal" data-bs-target=".PM" role="button" @click="updateModal">Expand Card</button>
      </div>
    </div>
    <div class="PM modal fade" tabindex="-1">
      <ProjectPopup/>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"
import ProjectPopup from './ProjectPopup.vue';
import Projects from '../views/Projects.vue';
export default {
  props: ["p"],
  components: { ProjectPopup, Projects },
  setup(props) {
    const store = useStore()
    const x = "rounded-pill" //Might be able to remove with more research
    const project = props.p
    const tags = project.Tags.split(" ")

    const updateModal = () => {
      store.dispatch('updateProject', [project, tags])
    }

    return {updateModal, project, tags, x}
  },
};
</script>

<style>
div.card {
  background-color: rgb(223, 220, 220);
}

p.rounded-pill {
  border: 1px solid black;
  background-color: rgb(176, 177, 179);
}

button.expand {
  color: blue;
  text-decoration: underline;
}
</style>