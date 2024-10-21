'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      series: [
        {
          name: 'Series 1',
          data: [100, 60, 100, 100, 100, 80]
        },
        {
          name: 'Series 2',
          data: [80, 90, 80, 110, 40, 115]
        }
      ],
      chart: {
        height: 230,
        type: 'radar',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 2
      },
      colors: ['#a389d4', '#1de9b6'],
      fill: {
        opacity: 1,
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#899ed4', '#1dc4e9'],
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      }
    };
    var chart = new ApexCharts(document.querySelector('#sales-render'), options);
    chart.render();
  }, 500);
});
