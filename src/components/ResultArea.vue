<template>
<div class="col-md-12">
  <div>
  <h2>Results</h2>
    <div class="card mb-3" v-for="(item, index) in resultList" :key="index">
     <img class="card-img-top" v-bind:src="item.pictures.large" alt="image" height="200" width="200"><img src="">
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <div class="button">
          <router-link :to="{ name:'track' ,params:{id:item.key}}"><button type="button" class="btn btn-primary">Show more</button></router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default{
  props: ['resultList']
}
</script>
<style>

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
