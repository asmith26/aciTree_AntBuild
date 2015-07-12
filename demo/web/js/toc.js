//Clear cache for JSON
$.ajaxSetup({
  cache:false
});

$(function() {
	// Main Function
	$('#tree').aciTree({
		ajax: {
			url: 'web/json/toc.json'
		},
		fullRow: true,// selectable extension
	});
	// End Main Function

	// Get the API and keep it for later use
	var api = $('#tree').aciTree('api');

	// Before we load tree, what should we do.
	$('#tree').on('acitree', function(event, api, item, eventName, options) {
		// do some stuff on init
		if (eventName == 'init') {
 
		// get the first item
		var firstItem = api.first();
 
		// then select it
		api.select(firstItem);
 
	}

	//Load PDF when file selected
	switch (eventName) {
		case 'selected':

		if (api.isLeaf(item)) {
			document.getElementById('courseMaterial').innerHTML="<object data="+ api.getId(item) +" id='pdfObj' type='application/pdf' width='100%' height='800'><p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a id='pdfObj_href' href="+ api.getId(item) +">click here to download the PDF file.</a></p></object>";

		} else {
			document.getElementById('courseMaterial').innerHTML="<br/><h3> Open a file by navigating through the folders on the left.<br/><br/> Some shortcuts:<br/><ul><li/><i>Double-click</i> on folders to expand/collapse them.</li></ul></h3>";
		}

		break;
	}
    });
});
