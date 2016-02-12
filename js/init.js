(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
        
   $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
   $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

  
  $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });
  
