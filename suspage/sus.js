window.onload = function () {

	
//Better to construct options first and then pass it as a parameter
	var line = {
		backgroundColor: "#F5F5F5",
		color:"#F5F5F5",
		title: {
        text: "SUS Data",  
        fontColor: "#3385AD",
        fontSize: 30,
        padding: 10,
        margin: 15,
		interactivityEnabled: true,
        fontWeight: "bold"
      },
                animationEnabled: true,
		data: [
		{
			markerColor: "#94D60A",
			color: "#94D60A",
			type: "line", //change it to line, area, bar, pie, etc
			dataPoints: [
				{ x: 10, y: 10 },
				{ x: 20, y: 11 },
				{ x: 30, y: 14 },
				{ x: 40, y: 16 },
				{ x: 50, y: 19 },
				{ x: 60, y: 15 },
				{ x: 70, y: 12 },
				{ x: 80, y: 10 }
			]
		}
		]
	};
	
	var column = {
		backgroundColor: "#F5F5F5",
		color:"#F5F5F5",
		title: {
        text: "SUS Data",  
        fontColor: "#3385AD",
        fontSize: 30,
        padding: 10,
        margin: 15,
		interactivityEnabled: true,
        fontWeight: "bold"
      },
                animationEnabled: true,
		data: [
		{
			markerColor: "#94D60A",
			color: "#94D60A",
			type: "column", //change it to line, area, bar, pie, etc
			dataPoints: [
				{ x: 10, y: 10 },
				{ x: 20, y: 11 },
				{ x: 30, y: 14 },
				{ x: 40, y: 16 },
				{ x: 50, y: 19 },
				{ x: 60, y: 15 },
				{ x: 70, y: 12 },
				{ x: 80, y: 10 }
			]
		}
		]
	};

	$("#chartLine").CanvasJSChart(line);
	$("#chartColumn").CanvasJSChart(column);

}