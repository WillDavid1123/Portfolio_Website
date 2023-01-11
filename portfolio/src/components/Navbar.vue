<template>
    <nav class="fixed-top navbar navbar-default navbar-expand-md mt-0 mb-5 p-0">
        <div class="container-fluid ps-1 pe-1">
            <div class="me-1">
                <router-link :to="{name: 'Home'}" class="navbar-header navbar-brand link p-2 m-0" style="text-decoration: none; font-size: 24px;">Logo</router-link>
            </div>
            <div class="nav navbar-nav me-auto">
                <router-link :to="{name: 'Projects'}" class="mx-2 link" style="text-decoration: none; color: #fff">Projects</router-link> 
                <router-link :to="{name: 'Announcements'}" class="mx-2 link" style="text-decoration: none; color: #fff">Announcements</router-link>
            </div>
            <div class="nav navbar-nav ms-auto">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <button class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-bars"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end" style="background-color: rgb(146, 143, 143);">
                                    <li><button class="dropdown-item btn" type="button" data-bs-toggle="modal" data-bs-target="#LoginModal">Login</button></li>
                                    <li><button class="dropdown-item btn" type="button">Settings</button></li>
                                    <li><button class="dropdown-item btn" type="button">Report Bug</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div id="LoginModal" class="modal fade">
        <LoginPopup/>
    </div>
</template>

<script>
import LoginPopup from "./LoginPopup.vue";
export default {
    components: { LoginPopup },
    setup() {
        
    }
}
</script>

<style>
nav {
    background-color: rgb(146, 143, 143);
    padding: 0px;
    height: 50px;
}
.dropdown-menu {
    --bs-dropdown-link-hover-bg: rgb(201, 201, 201);
}
</style>