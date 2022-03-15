<template>
  <section>
     <router-link :to="{name: 'DetailsView',params:{
        name: userInfo.name, 
        image: userInfo.image, 
        }}"
       >
         <div class="search-result">
          <img :src="userInfo.image" alt="profile image" srcset="">
          <p class="user-name">{{userInfo.name}}</p>
        </div>
      </router-link>
  </section>
</template>

<script>
export default {
  name: 'GithubUser',
  props:['userInfo']
}
</script>