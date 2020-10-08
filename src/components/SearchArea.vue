<template>
<div class="container1">
    <div class="form-group row">
      <label for="exampleInputPassword1">Search Music</label>
      <div class="col-lg-10">
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Type here" @input="keypressed">
      </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default{
  data () {
    return {
      newset: []
    }
  },
  methods: {
    keypressed (event) {
      var key = event.target.value
      axios.get('https://api.mixcloud.com/search/?q=' + key + '&amp;type=cloudcast')
        .then(response => {
          console.log(response.data.data)
          this.newset = response.data.data
        })
        .catch(e => {
          this.error.push(e)
        })
      this.$emit('newDataset', this.newset)
    }
  }
}
</script>
