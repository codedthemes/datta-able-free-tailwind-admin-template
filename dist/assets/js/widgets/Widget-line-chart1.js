'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'line',
        height: 250,
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
          data: [10, 60, 45, 72, 45, 86]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          width: 0
        },
        labels: {
          show: false
        }
      },
      grid: {
        padding: {
          bottom: 0,
          left: 10
        },
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
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
    var chart = new ApexCharts(document.querySelector('#Widget-line-chart1'), options);
    chart.render();
  }, 500);
});
