'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 320,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      series: [
        {
          name: 'Market Days',
          data: [5, 30, 25, 55, 45, 65, 60, 105, 80, 110, 120, 150]
        },
        {
          name: 'Market Days ALL',
          data: [80, 95, 87, 155, 140, 147, 130, 180, 160, 175, 165, 200]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      colors: ['#1de9b6', '#10adf5'],
      fill: {
        type: 'solid'
      },
      markers: {
        size: 5,
        colors: ['#1de9b6', '#10adf5'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      grid: {
        borderColor: '#e2e5e885'
      }
    };
    var chart = new ApexCharts(document.querySelector('#line-area2'), options);
    chart.render();
  }, 500);
});
