<template>
  <div class="container">
    <div class="row">
      <form>
        <fieldset>
            <legend class="legend">Music App</legend>
            <app-search @newDataset="results = $event"></app-search>
        </fieldset>

      </form>
    </div>
    <div class="row">
      <div class="col-md-12">
        <app-result :resultList="results"></app-result>
      </div>
    </div>
  </div>
</template>
<script>
import SearchArea from './SearchArea.vue'
import ResultArea from './ResultArea.vue'
export default {
  data () {
    return {
      results: []
    }
  },
  components: {
    'app-search': SearchArea,
    'app-result': ResultArea
  }
}
</script>

<style>
 .container1{
    width: 990px;
    padding-left: 100px;
    text-align: center;
    margin: 0px;
 }
 .col-lg-10{
    width: 890px;
 }
 .legend{
    padding-left: 175px;
    padding-top: 10px;
    color: red;
   text-align: center;

 }
 .col-md-12{
    padding-left: 100px;
 }
</style>
