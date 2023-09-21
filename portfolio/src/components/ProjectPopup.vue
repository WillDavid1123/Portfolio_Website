<template>
    <div class="modal-dialog modal-dialog-centered pModal"> <!-- Popup -->
        <div class="modal-content" style="width= 900px; height= 1000px;">
            <div class="modal-header" style="border-color: black;"> <!-- Popup Head -->
                <h5 class="modal-title ms-auto" style="color: black">{{ data.Name }}</h5>
                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Project-Close"></button>
            </div>
            <div class="modal-body"> <!-- Popup Body -->
                <div class="row">
                    <h5 class="card-text col"><strong>Project Tags:</strong></h5>
                    <div class="col" v-for="tag in data.Tags " :key="tag">
                        <p :class="[x, tag]">{{ tag }}</p>
                    </div>
                </div>
                <p class="card-text"> <strong>Description:</strong> {{ data.Desc }}</p>
            </div>
            <div class="modal-footer">
                    <p>Link:</p>
                    <a :href="[data.Link]">{{ data.Link_Name }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore()
        const data = store.state
        const x = "rounded-pill" //Might be able to remove with more research

        return { data, x }
    }

}
</script>

<style>
.pModal {
    --bs-modal-width: 900px;
    --bs-modal-bg: rgb(185, 185, 185);
}

p.rounded-pill {
  border: 1px solid black;
  background-color: rgb(176, 177, 179);
}

div.modal-footer {
    justify-content: center;
}

</style>