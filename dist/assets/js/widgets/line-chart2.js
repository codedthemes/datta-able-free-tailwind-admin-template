'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 250,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Car',
          data: [160, 140, 150, 95, 130, 55, 75, 65, 140, 120, 110, 180]
        },
        {
          name: 'Bike',
          data: [85, 95, 90, 125, 105, 120, 110, 140, 100, 95, 130, 80]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      colors: ['#a389d4', '#1ddcc8'],
      fill: {
        type: 'solid'
      },
      markers: {
        size: 5,
        colors: '#fff',
        strokeColors: ['#a389d4', '#1ddcc8'],
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
    var chart = new ApexCharts(document.querySelector('#line-chart2'), options);
    chart.render();
  }, 500);
});
