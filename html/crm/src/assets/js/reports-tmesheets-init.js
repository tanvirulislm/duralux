"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Time Logged !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 350,
			type: "area",
			stacked: !1,
			toolbar: {
				show: !1,
			},
		},
		xaxis: {
			categories: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "11px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + " Mins";
				},
				offsetX: -22,
				offsetY: 0,
				style: {
					fontSize: "11px",
					color: "#64748b",
				},
			},
		},
		stroke: {
			width: 2,
			curve: "smooth",
			lineCap: "round",
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
			borderColor: "#ebebf3",
			row: {
				colors: ["#ebebf3", "transparent"],
				opacity: 0.02,
			},
		},
		legend: {
			show: !1,
		},
		colors: ["#3454d1"],
		dataLabels: {
			enabled: !1,
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.8,
				stops: [0, 100],
			},
		},
		series: [
			{
				name: "Time Logged",
				data: [20, 45, 25, 60, 30, 65, 35, 75, 60, 80, 65, 95],
				type: "area",
			},
		],
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + " Mins";
				},
			},
			style: {
				fontSize: "11px",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#logged-time-area-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Billable Time !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 350,
			width: "100%",
			stacked: !1,
			type: "bar",
			toolbar: {
				show: !1,
			},
		},
		stroke: {
			show: !1,
		},
		plotOptions: {
			bar: {
				endingShape: "rounded",
				columnWidth: "30%",
				distributed: false,
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + " Mins";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: ["#e5e7eb", "#3454D1"],
		series: [
			{
				name: "Total Time",
				data: [20, 30, 40, 50, 46, 42, 38, 34, 30, 28, 26, 25],
			},
			{
				name: "Billable Time",
				data: [15, 25, 35, 45, 41, 38, 33, 28, 23, 18, 13, 10],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"],
			axisBorder: {
				show: !1,
			},
			axisTicks: {
				show: !1,
			},
			labels: {
				style: {
					fontSize: "10px",
					colors: "#64748b",
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (e) {
					return +e + " Mins";
				},
				offsetX: -5,
				offsetY: 0,
				style: {
					color: "#64748b",
				},
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: !1,
				},
			},
			yaxis: {
				lines: {
					show: !1,
				},
			},
		},
		dataLabels: {
			enabled: !1,
		},
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + " Mins";
				},
			},
			style: {
				fontSize: "12px",
				fontFamily: "Inter",
			},
		},
		legend: {
			show: !1,
			labels: {
				fontSize: "12px",
				colors: "#64748b",
			},
			fontSize: "12px",
			fontFamily: "Inter",
		},
	};
	var chart = new ApexCharts(document.querySelector("#billable-time-bar-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--! Progresss Circle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$(".times-progress-chart").circleProgress({
		max: 100,
		value: 40,
		textFormat: "percent",
	});
	$(".tasks-progress-chart").circleProgress({
		max: 100,
		value: 50,
		textFormat: "percent",
	});
	$(".projects-progress-chart").circleProgress({
		max: 100,
		value: 65,
		textFormat: "percent",
	});
});
