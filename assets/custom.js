$(function() {
    $( document ).tooltip();
  });

$(function() {
      $( "#mobileMenuToggle" ).click(function() {
        $( "#menu" ).toggleClass( "showMenu", 600 );
      });
    });

$(function() {
      $( ".withSubHome" ).click(function() {
        $( ".subHome" ).toggleClass( "showSub", 100 );
      });
    });

$(function() {
      $( ".withSubProfile" ).click(function() {
        $( ".subProfile" ).toggleClass( "showSub", 100 );
      });
    });

$(function() {
      $( ".withSubSettings" ).click(function() {
        $( ".subSettings" ).toggleClass( "showSub", 100 );
      });
    });

$(function() {
      $( "#removeX" ).click(function() {
        $( "#close" ).toggleClass( "closeWindow", 0 );
      });
    });

