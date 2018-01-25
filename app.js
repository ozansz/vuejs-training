new Vue({
  el: '#vue-app',
  data: {
    name: 'Ozan',
    job: 'işsiz'
  },
  methods: {
    greet: function(time){
      console.log(this);
      return 'Good ' + time + ', ' + this.name + ' the ' + this.job;
    }
  }
});
