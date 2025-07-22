'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 190,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#04a9f5'],
      fill: {
        type: 'solid',
        opacity: 1
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
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [30, 55, 80, 60, 100, 70]
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
              return 'Comments :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#command-card-chart1'), options);
    chart.render();
  }, 500);
});
