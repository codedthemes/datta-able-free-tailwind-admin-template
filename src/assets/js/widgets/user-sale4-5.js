'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options4 = {
      chart: {
        type: 'line',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      colors: ['#04a9f5'],
      series: [
        {
          data: [45, 66, 41, 89, 25, 44, 9, 54]
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#user-sale4'), options4);
    chart.render();
    var options5 = {
      chart: {
        type: 'line',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      colors: ['#04a9f5'],
      series: [
        {
          data: [54, 9, 44, 25, 89, 41, 66, 45]
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
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#user-sale5'), options5);
    chart.render();
  }, 500);
});
