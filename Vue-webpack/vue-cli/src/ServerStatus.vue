<template>
  <div>
    <p> Server  Status: {{ status }}</p>
    <button @click="changeStatus">Change Status</button>
    <hr>
  </div>
</template>

<script>
  export default {
    data: function () {
      return{
        status: 'Critical'
      }
    },
    methods: {
      changeStatus(){
        this.status = 'Normal';
      }
    }
  }

</script>


<style scoped>
/* scoped only applies to current component */

  div{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
