$("[data-filter]").click(function(){
	var value = $(this).attr("data-filter");
	var elem = $("[data-item]");
	if(value == "all"){
		$(elem).addClass("is--visible");
	}
	else{
		$(elem).not("."+value).removeClass("is--visible").addClass("is--hidden");
		$(elem).filter("."+value).removeClass("is--hidden").addClass("is--visible");
	}
	$("[data-filter]").parent().removeClass("active");
	$(this).parent().addClass("active");
});