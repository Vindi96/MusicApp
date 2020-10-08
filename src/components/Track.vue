<template>
  <div class="card" >
    <div class="card mb-3">
      <img class="card-img-top" response.data alt="image" height="200" width="200"  v-bind:src="trackData.pictures.large">
      <div class="card-body">
        <h5 class="card-title">{{ trackData.name }}</h5>
        <div class="container">
        <h6> Listener : {{trackData.listener_count}}</h6>
        <h6> Likes : {{trackData.favorite_count}}</h6>
        </div>
          <div class="button">
            <a v-bind:href="trackData.url" target="_blank"><button type="button" class="btn btn-primary">Listen Now</button></a>
          </div>
      </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      trackData: []
    }
  },
  created () {
    axios.get('https://api.mixcloud.com' + this.$route.params.id)
      .then(response => {
        this.trackData = response.data
        console.log(response.data)
      })
      .catch(e => {
        this.error.push(e)
      })
  }
}
</script>
<style>
.container{
  padding-top: 50px;
  padding-left: 210px;
  float: left;
  clear: none;
}
.card{
  width: 800px;
  position: center;
}
.card-img-top{
  position: relative;
  max-width: 200px;
  max-height: 300px;
}
.card-body{
  position: absolute;
  top: 10px;
  right: 10px;
}
.card-title{
  padding-left: 210px;
}
.button{
  text-align: end;
}
</style>
