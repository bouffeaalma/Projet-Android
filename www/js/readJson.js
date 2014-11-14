//Load categories object JSON
jQuery.getJSON("menu.json", function(data){         
    // data is yours parsed object
	alert(data.balance);
});