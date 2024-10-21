'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'line',
        height: 245,
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
      colors: ['#fff'],
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
          data: [45, 30, 55]
        }
      ],
      xaxis: {
        categories: ['2019', '2020', '2021'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#fff'
          }
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
        size: 5,
        colors: '#04a9f5',
        strokeColors: '#fff',
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
          size: 7
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
    var chart = new ApexCharts(document.querySelector('#Statistics-sale'), options);
    chart.render();
  }, 500);
});
