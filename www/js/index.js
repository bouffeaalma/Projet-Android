
window.onload = function() {
    console.log("here")
         //Load categories object JSON
        jQuery.getJSON("json/menu.json", function(data){         

            var cat = document.getElementById("categories");
			for (prop in data){
			cat.innerHTML += '<a class="categories" data-role="button" href="#'+ prop +'">'+ prop+ '</a><br>';

			// debugger;
			// $("#categories")
			
			}
			$("#categories").trigger("create")
        });
}




