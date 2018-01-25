new Vue({
  el: '#vue-app',
  data: {
    age: 18,
    x: 0,
    y: 0
  },
  methods: {
    add(n){
      n = n || 1;
      this.age += n;
    },
    sub(n){
      n = n || 1;
      this.age -= n;
    },
    updateXY(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
