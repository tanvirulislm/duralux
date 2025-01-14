"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Progresss Circle !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
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
});

/*
<--!----------------------------------------------------------------!-->
<--! Project Calendar !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	$("#project-calendar").simpleCalendar({
		// displays events
		displayEvent: true,

		// event dates
		events: [
			{
				startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
				endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
				summary: "Meeting for campaign with sales team",
			},
			{
				startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
				endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
				summary: "NFT Mobile Apps Developemnt",
			},
			{
				startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
				summary: "NFT Mobile Apps Developemnt",
			},
			{
				startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
				summary: "React admin dashboard design ",
			},
			{
				startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
				endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
				summary: "React admin dashboard design ",
			},
			{
				startDate: new Date(new Date().setHours(new Date().getHours() + 324)).toDateString(),
				endDate: new Date(new Date().setHours(new Date().getHours() + 325)).toISOString(),
				summary: "NFT Mobile Apps Developemnt",
			},
			{
				startDate: new Date(new Date().setHours(new Date().getHours() + 224)).toDateString(),
				endDate: new Date(new Date().setHours(new Date().getHours() + 225)).toISOString(),
				summary: "Meeting for campaign with sales team",
			},
			{
				startDate: new Date(new Date().setHours(new Date().getHours() + 124)).toDateString(),
				endDate: new Date(new Date().setHours(new Date().getHours() + 125)).toISOString(),
				summary: "React admin dashboard design",
			},
		],

		// disable showing event details
		disableEventDetails: false,

		// disable showing empty date details
		disableEmptyDetails: false,
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Project Statistics !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var options = {
		chart: {
			height: 365,
			type: "area",
			stacked: !1,
			toolbar: {
				show: !1,
			},
		},
		xaxis: {
			categories: ["Satarday", "Sunday", "Monday", "Thusday", "Wensday", "Thusday", "Friday"],
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
					return +e + "K";
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
			curve: "smooth",
			width: [1, 1, 1, 1],
			dashArray: [3, 3, 3, 3],
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
		colors: ["#3454d1", "#25b865", "#e49e3d"],
		dataLabels: {
			enabled: !1,
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.3,
				stops: [0, 100],
			},
		},
		series: [
			{
				name: "Tasks Completed",
				data: [20, 45, 25, 60, 30, 65, 35],
				type: "area",
			},
			{
				name: "Project Complated",
				data: [30, 25, 40, 35, 50, 40, 60],
				type: "area",
			},
			{
				name: "Upcomming Project",
				data: [45, 20, 50, 25, 65, 30, 75],
				type: "area",
			},
		],
		tooltip: {
			y: {
				formatter: function (e) {
					return +e + "K";
				},
			},
			style: {
				fontSize: "11px",
				fontFamily: "Inter",
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#project-statistics-chart"), options);
	chart.render();
});

/*
<--!----------------------------------------------------------------!-->
<--!  Weekly Time Spent !-->
<--!----------------------------------------------------------------!-->
*/
$(document).ready(function () {
	var colors = ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#3454D1", "#E9EDF7", "#E9EDF7", "#E9EDF7"];
	var options = {
		chart: {
			height: 325,
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
				columnWidth: "25%",
				distributed: true,
				dataLabels: {
					position: "top",
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "MIN";
			},
			offsetY: 20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		colors: colors,
		series: [
			{
				name: "Spent",
				data: [200, 300, 400, 500, 460, 420, 380],
			},
		],
		markers: {
			size: 0,
		},
		xaxis: {
			categories: ["SAT", "SUN", "MON", "THU", "WEN", "THU", "FRI"],
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
					return +e + "M";
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
					return +e + " MIN";
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
	var chart = new ApexCharts(document.querySelector("#weekly-time-spent-chart"), options);
	chart.render();
});
