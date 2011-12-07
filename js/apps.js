var MainApp = {
  Models: {},
  
  Collections: {},
  
  Views: {
    Index: IndexView
  },
  
  Routers: {
    Main: MainRouter
  },
  
  
  start: function(){
    // Views
    this.index = new this.Views.Index({ el: '#app' });
    
    this.router = new this.Routers.Main();
    Backbone.history.start();
  }
};
