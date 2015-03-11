$(function(){
    $("#showModal").avgrund();
});


window.onload = function () {
		var chart = new CanvasJS.Chart("chartContainer",
    {
      backgroundColor:  "white",
      title:{
      text: "Units Consumed($)",
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2014, 00, 1), y: 5 },
        { x: new Date(2014, 01, 1), y: 5 },
        { x: new Date(2014, 02, 1), y: 6 },
        { x: new Date(2014, 03, 1), y: 4 },
        { x: new Date(2014, 04, 1), y: 4 },
        { x: new Date(2014, 05, 1), y: 5 },
        { x: new Date(2014, 06, 1), y: 4 },
        { x: new Date(2014, 07, 1), y: 4 },
        { x: new Date(2014, 08, 1), y: 4 },
        { x: new Date(2014, 09, 1), y: 5 },
        { x: new Date(2014, 10, 1), y: 4 },
        { x: new Date(2014, 11, 1), y: 5 }
        ]
      },
     {
	type: "line",
	color: "red",
        dataPoints: [
        { x: new Date(2014, 00, 1), y: 6 },
        { x: new Date(2014, 01, 1), y: 6 },
        { x: new Date(2014, 02, 1), y: 7 },
        { x: new Date(2014, 03, 1), y: 5 },
        { x: new Date(2014, 04, 1), y: 5 },
        { x: new Date(2014, 05, 1), y: 6 },
        { x: new Date(2014, 06, 1), y: 5 },
        { x: new Date(2014, 07, 1), y: 5 },
        { x: new Date(2014, 08, 1), y: 5 },
        { x: new Date(2014, 09, 1), y: 6 },
        { x: new Date(2014, 10, 1), y: 5 },
        { x: new Date(2014, 11, 1), y: 6 }
        ]
     }
      ]
    });

    chart.render();
  }



	


