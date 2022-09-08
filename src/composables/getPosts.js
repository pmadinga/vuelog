import { ref } from 'vue'

const getData = () =>{
  const posts = ref([]);
  const error = ref('');
  console.log('getpost');

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts');
      if(!data.ok){
        throw Error('no data available')
      }
      posts.value = await data.json()
    } catch (e) {
      error.value = e.message
      console.log(error);
    }
  }
  return { posts, error, load}
}
export default getData