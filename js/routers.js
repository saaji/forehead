(function(){
  var root = this;
  
  root.MainRouter = Backbone.Router.extend({
    routes: {
      "": "index"
    },
  
    index: function() {
      MainApp.index.render();
    }
  });

}).call(this);
