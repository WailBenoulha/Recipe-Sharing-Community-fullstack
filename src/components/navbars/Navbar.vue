<script setup lang="ts">

import { ref } from 'vue'

const user = ref(null)

</script>

<template>
  <nav class="navbar navbar-expand-lg w-100 mt-4 fw-bold ">
    <div class="container-lg">
      <a class="navbar-brand" href="#"
        ><img src="/png/logo-no-background.png" alt="foodie logo" width="180" height="50"
      /></a>
      <button
        class="navbar-toggler"
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
            <a class="nav-link" href="#">Recipies</a>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'about'}" class="nav-link"> About Us</router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <a href="#"><button class="btn bg-primary text-white fw-bold" type="button">Upload your recipe NOW !</button></a>
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
        <li v-else>
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
