var video = document.getElementById("video"); 
$(document).ready(function(){


		  $("#img_video").mouseenter(function(){     
   	 		 var valor = "img/video2.png"
     		 $("#img_video").attr("src", valor);      
   		 });  
  		  $("#img_video").mouseleave(function(){     
   			  var valor = "img/video.png"
    		  $("#img_video").attr("src", valor);      
    	  }); 






		 $(".video img").click(function(){
	        $(".contenedor_video_modal").fadeIn("slow");
	        $("#contenedor_modal").fadeOut("slow"); 
	        $("#contenedor_modal2").fadeOut("slow"); 
	         $("#contenedor_modal3").fadeOut("slow"); 
	        $("#contenedor_modal4").fadeOut("slow"); 
	        video.play(); 
	 	}); 

		  $("#cerrar_video").click(function(e){
     		$(".contenedor_video_modal").fadeOut("slow");
     		e.stopPropagation();
     		 video.pause();
     		 video.currentTime = 0;
 	});


	    $("#ver_mas_efrain").click(function(e){
	    	$(".contenedor_video_modal").fadeOut("slow");
     		e.stopPropagation();
     		 video.pause();
     		 video.currentTime = 0;

	        $("#contenedor_modal").fadeIn("slow");  
	        $("#contenedor_modal2").fadeOut("slow");
	        $("#contenedor_modal3").fadeOut("slow"); 
	        $("#contenedor_modal4").fadeOut("slow"); 
	 	});   

	 	 
	 	$("#contenedor_modal, #contenedor_modal2, #contenedor_modal3, #contenedor_modal4").click(function(e){
	 		$(".contenedor_video_modal").fadeOut("slow");
     		e.stopPropagation();
     		 video.pause();
     		 video.currentTime = 0;
     		$("#contenedor_modal").fadeOut("slow");
     		$("#contenedor_modal2").fadeOut("slow");
     		$("#contenedor_modal3").fadeOut("slow"); 
	        $("#contenedor_modal4").fadeOut("slow");  	
 	});


	 	 $("#ver_mas_bruno").click(function(e){
	    	$(".contenedor_video_modal").fadeOut("slow");
     		e.stopPropagation();
     		 video.pause();
     		 video.currentTime = 0;

	        $("#contenedor_modal2").fadeIn("slow");  
	        $("#contenedor_modal").fadeOut("slow");
	        $("#contenedor_modal3").fadeOut("slow"); 
	        $("#contenedor_modal4").fadeOut("slow"); 
	 	});    
	 	
	 	  

	 	   $("#ver_mas_humberto").click(function(e){
	    	$(".contenedor_video_modal").fadeOut("slow");
     		e.stopPropagation();
     		 video.pause();
     		 video.currentTime = 0;

	        $("#contenedor_modal3").fadeIn("slow");  
	        $("#contenedor_modal").fadeOut("slow");
	        $("#contenedor_modal2").fadeOut("slow"); 
	        $("#contenedor_modal4").fadeOut("slow"); 
	 	}); 



	 	 $("#ver_mas_ruben").click(function(e){
	    	$(".contenedor_video_modal").fadeOut("slow");
     		e.stopPropagation();
     		 video.pause();
     		 video.currentTime = 0;

	        $("#contenedor_modal4").fadeIn("slow");  
	        $("#contenedor_modal").fadeOut("slow");
	        $("#contenedor_modal2").fadeOut("slow"); 
	        $("#contenedor_modal3").fadeOut("slow"); 
	 	});    


	 	

});