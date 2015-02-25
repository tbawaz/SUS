window.onload = function () {
		var chart = new CanvasJS.Chart("chartContainer",
    {
      backgroundColor:  "#F5F5F5",
      title:{
      text: "Units Consumed($)",
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2014, 00, 1), y: 50 },
        { x: new Date(2014, 01, 1), y: 55 },
        { x: new Date(2014, 02, 1), y: 62 },
        { x: new Date(2014, 03, 1), y: 46 },
        { x: new Date(2014, 04, 1), y: 45 },
        { x: new Date(2014, 05, 1), y: 50 },
        { x: new Date(2014, 06, 1), y: 48 },
        { x: new Date(2014, 07, 1), y: 48 },
        { x: new Date(2014, 08, 1), y: 41 },
        { x: new Date(2014, 09, 1), y: 50 },
        { x: new Date(2014, 10, 1), y: 48 },
        { x: new Date(2014, 11, 1), y: 51 }
        ]
      },
     {
	type: "line",
	color: "red",
        dataPoints: [
        { x: new Date(2014, 00, 1), y: 60 },
        { x: new Date(2014, 01, 1), y: 65 },
        { x: new Date(2014, 02, 1), y: 72 },
        { x: new Date(2014, 03, 1), y: 56 },
        { x: new Date(2014, 04, 1), y: 55 },
        { x: new Date(2014, 05, 1), y: 60 },
        { x: new Date(2014, 06, 1), y: 58 },
        { x: new Date(2014, 07, 1), y: 58 },
        { x: new Date(2014, 08, 1), y: 51 },
        { x: new Date(2014, 09, 1), y: 60 },
        { x: new Date(2014, 10, 1), y: 58 },
        { x: new Date(2014, 11, 1), y: 61 }
        ]
     }
      ]
    });

    chart.render();
  }

	


