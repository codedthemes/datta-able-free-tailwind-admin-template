'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 110,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%'
          }
        }
      },
      tooltip: {
        fillSeriesColor: false
      },
      series: [26, 74],
      colors: ['#f44236', '#ecedef'],
      labels: ['NEGATIVE', 'All'],
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#sadball'), options);
    chart.render();
    var options1 = {
      chart: {
        height: 110,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%'
          }
        }
      },
      tooltip: {
        fillSeriesColor: false
      },
      series: [74, 26],
      colors: ['#1de9b6', '#ecedef'],
      labels: ['POSITIVE', 'All'],
      legend: {
        show: false
      }
    };
    var chart1 = new ApexCharts(document.querySelector('#happyball'), options1);
    chart1.render();
  }, 500);
});
