$(document).ready(function(){
	$("body").append("<div id=\"wrapper\"></div>");
	$("#wrapper").append("<table></table>");
	for(var i=1; i<=16; i++){
		$("table").append("<tr id="+"\""+i+"\""+"></tr>");
		for(var j=1; j<=16; j++){
			$("#"+i).append("<td></td>");
		}
	}
	$("td").append("<div></div>");
	$("div").mouseenter(function(){
		$(this).addClass("fill");
	});
});
