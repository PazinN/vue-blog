import { ref } from 'vue';

const getPosts = () => {
    const posts=ref([])
        const error=ref(null)

        const load = async () => {
          try{ 
            await new Promise (resolve => {
                setTimeout(resolve,100)
            }) 
            let data = await fetch('http://localhost:3000/posts')
            console.log(data);
            if(!data.ok){
              throw Error('not avalable')
            }
            posts.value=await data.json()

          }
          catch(err){
            error.value=err.message
          }
        };
    return {
        posts,
        error,
        load
    }

}

export default getPosts