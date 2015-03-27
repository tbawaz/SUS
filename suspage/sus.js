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
        type: "column",

        dataPoints: [
        { x: new Date(2014, 00, 1), y: 20 },
        { x: new Date(2014, 00, 10), y: 25 },
        ]
      }
      ]
    });

    chart.render();
  }



	


