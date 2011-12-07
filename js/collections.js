(function(){
  var root = this;

  // Here we put our backbone collections
  // 
  // root.MyCollection = Backbone.Collection.extend({
  //   model: MyModel
  // });
  
  root.LibCollection = Backbone.Collection.extend({
    model: Lib,
    comparator: function(lib) {
      return lib.get('index');
    } 
  });

}).call(this);
