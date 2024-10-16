'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    // [ app-sale ] start
    (function () {
      var options = {
        chart: {
          height: 40,
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3
        },
        series: [
          {
            name: 'Car',
            data: [85, 65, 140, 110, 180]
          }
        ],
        colors: ['#04a9f5'],
        fill: {
          type: 'solid'
        },
        xaxis: {
          tickPlacement: 'between'
        },
        markers: {
          size: 0,
          colors: '#fff',
          strokeColors: ['#04a9f5'],
          opacity: 0.9,
          strokeWidth: 2,
          hover: {
            size: 4
          }
        }
      };
      var chart = new ApexCharts(document.querySelector('#app-sale'), options);
      chart.render();
    })();
    (function () {
      var options = {
        chart: {
          height: 40,
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3
        },
        series: [
          {
            name: 'Car',
            data: [180, 110, 140, 65, 85]
          }
        ],
        colors: ['#f44236'],
        fill: {
          type: 'solid'
        },
        xaxis: {
          tickPlacement: 'between'
        },
        markers: {
          size: 0,
          colors: '#fff',
          strokeColors: ['#f44236'],
          opacity: 0.9,
          strokeWidth: 2,
          hover: {
            size: 4
          }
        }
      };
      var chart = new ApexCharts(document.querySelector('#app-sale1'), options);
      chart.render();
    })();
    (function () {
      var options = {
        chart: {
          height: 40,
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3
        },
        series: [
          {
            name: 'Car',
            data: [85, 65, 140, 110, 180]
          }
        ],
        colors: ['#a389d4'],
        fill: {
          type: 'solid'
        },
        xaxis: {
          tickPlacement: 'between'
        },
        markers: {
          size: 0,
          colors: '#fff',
          strokeColors: ['#a389d4'],
          opacity: 0.9,
          strokeWidth: 2,
          hover: {
            size: 4
          }
        }
      };
      var chart = new ApexCharts(document.querySelector('#app-sale2'), options);
      chart.render();
    })();
    (function () {
      var options = {
        chart: {
          height: 40,
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3
        },
        series: [
          {
            name: 'Car',
            data: [180, 110, 140, 65, 85]
          }
        ],
        colors: ['#1de9b6'],
        fill: {
          type: 'solid'
        },
        xaxis: {
          tickPlacement: 'between'
        },
        markers: {
          size: 0,
          colors: '#fff',
          strokeColors: ['#1de9b6'],
          opacity: 0.9,
          strokeWidth: 2,
          hover: {
            size: 4
          }
        }
      };
      var chart = new ApexCharts(document.querySelector('#app-sale3'), options);
      chart.render();
    })();
    // [ app-sale ] end
  }, 500);
});
