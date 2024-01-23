<template>
    <h2 class="create__title">Create Form</h2>

    <form @submit.prevent="handleSubmit">
        <label for="">Enter the image</label>
        <input type="text" v-model="image">

        <label for="">Enter the title</label>
        <input type="text" required v-model="title">

        <label for="">Enter the body text</label>
        <textarea required v-model="body"></textarea>

        <label for="">Enter the tags</label>
        <input 
            type="text" 
            @keydown.enter.prevent="addTag" 
            v-model="tag"
        >
        
        <div v-for="tag in tags" :key="tag">
         #{{ tag }}
        </div>

        <button type="submit"> Submit </button>

    </form>
    <div v-if="error">{{ error }}</div>

</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


    export default {
        setup(){
            const image=ref("");
            const title=ref("");
            const body=ref("");
            const tag=ref("");
            const tags=ref([]);
            const error=ref(null)

            const router = useRouter()

            const addTag = () => {
                if(!tags.value.includes(tag.value)){
                    tag.value.replace(/\s/,"")
                    tags.value.push(tag.value)
                }
                tag.value=''
                
            }

            const handleSubmit = async () => {
                const post = {
                    image: image.value,
                    title: title.value,
                    body: body.value,
                    tags: tags.value
                }
                    await fetch('http://localhost:3000/posts', { 
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(post)
                })
                    router.push({name:'home'})
                 }

            return{
                image,
                title,
                body,
                tag,
                tags,
                addTag,
                handleSubmit
            }


        }
    }

</script>

<style scoped>
.create__title {
    text-align: center;
    margin-bottom: 30px;
}

form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ecf0f1;
    border-radius: 8px;
}

label {
    color: #2c3e50;
    font-weight: 600;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
}

button:hover {
    background-color: #2980b9;
}

.error {
    color: #e74c3c;
    margin-top: 10px;
}

</style>
