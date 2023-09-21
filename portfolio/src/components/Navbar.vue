<template>
    <nav class="fixed-top navbar navbar-default navbar-expand mt-0 p-0"> <!-- Navbar -->
        <div class="container-fluid ps-1 pe-1">
            <div class="me-1"> <!-- Logo -->
                <router-link :to="{name: 'Home'}" class="navbar-header navbar-brand link p-2 m-0" style="text-decoration: none; font-size: 24px;">Home</router-link>
            </div>
            <div class="nav navbar-nav me-auto d-none d-sm-block"> <!-- Page links if the page is large enough to show outside of the hamburger -->
                <router-link :to="{name: 'Announcements'}" class="mx-2 link" style="text-decoration: none; color: #fff">Announcements</router-link>
                <router-link :to="{name: 'Projects'}" class="mx-2 link" style="text-decoration: none; color: #fff">Projects</router-link> 
                <router-link :to="{name: 'About'}" class="mx-2 link" style="text-decoration: none; color: #fff">About</router-link>
            </div>
            <div class="nav navbar-nav ms-auto"> <!-- Hamburger -->
                <div class="container-fluid">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <button class="btn" data-bs-toggle="dropdown" aria-expanded="false"> <!-- Hamburger Icon -->
                                    <i class="fa-solid fa-bars"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end" style="background-color: rgb(165, 165, 165);"> <!--Hamburger Contents-->
                                <!-- Pages if site size is too small -->
                                    <li><router-link :to="{name: 'Announcements'}" class="dropdown-item btn d-sm-none">Announcements Page</router-link></li>
                                    <li><router-link :to="{name: 'Projects'}" class="dropdown-item btn d-sm-none">Projects Page</router-link></li>
                                    <li><router-link :to="{name: 'About'}" class="dropdown-item btn d-sm-none">About Page</router-link></li>
                                <!-- Popups and other pages that stay within the hamburger -->
                                    <!-- <li><button class="dropdown-item btn" type="button" data-bs-toggle="modal" data-bs-target="#LoginModal">Login</button></li>
                                    <li><button class="dropdown-item btn" type="button" data-bs-toggle="modal" data-bs-target="#SignupModal">Signup</button></li>
                                    <li><button class="dropdown-item btn" type="button" data-bs-toggle="modal" data-bs-target="#SettingsModal">Settings</button></li> -->
                                    <li><button class="dropdown-item btn" type="button" data-bs-toggle="modal" data-bs-target="#emailMe">Email Me</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- <div id="LoginModal" class="modal fade" tabindex="-1">
        <LoginPopup/>
    </div>
    <div id="SignupModal" class="modal fade" tabindex="-1">
        <SignupPopup/>
    </div>
    <div id="SettingsModal" class="modal fade" tabindex="-1">
        <SettingsPopup/>
    </div> -->
    <div id="emailMe" class="modal fade" tabindex="-1">
        <EmailPopup/>
    </div>
</template>

<script>
import LoginPopup from "./LoginPopup.vue";
import SignupPopup from "./SignupPopup.vue";
import SettingsPopup from "./SettingsPopup.vue";
import EmailPopup from "./EmailPopup.vue"
export default {
    components: { LoginPopup, SignupPopup, SettingsPopup, EmailPopup },
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