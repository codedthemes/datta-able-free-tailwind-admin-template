'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'line',
        height: 420,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#23d3d7'],
      fill: {
        type: 'solid'
      },
      plotOptions: {
        bar: {
          columnWidth: '30%'
        }
      },
      series: [
        {
          data: [10, 60, 45, 72]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr'],
        tickPlacement: 'between'
      },
      grid: {
        padding: {
          bottom: 0,
          left: 10
        }
      },
      markers: {
        size: 2,
        colors: '#23d3d7',
        strokeColors: '#23d3d7',
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
          size: 5
        }
      },
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
    var chart = new ApexCharts(document.querySelector('#Statistics-line'), options);
    chart.render();
  }, 500);
});
