<template>
        <div class="modal-dialog">
            <div class="modal-content" style="width= 600px; height= 400px;">
                <div class="modal-header" style="border-color: black;">
                    <h5 class="modal-title ms-auto" style="color: black">Login</h5>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Login-Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleLogin">
                        <div class="row my-2">
                            <div class="col" style="width: 200 px;">
                                <label for="LoginUsername" class="col-form-labels" style="color: black">Username/Email:</label>
                            </div>
                            <div class="col">
                                <input type="text">
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col">
                                <label for="LoginPassword" class="col-form-labels" style="color: black">Password:</label>
                            </div>
                            <div class="col">
                                <input type="password">
                            </div>
                        </div>
                        <button class="btn btn-secondary mt-2" style="color: black;">Login</button>
                    </form>
                    <div class="mt-3">
                        Don't have an account? Create one for free!
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    setup() {

        const handleLogin = {

        }

        return { handleLogin }
    }

}
</script>

<style>
.modal {
    --bs-modal-width: 400px;
    --bs-modal-bg: rgb(146, 143, 143);
}
</style>