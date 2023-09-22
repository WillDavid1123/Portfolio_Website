<template>
    <div class="modal-dialog modal-dialog-centered"> <!-- Popup -->
        <div class="modal-content" style="width= 1000px; height= 400px;">
            <div class="modal-header" style="border-color: black;"> <!-- Popup Head -->
                <h5 class="modal-title ms-auto" style="color: black">Email Me</h5>
                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Email-Close"></button>
            </div>
            <div class="modal-body"> <!-- Popup Body / Form -->
                <form @submit.prevent="sendEmail">
                    <div class="form-group">
                        <label for="UserEmail" class="col-form-labels mx-4" style="color: black">Your Email:</label>
                        <input type="email" required="true">
                    </div>
                    <div class="dropdown my-3">
                      <label for="EmailReason" class="col-form-labels mx-3" style="color: black">Reason for your email:</label>
                      <button class="btn emailDrop dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{{ currReason }}</button>
                      <ul class="dropdown-menu" style="background-color: rgb(165, 165, 165);">
                        <li><a class="dropdown-item btn" @click="changeReason('Bug Report')">Bug Report</a></li>
                        <li><a class="dropdown-item btn" @click="changeReason('Suggestion')">Suggestion</a></li>
                        <li><a class="dropdown-item btn" @click="changeReason('Other')">Other</a></li>
                      </ul>
                    </div>
                    <div>
                        <label for="message" class="col-form-labels mx-4" style="color: black">Message:</label>
                        <textarea style="width= 700px;" required="true"></textarea>
                    </div>    
                    <button class="btn btn-light mt-2" type="submit" style="color: black;">Send Email</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
export default {
    setup() {
        const currReason = ref("Bug Report")

        const changeReason = (newReason) => {
            currReason.value = newReason
        }

        const sendEmail = () => {
            console.log("Email sent")
        }

        return { currReason, changeReason, sendEmail }
    }

}
</script>

<style>
.modal {
    --bs-modal-width: 500px;
    --bs-modal-bg: rgb(185, 185, 185);
}

.dropdown-toggle {
    background-color: rgb(146, 143, 143);
}

button.emailDrop {
    background-color: rgb(146, 143, 143);
}

textarea {
    height: 200px;
    width: 80%;
}

</style>