$(document).ready(function(){
  $("#depart").click(function(){
    $("#violet").hide(3000);
  });
  $("#depart").click(function(){
    $("#violet").show(3000);
  });
});


$(document).ready(function(){
  $("#depart2").click(function(){
    $(".bleu1").fadeIn(3000);
    $(".bleu1").fadeOut(3000);
    $("#jaune").fadeOut("slow");
  });
});


$(document).ready(function(){
  $("#orange").mouseenter(function(){
    $("#orange").fadeOut('fast').delay(300).fadeIn(300);
    $("#orange").fadeIn('fast');
 });
});

$(document).ready(function(){
  $("#depart3").click(function(){
    $("#noir").slideUp("slow");
  });
});

$(document).ready(function(){
  $("#gris").click(function(){
    $("#gris").slideUp("slow");
    $("#gris").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#marron").mouseenter(function(){
    $("#marron").slideUp("slow");
  });
});

 $("#gris").click(function(){
    $("#marron").show(300);
  });

$(document).ready(function(){
  $("#depart4").click(function(){
    $("#vert").animate({left: '250px',});
    $("#vert").animate({width: '25px',});
    $("#vert").animate({top: '150px',});
  });
});
$(document).ready(function(){
  $("#depart4").click(function(){
    $("#rouge").animate({height: '50px',});
  });
});

$(document).ready(function(){
  $("#depart5").click(function(){
    $("#pink").animate({left: '250px',});
    $("#pink").animate({width: '25px',});
    $("#pink").animate({top: '150px',});
  });
    });

$(document).ready(function(){
$("#desactiver").click(function(){
  jQuery.fx.off = true;
});
});

$(function() {

   $('#depart5').click(function() {

     $('#cyan').fadeOut('slow').delay(4000).fadeIn('slow');

   });

 });
