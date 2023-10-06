<template> 
    <div v-if = "abSite[0]">
        <div class="card">
          <div class="mt-2 ab-header">
            <h2>{{ abSite[0].header }}</h2>
          </div>
          <div class="mx-4">
            <div>
                <p>{{ abSite[0].top_text}}</p>
            </div>
            <h4>Upcoming Features</h4>
            <br>
            <div v-for="feature in abSite[1]">
                <div class="row">
                    <p class="col">{{ feature[0] }}</p>
                    <div class="col right progress" role="progressbar" aria-label="feature progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" :style="{'width':feature[1] + '%', 'height':'100%'}"></div>
                    </div>
                </div>
            </div>
            <h4>Tech Stack</h4>
            <div class="row">
                <div v-for="tech in abSite[2]" :key="tech" class="col-12 col-sm-6 col-md-4 col-lg-2">
                    <p class="tech-box p-2">{{ tech }}</p>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { abSite } from "../firebase"
  export default {
    props: [],
    components: {},
    setup() {
      return { abSite }
    },
  };
</script>
  
<style>
  div.card {
    background-color: rgb(223, 220, 220);
  }

  div.card-header {
    min-height: 45px;
    font-size: 14px;
    padding-bottom: 0;
  }

  p.right {
    text-align: right;
    align-self: center;
    font-weight: normal;
  }

  p.left {
    text-align: left;
    align-self: center;
    font-weight: normal;
  }

  .ab-header {
    text-decoration: underline;
  }

  h4 {
    text-decoration: underline;
    font-weight: bold;
  }

  .tech-box {
    background-color: rgb(174, 169, 169);
    border: 1px solid black;
  }
</style>