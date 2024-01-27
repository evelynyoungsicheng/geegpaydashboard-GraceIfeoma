var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, '');
window.addEventListener('resize', function() {
  myChart.resize()
});
      // Specify the configuration items and data for the chart
      var option = {
        
        tooltip: {
           
                borderWidth: 0,   
        
        },
        
        xAxis: {
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          
        },
        
        yAxis: {},
        series: [{
            name: '',
            type: 'bar',
            data: [45292, 26000, 10700, 6800, 27500, 14500, 36000, 27500, 14500, 36000, 6800, 27500, 14500],
            barWidth: '32px',
            color: "#34CAA5",
            
            itemStyle: {
            barBorderRadius: [30,30,0,0],
            
            }
            

           
          }
          
        ]
      };

      // Display the chart using the configuration items and data just specified.
      myChart.setOption(option);



      
