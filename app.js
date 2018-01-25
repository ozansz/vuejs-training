new Vue({
  el: '#vue-app',
  data: {
    name: 'Ozan',
    job: 'işsiz',
    website: 'https://github.com/ozansz',
    websiteTag: `
    <!-- you can use :href insrtead of v-bind:href -->
    <a href="https://github.com/ozansz">My Github Profile</a>
    `
  },
  methods: {
    greet: function(time){
      console.log(this);
      return 'Good ' + time + ', ' + this.name + ' the ' + this.job;
    }
  }
});
