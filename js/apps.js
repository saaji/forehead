(function(){
  var root = this;
  
  root.MainApp = {
    Models: {
      Lib: Lib
    },
  
    Collections: {
      Libs: LibCollection
    },
  
    Views: {
      Index: IndexView
    },
  
    Routers: {
      Main: MainRouter
    },
  
  
    start: function(){
      // Views
      this.libs = new this.Collections.Libs();
      this.libs.add([
        { id: 1, index: 1, name: 'jQuery' },
        { id: 2, index: 2, name: 'json2' },
        { id: 3, index: 3, name: 'underscore.js' },
        { id: 4, index: 4, name: 'backbone.js' },
        { id: 5, index: 5, name: 'handlebars.js' }
      ]);
      
      this.index = new this.Views.Index({ collection: this.libs, el: '#app' });
    
      this.router = new this.Routers.Main();
      Backbone.history.start();
    }
  };

}).call(this);
