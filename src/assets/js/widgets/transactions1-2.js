'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options1 = {
      chart: {
        type: 'bar',
        height: 45,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#a389d4'],
      plotOptions: {
        bar: {
          columnWidth: '40%'
        }
      },
      series: [
        {
          data: [48, 30, 25, 30, 20, 40, 30]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Amount Spent :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#transactions1'), options1);
    chart.render();
    var options2 = {
      chart: {
        type: 'bar',
        height: 45,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1dc4e9'],
      plotOptions: {
        bar: {
          columnWidth: '40%'
        }
      },
      series: [
        {
          data: [44, 26, 22, 35, 28, 35, 28]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
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
              return 'Amount Spent :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#transactions2'), options2);
    chart.render();
  }, 500);
});
