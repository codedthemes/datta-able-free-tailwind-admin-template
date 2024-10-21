'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 180,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '85%'
          }
        }
      },
      series: [23, 35, 28],
      colors: ['#1de9b6', '#a389d4', '#04a9f5'],
      labels: ['Desktop', 'Mobile', 'Tablet'],
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#chart-percent1'), options);
    chart.render();
  }, 500);
});
