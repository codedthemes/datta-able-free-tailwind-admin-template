'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'area',
        height: 170,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],
      fill: {
        type: 'gradient'
      },
      markers: {
        size: 0,
        opacity: 0.9,
        color: '#ffffff',
        strokeColor: '#a389d4',
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      stroke: {
        width: 5,
        color: '#ffffff'
      },
      series: [
        {
          name: 'series1',
          data: [20, 25, 33, 28, 25, 35, 28]
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
              return 'Visite :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#sitevisite-chart'), options);
    chart.render();
  }, 500);
});
