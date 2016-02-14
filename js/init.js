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
  
  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      //ready: function() { alert('Ready'); }, // Callback for Modal open
      //complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
