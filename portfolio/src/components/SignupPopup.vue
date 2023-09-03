<template>
    <div class="modal-dialog modal-dialog-centered"> <!-- Popup -->
        <div class="modal-content" style="width= 600px; height= 400px;">
            <div class="modal-header" style="border-color: black;"> <!-- Popup Head -->
                <h5 class="modal-title ms-auto" style="color: black">Signup</h5>
                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Signup-Close"></button>
            </div>
            <div class="modal-body"> <!-- Popup Body / Form -->
                <form @submit.prevent="handleLogin">
                    <div class="row my-2">
                        <div class="col" style="width: 200 px;">
                            <label for="SignupEmail" class="col-form-labels" style="color: black">Email:</label>
                        </div>
                        <div class="col">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col" style="width: 200 px;">
                            <label for="SignupUsername" class="col-form-labels" style="color: black">Username:</label>
                        </div>
                        <div class="col">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col">
                            <label for="SignupPassword" class="col-form-labels" style="color: black">Password:</label>
                        </div>
                        <div class="col">
                            <input type="password">
                        </div>
                    </div>
                    <button class="btn btn-light mt-2" style="color: black;">Signup</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.modal {
    --bs-modal-width: 400px;
    --bs-modal-bg: rgb(185, 185, 185);
}
</style>