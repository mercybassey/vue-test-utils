<template>
  <div class="home-view">
      <div class="home-view-search">
        <input class="search-input" type="text" placeholder="search github user" v-model="searchQuery">
        <button class="search-button" type="submit" @click="searchGithubUser">Search</button>
      </div>
      <div>
        <GithubUser v-if="userInfo" :userInfo="userInfo"/>
        <GithubUsers  v-for="user in users" :key="user.id" :user="user" v-else class="meme"/>
      </div>
    <p v-if="loading" class="loading">Loading...</p>
  </div>
</template>

<script>
import GithubUser from '@/components/GithubUser.vue'
import GithubUsers from '@/components/GithubUsers.vue'
import {ref, onMounted} from 'vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {GithubUser,GithubUsers},
  setup() {
    const searchQuery = ref('');
    const userInfo = ref(null);
    const loading = ref(false);
    const users = ref([]);


    onMounted(() => {
      getUsers()
    })

    const searchGithubUser = async () => {
      try {
        loading.value = true;
        const response = await axios.get(`https://api.github.com/users/${searchQuery.value}`)
        const data = response.data;
        console.log(data);
        userInfo.value = {
          image: data.avatar_url,
          name: data.name,
        };
        loading.value = false;
        searchQuery.value = '';
      } catch (error) {
        alert(error.message)
        loading.value = false;
      }
    }

    const getUsers = async () => {
      loading.value = true;
      fetch(' https://api.github.com/users')
      .then((res) => res.json())
      .then(data => {
        users.value = data;
        loading.value = false; 
          console.log(users.value)
      })
    .catch(err => console.log(err.message))
    loading.value = false;
    }
    
    return{searchQuery, users, userInfo, loading, searchGithubUser,getUsers}
  }
}
</script>
