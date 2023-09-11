<template>  
  <!-- Use cards to create small project "samples" -->
  <div>
    <div class="card mb-4">
      <!-- <img class="card-img-top" :src="project.Picture" alt="Image of {{ project.Name }}" /> -->
      <div class="card-body">
        <h5 class="card-title" style="text-decoration: underline">{{ project.Name }}</h5>
        <div class="row">
          <div class="col-4" v-for="lang in langs" :key="lang">
            <p :class="[x, lang]">{{ lang }}</p>
          </div>
        </div>
        <p class="card-text text-truncate">
          {{ project.Desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["p"],
  setup(props) {
    const x = "rounded-pill" //Might be able to remove with more research
    const project = props.p
    const langs = project.Languages.split(" ")
    console.log(langs)

    return {project, langs, x}
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
</style>