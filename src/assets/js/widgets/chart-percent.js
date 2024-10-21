'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 250,
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
      series: [23, 14, 35, 28],
      colors: ['#1de9b6', '#f4c22b', '#a389d4', '#04a9f5'],
      labels: ['page done', 'page progress', 'page outstanding', 'page started'],
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#chart-percent'), options);
    chart.render();
  }, 500);
});
