// Login
var IndexView = Backbone.View.extend({
  template: 'index',
  
  render: function() {
    $(this.el).html(JST[this.template]());
    return this;
  }
});
