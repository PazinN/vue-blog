<template>
    <router-link :to="{name:'Details', params:{id:post.id}}">
    <div class="post">
          <figure div="post__media">
            <img class='post__image' :src="post.image" alt="">
          </figure>
          <div class="post__content">
            <h3 class="post__title">{{ post.title }}</h3>
            <p class="post__text">{{ postTextSnippet }}</p>
            <div class="post__tags">
              <span class='post__tag' v-for='tag in post.tags' :ket="tag">
                #{{ tag }}
              </span>
            </div>
          </div>
    </div>
  </router-link>
  </template>
  
  <script>
import { computed, onMounted, onUpdated } from 'vue';

  
  export default {
    props:['post'], 
    setup(props){
      const postTextSnippet =computed(()=>{
        return props.post.body.substring(0,100) + ' .... '
      })
      
      return{ postTextSnippet }
    }
  }
  </script>
  

<style scoped>
.post {
    background-color: #ecf0f1;
    display: flex;
    gap: 16px;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
}

.post__content{
  display: flex;
  flex-direction: column;
}

.post__image{
  max-width: 200px;
  height: 100%;
  object-fit: cover;
}

.post__title{
  text-transform: uppercase;
}

.post__tags {
  margin-top: auto;
}
.post__tag {
    display: inline-block;
    background-color: #3498db;
    color: #fff;
    padding: 6px 10px;
    margin-right: 8px;
    border-radius: 4px;
    cursor: pointer;
}

.post__tag:hover {
    background-color: #2c3e50;
}
</style>
