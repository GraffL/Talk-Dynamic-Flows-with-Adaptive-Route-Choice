/* Goto TitlePage und Goto Overview */

(function ( document, window ) {
    'use strict';
    // wait for impress.js to be initialized
    document.addEventListener("impress:init", function (event) {
        var api = event.detail.api;
        var gc = api.lib.gc;
        
        gc.addEventListener(document, "keyup", function ( event ) {
			// 'o' springt direkt zur Überblick-Folie
			if ( event.keyCode === 79) {
				api.goto("Overview")
			}
			// 't' springt direkt zum Anfang
			if ( event.keyCode === 84) {
				api.goto("Title")
			}
			if ( event.keyCode === 81) {
				if(document.getElementById("impress-toolbar").style.display === "none") {
					document.getElementById("impress-toolbar").style.display = "block"
				} else {
					document.getElementById("impress-toolbar").style.display = "none"
				}
			}
			if( event.keyCode == "65") {
				document.getElementById("impress-autoplay-playpause").click();
			}		
			
			
        }, false);

    }, false);
})(document, window);

(function (document, window) {
	'use strict'
	
	var afterOverview = function( event ) {
		
		if ( ( !event ) || ( !event.target ) ) {
      return;
		}
		
		if (event.detail.next.id == "Overview") {
			document.body.classList.add("finished");
		} else if (event.detail.next.id == "Title") {
			document.body.classList.remove("finished");
		} 
		
	}
	
	window.impress.addPreStepLeavePlugin( afterOverview );
	
})(document, window);