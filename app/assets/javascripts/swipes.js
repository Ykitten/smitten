$( document ).ready(function(event) {
  var homelink1 = $("swipeleft");
  var homelink2 = $("swiperight");

  $( document ).on('swipe', function(event){
    // because the document is only ready once, I want the function to be called after each new swipe
    event.stopImmediatePropagation();
    // The function above stops events from bubbling up
    function homeswipeoptions(){
      // The function above will only be called when on the rootpage
      $("div").one( "swipeleft", function(event) {
        // alert("swipe left happened");
        $("#swipeleft").click();
        // alert("clicked on swipe left");
        event.stopImmediatePropagation();
        });
      $("div").one( "swiperight", function(event) {
        // alert("swipe right happened");
        $("#swiperight").click();
        // alert("clicked on swipe right");
        event.stopImmediatePropagation();
        });
    }//end of homeswipe function

    function swipetohome(){
      // The function above will only be called when not on the home page
      $(document).one("swipeleft", function(event){
        // alert("swipe left happened");
        $("#sparkhome").click();
        // alert("clicked sparkhome");
        event.stopImmediatePropagation();
      });
      $(document).one("swiperight", function(event){
        // alert("swipe right happened");
        $("#dashhome").click();
        // alert("clicked on dashhome");
        event.stopImmediatePropagation();
      });
    }

  if (window.location.pathname === '/') {
    //if the url is for the root, then do this function
    homeswipeoptions();
    // alert("leaving home");
  }

  else{
    //else run this function
    // alert("new divs");
    swipetohome();
  }

  });

});
// $("div:jqmData(role='page')")