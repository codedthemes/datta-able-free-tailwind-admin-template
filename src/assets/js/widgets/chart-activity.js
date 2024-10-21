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
      series: [550, 237],
      colors: ['#1de9b6', '#ecedef'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#1de9b6', '#ecedef'],
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      tooltip: {
        fillSeriesColor: false
      },
      labels: ['MAX', 'MIN'],
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#chart-activity'), options);
    chart.render();
  }, 500);
});
