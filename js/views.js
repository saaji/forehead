(function(){
  var root = this;
  
  // Libraries list
  root.LibView = Backbone.View.extend({
    template: 'lib',
    tagName: 'li',
    
    render: function() {
      if(_.isUndefined(_.first($("#" + this.model.id)))) {
        $(this.container).append(this.el);
      }
      
      $(this.el).html(JST[this.template](this.model.toJSON()));
      return this;
    },
    
    initialize: function(opts) {
      this.container = opts.container;
      // You only need to bind to 'change' if collection is not
      // handling 'change' itself, but handles 'add', 'remove' 
      // and 'reset' events individually.
      // this.model.bind('change', this.render, this);
    }
  });

  // Index page
  root.IndexView = Backbone.View.extend({
    template: 'index',

    render_rows: function() {
      this.collection.each(function(l){
        if(_.isUndefined(l.view)) {
          var v = new LibView({ id: l.id, model: l, container: "#libs" });
          l.view = v;
        }
        
        l.view.render();
      }, this);
    },
  
    // Render main template and ordered libs
    render: function() {
      // sort() is using this.collection's comparator() function.
      // Avoid infinite rendering loop with {silent: true}
      this.collection.sort({silent: true}); 
      
      $(this.el).html(JST[this.template](this.collection.toJSON()));
      this.render_rows();
      return this;
    },
    
    initialize: function() {
      // Let's take a path of least resistance re-render the whole 
      // list even on 'change' events bubbling from individual rows.
      this.collection.bind('change', this.render, this);
      
      // Sorting triggers 'reset' event, so bind to it as well.
      this.collection.bind('reset', this.render, this);
      
      // But finer grained handling is also possible.
      // this.collection.bind('remove', this.render, this);
      // this.collection.bind('add', this.render, this);
    },
  });

}).call(this);
