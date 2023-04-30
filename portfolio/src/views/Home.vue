<template>
  <div>
    <!-- Data from Firebase successfully grabbed -->
    <div v-if = "homePage[0]">
      <div>
        <p> {{ homePage[0] }} </p>
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
import { ref } from "vue"
import { onSnapshot, collection } from "firebase/firestore"
import { db, homePage } from "../firebase"
export default {
  name: 'Home',
  components: { },
  setup() {
  console.log("Home Page FB in firebase.js: ", homePage)

   return { homePage }
  },
}
</script>

<style>

</style>
