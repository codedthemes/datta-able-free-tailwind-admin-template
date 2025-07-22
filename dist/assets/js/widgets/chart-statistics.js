'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 200,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '90%'
          }
        }
      },
      series: [24.7, 36.3, 23.5, 15.5],
      colors: ['#1de9b6', '#a389d4', '#04a9f5', '#f4c22b'],
      labels: ['page  Views', 'page Clicks', 'page Likes', 'pages'],
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#chart-statistics'), options);
    chart.render();
  }, 500);
});
