<template>
    <div class="tag-cloud">
        <h3>Tags:</h3>
        <nav>
            <div class="tag-link" v-for="tag in tags" :key='tag'>
                <router-link :to="{name:'Tag', params: {tag: tag}}">
                    #{{ tag }}
                </router-link>
            </div>
        </nav>
    </div>
</template>
<script>  
import useTags from '../composables/useTags';

export default {
    props:['posts'],
    setup(props){
        const { tags }  = useTags(props.posts)

        return { tags }
    }
}
</script>
<style>
.tag-cloud {
    background-color: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.tag-cloud nav{
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.tag-cloud a{
    color: #2c3e50;
    font-weight: 600;
}

.tag-cloud a:hover{
    color: #3498db;;
    font-weight: 600;
}

</style>
  