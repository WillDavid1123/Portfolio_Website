<template> 
    <div v-if = "abMe[0]">
        <div class="card">
            <div class="mt-2 ab-header">
                <h2>{{ abMe[0].header }}</h2>
            </div>
            <div class="mx-4">
                <div class="ab-desc">
                    <p>{{ abMe[0].top_text}}</p>
                </div>
                <div class="row">
                    <button class="col btn ab-section" type="button" data-bs-toggle="collapse" data-bs-target="#MyGenInfo" aria-expanded="false" aria-controls="My General Info"> 
                        General Info
                    </button>
                    <button class="col btn ab-section" type="button" data-bs-toggle="collapse" data-bs-target="#MySkills" aria-expanded="false" aria-controls="My Skills"> 
                        Skills
                    </button>
                </div>

                <div class="collapse mt-2" id="MyGenInfo">
                    <h4 class="section-header">General Information</h4>
                    <div class="row">
                        <p class="col left">Education:</p>
                        <p class="col right">{{ abMe[1].Education}}</p>
                    </div>
                    <div class="row">
                        <p class="col left">Concentration:</p>
                        <p class="col right">{{ abMe[1].Concentration}}</p>
                    </div>
                    <p class="center">Experience:</p>
                    <div v-for="job in abMe[2]" :key="job">
                        <div class="job_area p-1">
                            <div class="row">
                                <p class="col left">{{ job[0] }}</p>
                                <p class="col right">{{ job[1] }}</p>
                            </div>
                            <p>{{ job[2] }}</p>
                        </div>
                    </div>
                </div>

                <div class="collapse mt-2" id="MySkills">
                    <h4 class="section-header">Skills</h4>
                    <h5 class="subsection-header">Programming Languages</h5>
                        <div v-for="pl in abMe[3]" :key="pl">
                            <div class="p-1">
                                <div class="row">
                                    <p class="col-md-2 col-6 left">{{ pl[0] }}</p>
                                    <p class="col-1">-</p>
                                    <p class="col-md-3 col-5 center">{{ pl[1] }}</p>
                                    <div class="d-md-block d-none col right progress" role="progressbar" aria-label="language progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" :style="{'width':pl[2] + '%', 'height':'100%'}"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <br>
                    <h5 class="subsection-header">Technical</h5>
                    <div class="row">
                        <div v-for="skill in abMe[4]" :key="skill" class="col-12 col-sm-6 col-md-4 col-lg-2">
                            <p class="skill-box p-2">{{ skill }}</p>
                        </div>
                    </div>
                    <h5 class="subsection-header">Other</h5>
                    <div class="row">
                        <div v-for="skill in abMe[5]" :key="skill" class="col-12 col-sm-6 col-md-4 col-lg-2">
                            <p class="skill-box p-2">{{ skill }}</p>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
import { abMe } from "../firebase"
  export default {
    props: [],
    components: {},
    setup() {
      return { abMe }
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

  p.center {
    text-align: center;
    align-self: center;
    font-weight: normal;
  }

  .ab-header {
    text-decoration: underline;
  }

  .ab-section {
    background-color: rgb(146, 143, 143);
    font-size: 18px;
    text-decoration: underline;
  }

  .job_area {
    background-color: rgb(174, 169, 169);
    border-bottom: 1px solid black;
  }

  .section-header {
    font-size: 28px;
    text-decoration: underline;
    font-weight: bold;
  }

  .subsection-header {
    font-size: 18px;
    text-decoration: underline;
    font-weight: 600;
  }

  .skill-box {
    background-color: rgb(174, 169, 169);
    border: 1px solid black;
  }
</style>