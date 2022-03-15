<template>
  <div>
    <div class="details">
      <h1>This is the details Page</h1>
      <img :src="image" alt="profile-image">
      <h3>Github Username: {{name}}</h3>
    </div>
  </div>
</template>

<script>


export default {
  name: 'DetailsView',
  props: ['name','image']
}
</script>
