'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 220,
        type: 'pie'
      },
      dataLabels: {
        enabled: false
      },
      series: [23, 35, 28],
      colors: ['#1de9b6', '#a389d4', '#04a9f5'],
      labels: ['Desktop', 'Mobile', 'Tablet'],
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#device-chart'), options);
    chart.render();
  }, 500);
});
