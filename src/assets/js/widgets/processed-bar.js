'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 200,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      color: '#1dc4e9',
      fill: {
        type: 'gradient',
        gradient: {
          inverseColors: true,
          opacityFrom: 0.5,
          opacityTo: 0.7
        }
      },
      markers: {
        size: 0,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#04a9f5',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        width: 0,
        curve: 'straight'
      },
      series: [
        {
          name: 'series1',
          data: [10, 45, 35, 55, 40]
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
              return 'Sale :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#processed-bar'), options);
    chart.render();
  }, 500);
});
