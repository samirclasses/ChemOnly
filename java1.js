/*$("document").ready(function(){
$( function() {
    $( "#img" ).draggable();
  } );
});*/
$( function() {
	$("#clearlist").click(function(event){
		event.preventDefault();
		$("#editable").empty();
	});
	$("#addelement").submit(function(event){
		event.preventDefault();
		$("#editable").append("<li>"+ $("addelement input[name='listcontent']").val() + "</li>");
		$("#addelement input[name='listcontent']").val("");
	});
	$(document).on('click', "#editable li", function(){
	$(this).remove();
	});
	
});
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			






























































			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			










