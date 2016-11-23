(function(){
  Polymer({
    is: 'app-home',
    properties:{
      news:{
        type: Array,
        value:[],
        observer: 'hoola'
      },
      sliderImage:{
        type: Array
      },
      imagesSize:{
        type: Number,
        computed: '_imageSize(sliderImage)'
      }
    },
    hoola: function(){
      console.log("hola");
      console.log(this.news)
      window.pepe = this.$.hola;
    },
    _imageSize: function(array){
      return array.length;
    }
  });
}());
