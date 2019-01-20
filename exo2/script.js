$(document).ready(function(){
  $("#bloc1").mouseenter(function(){
    $('#bloc1').removeClass("vert").addClass("bleu");
  });
});
$(document).ready(function(){
  $("#bloc1").mouseout(function(){
    $('#bloc1').removeClass("bleu").addClass("vert");
  });
});

$("#champ1").on("keyup",(function(){
$("#para1").text($("#champ1").val());
}));

$(document).ready(function(){
	$("#blocA").hover(function(){
	    		
	if ($.isNumeric($('#blocA').text())) {
	    				
	if ($('#blocA').text()%2 == 0) {
	    $('#blocA').addClass("vert");
	}else
{	
$('#blocA').addClass("rouge");
}
	}else {
	    				
	$('#blocA').addClass("bleu");
	    				}
	},function(){
	$('#blocA').removeClass("rouge vert bleu");
});	 
});
$(document).ready(function(){
	$("#blocA").hover(function(){
	    		
	if ($.isNumeric($('#blocA').text())) {
	    				
	if ($('#blocA').text()%2 == 0) {
	    $('#blocA').addClass("vert");
	}else
{	
$('#blocA').addClass("rouge");
}
	}else {
	    				
	$('#blocA').addClass("bleu");
	    				}
	},function(){
	$('#blocA').removeClass("rouge vert bleu");
});	 
});

$(document).ready(function(){
	$("#blocB").hover(function(){
	    		
	if ($.isNumeric($('#blocA').text())) {
	    				
	if ($('#blocB').text()%2 == 0) {
	    $('#blocB').addClass("vert");
	}else
{	
$('#blocB').addClass("rouge");
}
	}else {
	    				
	$('#blocB').addClass("bleu");
	    				}
	},function(){
	$('#blocB').removeClass("rouge vert bleu");
});	 
});   			 			   			
$(document).ready(function(){
	$("#blocC").hover(function(){
	    		
	if ($.isNumeric($('#blocC').text())) {
	    				
	if ($('#blocC').text()%2 == 0) {
	    $('#blocC').addClass("vert");
	}else
{	
$('#blocC').addClass("rouge");
}
	}else {
	    				
	$('#blocC').addClass("bleu");
	    				}
	},function(){
	$('#blocC').removeClass("rouge vert bleu");
});	 
});   			

$(document).ready(function(){
	$("#blocD").hover(function(){
	    		
	if ($.isNumeric($('#blocD').text())) {
	    				
	if ($('#blocD').text()%2 == 0) {
	    $('#blocD').addClass("vert");
	}else
{	
$('#blocD').addClass("rouge");
}
	}else {
	    				
	$('#blocD').addClass("bleu");
	    				}
	},function(){
	$('#blocD').removeClass("rouge vert bleu");
});	 
});   			

$(document).ready(function(){
	$("#blocE").hover(function(){
	    		
	if ($.isNumeric($('#blocE').text())) {
	    				
	if ($('#blocE').text()%2 == 0) {
	    $('#blocE').addClass("vert");
	}else
{	
$('#blocE').addClass("rouge");
}
	}else {
	    				
	$('#blocE').addClass("bleu");
	    				}
	},function(){
	$('#blocE').removeClass("rouge vert bleu");
});	 
});   			

$(document).ready(function(){
	$("#blocF").hover(function(){
	    		
	if ($.isNumeric($('#blocF').text())) {
	    				
	if ($('#blocF').text()%2 == 0) {
	    $('#blocF').addClass("vert");
	}else
{	
$('#blocF').addClass("rouge");
}
	}else {
	    				
	$('#blocF').addClass("bleu");
	    				}
	},function(){
	$('#blocF').removeClass("rouge vert bleu");
});	 
});   			

 $("#btn").click(function(){
    $("#info").show(1000);
  });