<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "abPage[0] && abMe[0] && abSite[0]">
      <div class="container"> 
        <h2 class="header"> {{ abPage[0].header }} </h2>
        <div class="row"> 
          <button class="col btn aboutColl" type="button" data-bs-toggle="collapse" data-bs-target="#AboutMe" aria-expanded="false" aria-controls="AboutMe"> 
            About me
          </button>
          <button class="col btn aboutColl" type="button" data-bs-toggle="collapse" data-bs-target="#AboutSite" aria-expanded="false" aria-controls="collapseSite"> 
            About the website
          </button>
          <!-- About Me Card -->
          <div class="collapse mt-3" id="AboutMe">
            <AboutMe/>
          </div>
          <!-- About the website Card -->
          <div class="collapse mt-3" id="AboutSite">
            <AboutWebsite/>
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
import { abPage, abMe, abSite } from "../firebase"
import Loading from "./Loading.vue"
import AboutMe from "../components/AboutMe.vue"
import AboutWebsite from "../components/AboutWebsite.vue"
export default {
  name: 'About',
  components: { Loading, AboutMe, AboutWebsite },
  setup() {
    return { abPage, abMe, abSite }
  }
}
</script>

<style>

.aboutColl {
  background-color: rgb(146, 143, 143);
}

button.col {
  margin-right: 10px;
  margin-left: 10px;
}

.card-header {
  font-weight: bold;
  text-decoration: underline;
}

.ab-header {
  text-decoration: underline;
}

.ab-section {
  text-decoration: underline;
}
</style>