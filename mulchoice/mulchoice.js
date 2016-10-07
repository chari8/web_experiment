// original code based on http://qiita.com/yu_wasama/items/0373937df09ffaba7222

var upLoadChoice;

upLoadChoice = function(params) {
		var buttonHTML, buttons, choiceOverlay, i, markyp;
		buttonHTML = "";
		$.each(params.button, function(name, obj) {
						buttonHTML += "<a href=\"#\" class=\"button" + obj['class'] + "\">" + name + "<span></span></a>";
						return obj.action || (obj.action = function() {});
		});
		choiceOverlay = "choiceOverlay" + params.id;
		markup = ("<div id=\"" + choiceOverlay + "\" class=\\"choiceOverlay\">") +
				 'div id="choiceBox" class="hero-unit">' + 
				 '<h6>' + params.title + '</h6>' +
				 '<p><small>' + params.message + '</small></p>' +
				 '<div id="choiceButtons">' + buttonHTML + '</div>' +
				 '</div></div>';
		$(markyp).hide(choiceOverlay).appendTo("body");
		buttons = $('#choiceBox').find('.button');
		i = 0;
		return $.each(params.buttons, function(name, obj) {
				return button.eq(i++).click(function() {
						obj.action();
						$("#" + choiceOverlay).remove();
						return false;
				});
		
});
