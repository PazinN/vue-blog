<template>
    <header>
        <div class="header__logo">
            <img src="../assets/logo.png" alt="blog-logo">
        </div>
        <nav>
        <router-link :to="{ name: 'home' }">
            Home
        </router-link>
        <span class="separator">|</span>
        <router-link :to="{ name: 'Create' }">
            Create Blog
        </router-link>
        </nav>
    </header>
  </template>
  
  <style>
 
  .separator {
    margin: 0 5px; 
    color: #fff;
  }
  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #fff;
    border-bottom: 1px solid #fff;
  }
  header nav {
    text-align: center;
    color: #fff;
    padding: 10px 0; 
    text-transform: uppercase;
    font-weight: 600;
    background-color: #2c3e50;
    min-width: 100%;
  }
  header nav a{
    text-decoration: none;
    color: #fff;;
    transition: .2s ease all;
  }
  header nav a:hover{
    color: #3498db;
    transition: .2s ease all;
  }
  header .router-link-active{
    color: #3498db;

  }
  
  .router-link {
    margin: 0 10px; 
    text-decoration: none;
    color: #3498db;
  }

  </style>
  