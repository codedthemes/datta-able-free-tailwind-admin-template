'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      series: [
        {
          name: 'Series 1',
          data: [15, 13, 11.1, 15]
        }
      ],
      chart: {
        height: 270,
        type: 'radar',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 2
      },
      colors: ['#1de9b6'],
      fill: {
        opacity: 1,
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#1dc4e9'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      markers: {
        size: 0
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['Sales', 'Visits', 'Views', 'Clicks']
      }
    };
    var chart = new ApexCharts(document.querySelector('#webchart'), options);
    chart.render();
  }, 500);
});
