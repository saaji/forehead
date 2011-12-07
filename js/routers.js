var MainRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  
  index: function() {
    MainApp.index.render();
  }
});
