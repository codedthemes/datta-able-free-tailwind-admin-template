'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        type: 'bar',
        height: 260,
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
      colors: ['#1de9b6', '#a389d4', '#1de9b6', '#a389d4', '#1de9b6', '#a389d4'],
      fill: {
        type: 'gradient',
        opacity: 1,
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: ['#1dc4e9', '#899ed4', '#1de9b6', '#a389d4', '#1de9b6', '#a389d4'],
          stops: [0, 100]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          distributed: true
        }
      },
      series: [
        {
          data: [30, 35, 40, 30, 32, 38]
        }
      ],
      legend: {
        show: false
      },
      xaxis: {
        categories: ['<20', '30', '40', '50', '60', '>70'],
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
    var chart = new ApexCharts(document.querySelector('#Stack-age'), options);
    chart.render();
  }, 500);
});
