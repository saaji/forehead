// Simple JST with Handlebars
// 
// Use load_templates and load_partials to load *.hbs templates
// from js/templates and compile them.
//
// Templates are accessible as JST.my_template_name({some: 'data'}); 
// within JavaScript.
//
// Partials are accessible as {{{my-partial some-data}}} from within 
// hbs templates.

var JST = {
  prefix: 'js/templates/',
  extension: '.hbs',
  
  compile_template: function(name, data) {
    this[name] = Handlebars.compile(data);
  },
  
  register_partial: function(name, data) {
    this[name] = Handlebars.registerHelper(name, Handlebars.compile(data));
  },
  
  load_templates: function(list) {
    _.each(list, function(name){
      $.ajax({
        url: this.prefix + name + this.extension,
        success: function(data) { this.compile_template(name, data) }, 
        dataType: 'text',
        context: JST,
        async: false
      });
    }, JST);
  },
  
  load_partials: function(list) {
    _.each(list, function(name){
      $.ajax({
        url: this.prefix + '_' + name + this.extension,
        success: function(data) { this.register_partial(name, data) }, 
        dataType: 'text',
        context: JST,
        async: false
      });
    }, JST);
  }
};