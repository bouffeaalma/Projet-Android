		var g_data;
		function click_cat(init) {
			// set cats to display
			var cats;
			if (init == "init") {
				cats = g_data;
			}
			else {
				var source = event.srcElement || event.target;
				source = source.innerHTML;
				cats = g_data[source];
			}
			
			// display cats
			$("#categories").text("");
			var c = document.getElementById("categories");
			for (prop in cats) {
				c.innerHTML += '<a onclick="click_cat()" data-role="button">' + prop + '</a><br>';
			}
			$("#categories").trigger("create")
		};
		//window.onload = function() {
		$(document).ready(function() {
			function set_g_data() {
				// $.getJSON("json/menu.json", function(data) {
				// 	g_data = data;
				// });
				$.ajax({
					url: "json/menu.json",
					async: false,
					dataType: 'json',
					success: function(data) {
						g_data = data;
					}
				});
			};
			set_g_data();
			click_cat("init");
		});