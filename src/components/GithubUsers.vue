<template>
  <div>
      <router-link :to="{name: 'DetailsView',params:{
        name: user.login, 
        image: user.avatar_url, 
        }}"
       class="user-search-container">
        <div class="user-search-image">
          <img :src="user.avatar_url" alt="profile-image" srcset="">
        </div>
        <p class="user-login">{{user.login}}</p>
      </router-link>
  </div>
</template>

<script>
export default {
    props: ['user']
}
</script>

<style>

</style>