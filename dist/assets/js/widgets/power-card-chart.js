'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 100,
        type: 'line',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Car',
          data: [85, 65, 140, 110, 180]
        }
      ],
      colors: ['#04a9f5'],
      fill: {
        type: 'solid'
      },
      xaxis: {
        tickPlacement: 'between'
      },
      markers: {
        size: 0,
        colors: '#fff',
        strokeColors: ['#04a9f5'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
          size: 4
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#power-card-chart'), options);
    chart.render();
  }, 500);
});
