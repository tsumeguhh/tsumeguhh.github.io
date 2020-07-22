var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
	return document.getElementById(id);
};
var addScore = function () {
	// get user entries
	var name = $("name").value;
    var score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = name;
		scores[scores.length] = score;
        $("name").value = "";
        $("score").value = "";
	}
    $("scores_display").value = "";
    $("name").focus();
};
var displayScores = function() {
    $("scores_display").value = "";
    for (var i = 0; i < names.length; i++) {
        $("scores_display").value += names[i] + " = " + scores[i] + "\n";
    }
}
window.onload = function () {
	$("add").onclick = addScore;
    $("display_scores").onclick = displayScores;
	$("name").focus();
};
