$(function advanced_titles(container){

	var
	d1 = [],
	d2 = [],
	ticks_X = [],
	needed = [2800, 2700, 2600, 2500, 2400, 2300, 2200, 2100, 2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200],
	inHand = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	age = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "75", "80", "85", "90"],
	i, graph, options;

	for (i = 0; i < 17; i++) {
		ticks_X.push([i, age[i]]);
		d1.push([i, needed[i]]);
		d2.push([i, inHand[i]]);
	}

/*
    graph =[
		{data: d1, label: "必要なお金", yaxis: 2},
		{data: d2, label: "準備済みのお金", bars: { show: true, barWidth: 0.8,lineWidth: 0 }}
	];
*/
    graph =[
		{data: d1, label: "必要なお金", yaxis: 2},
		{data: d2, label: "", bars: { show: true, barWidth: 0.8,lineWidth: 0 }}
	];
	
	options = {
		title: "   ",
		HtmlText: false,
		xaxis: {
			ticks: ticks_X,
			title: "年齢"
		},
		yaxis: {
			ticks: [0, 500, 1000, 1500, 2000, 2500, [3000, "3000万円"]],
			min: 0,
			max: 3200,
			title: "金額"
		},
		y2axis: {
			min: 0,
			max: 3200,
		},
		legend: {
			position: "nw"
		}			
	};

	Flotr.draw($('#graph').get(0), graph, options);
	
});


