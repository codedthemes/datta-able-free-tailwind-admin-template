'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 230,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1dc4e9'],
      fill: {
        colors: undefined,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: ['#A389D4'],
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 70, 100],
          colorStops: []
        }
      },
      stroke: {
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [30, 55, 80, 60, 70, 70, 110, 90, 130]
        }
      ],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return 'Statistics :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#Earnings-chart'), options);
    chart.render();
  }, 500);
});
