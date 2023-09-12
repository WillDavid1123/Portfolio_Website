<template>
    <div class="modal-dialog modal-dialog-centered"> <!-- Popup -->
        <div class="modal-content" style="width= 900px; height= 1000px;">
            <div class="modal-header" style="border-color: black;"> <!-- Popup Head -->
                <h5 class="modal-title ms-auto" style="color: black">Project Name</h5>
                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Project-Close"></button>
            </div>
            <div class="modal-body"> <!-- Popup Body -->
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    setup() {

        return {  }
    }

}
</script>

<style>
.modal {
    --bs-modal-width: 500px;
    --bs-modal-bg: rgb(185, 185, 185);
}
</style>