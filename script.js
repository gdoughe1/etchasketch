$(document).ready(function(){
	$("body").append("<div id=\"wrapper\"></div>");
	
	draw(16);	
	
	$("button").click(function(){
		$(".inner").removeClass("fill");
		var size = prompt("New Dimensions: ");
		dim = +size;
		$("table").remove();
		draw(dim);
	});	
});

function draw(dim){
	
	var size = Math.floor(800/dim);
	
	$("#wrapper").append("<table></table>");
	for(var i=1; i<=dim; i++){
		$("table").append("<tr id="+"\""+i+"\""+"></tr>");
		for(var j=1; j<=dim; j++){
			$("#"+i).append("<td></td>");
		}
	}	
	$("td").append("<div class=\"inner\"></div>");
	$(".inner").width(size).height(size);
	$(".inner").mouseenter(function(){
		$(this).addClass("fill");
	});
}

