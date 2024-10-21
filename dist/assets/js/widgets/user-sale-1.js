'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
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
      colors: ['#1DE3BE'],
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
    var chart = new ApexCharts(document.querySelector('#user-sale'), options);
    chart.render();

    var options1 = {
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
      colors: ['#1DE3BE'],
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
    var chart = new ApexCharts(document.querySelector('#user-sale1'), options1);
    chart.render();
  }, 500);
});
