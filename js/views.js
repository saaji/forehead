(function(){
  var root = this;

  // Index page
  root.IndexView = Backbone.View.extend({
    template: 'index',
  
    render: function() {
      $(this.el).html(JST[this.template]());
      return this;
    }
  });

}).call(this);
