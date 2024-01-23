<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post-details">
            <div class="post-details__media">
                <img class='post-details__image' :src="post.image" alt="">
            </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
    </div>
    <div v-else="">
      <Spinner />
    </div> 

  
  
</template>
  
  
<script>
import Spinner from '../components/Spinner.vue';

import getPosts from '../composables/getPost';

export default {
     props:["id"],
     components:{ Spinner},

     setup(props) {
        const { post, error, load } = getPosts(props.id)
        load()
        return {
        post,
        error,
        load
    }

     }
}

</script>
  

<style>
.post-details {
    background-color: #ecf0f1;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
}

.post-details__media{
    margin-bottom:30px
}

.post-details__image{
    width: 100%;
    max-height: 400px;
    object-fit: cover;
}

h3 {
    color: #3498db;
    margin-bottom: 10px;
    text-transform: uppercase;
}

p {
    color: #2c3e50;
    margin-bottom: 15px;
}


</style>
