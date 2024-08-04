<script setup lang="ts">

import { ref } from 'vue'

const user = ref(null)

</script>

<template>
  <nav class="navbar navbar-expand-xl w-100 mt-4 fw-bold ">
    <div class="container-lg">
      <router-link :to="{name:'home'}" class="navbar-brand"
        ><img src="/png/logo-no-background.png" alt="foodie logo" width="180" height="50"
      /></router-link>
      <button
        class="navbar-toggler bg-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
          <li class="nav-item">
            <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'recipes'}" class="nav-link">Recipes</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'about'}" class="nav-link"> About Us</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'contact'}" class="nav-link">Contact Us</router-link>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <router-link :to="{name:'recipe-upload'}"><button class="btn bg-primary text-white fw-bold" type="button">Upload your recipe NOW !</button></router-link> 
        </form>
        <li v-if="user" class="nav-item dropdown profile-avatar">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="/avatar.webp" alt="avatar" width="30" height="30" />
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
        <li  v-else>
        <button class="p-2 ms-4 btn login-btn border-2- border-primary " ><a class="text-white  fw-bold" href="#">Login</a></button>
        </li>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.navbar{
  font-size: 1.2rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

}

li{
  list-style: none;
}

.navbar::before{
  /*overlay*/
  content: '';
  position: absolute;
  top: -50%;
  left: 0;
  width: 100%;
  height: 150%;
  background-color: black;
  z-index: -1;
  opacity: .25;
}

.navbar-nav li a {
  color: white;
}

.navbar-nav li a:hover {
  color: #f47e25;
  background-color: transparent;
}

.login-btn:hover, .login-btn a:hover{
  background-color: #f47e25;
  color: white;
}

</style>
