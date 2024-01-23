<template>
    <div class="spinner">
        <p>Loading ...</p>
    </div>
  </template>
  
<style>

.spinner{
    width: 100px;
    height:100px;
    margin: 0 auto;
    position: relative;
    font-size: 12px;
    color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;

}

.spinner::after{
    content:'';
    width: 100px;
    height:100px;
    position: absolute;
    top:0;
    left:0;
    border: solid transparent 4px;
    border-radius: 50%;
    border-top-color:#3498db;
    animation: spin 1s ease infinite;
}

@keyframes spin {
    to { transform: rotateZ(360deg);}
}

</style>  