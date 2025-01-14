"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Progresss Circle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	/*project*/
	$(".project-progress-1, .team-progress-1").circleProgress({
		max: 100,
		value: 40,
		textFormat: "percent",
	});
	$(".project-progress-2, .team-progress-2").circleProgress({
		max: 100,
		value: 65,
		textFormat: "percent",
	});
	$(".project-progress-3, .team-progress-3").circleProgress({
		max: 100,
		value: 50,
		textFormat: "percent",
	});
	$(".project-progress-4, .team-progress-4").circleProgress({
		max: 100,
		value: 75,
		textFormat: "percent",
	});

	/*lead*/
	$(".lead-progress-1").circleProgress({
		max: 100,
		value: 60,
		textFormat: function () {
			return "$975 USD";
		},
	});
	$(".lead-progress-2").circleProgress({
		max: 100,
		value: 55,
		textFormat: function () {
			return "$850 USD";
		},
	});
	$(".lead-progress-3").circleProgress({
		max: 100,
		value: 50,
		textFormat: function () {
			return "$1500 USD";
		},
	});
});
