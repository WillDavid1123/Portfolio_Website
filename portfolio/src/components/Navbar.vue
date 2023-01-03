<template>
  <nav class="container-fluid fixed-top navbar navbar-default navbar-expand-md mt-0 mb-5 p-0">
    <div class="container-fluid ps-0 pe-0">
        <div class="me-1">
            <router-link :to="{name: 'Home'}" class="navbar-header navbar-brand link p-2 m-0" style="text-decoration: none; font-size: 24px;">Logo</router-link>
        </div>
        <div class="nav navbar-nav me-auto">
            <router-link :to="{name: 'Projects'}" class="mx-2 link" style="text-decoration: none; color: #fff">Projects</router-link> 
            <router-link :to="{name: 'Announcements'}" class="mx-2 link" style="text-decoration: none; color: #fff">Announcements</router-link>
        </div>
        <div class="nav navbar-nav ms-auto">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                <i class="fa-solid fa-bars">-</i>
            </button>
        </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
    background-color: rgb(146, 143, 143);
    padding: 0px;
    height: 50px;
}
</style>