'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'Market Days',
          data: [65, 105, 145, 105, 145, 185]
        },
        {
          name: 'Market Days2',
          data: [125, 80, 30, 70, 110, 150]
        },
        {
          name: 'Market Days ALL',
          data: [175, 190, 160, 190, 140, 100]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      colors: ['#1de9b6', '#10adf5', '#fdda08'],
      fill: {
        type: 'solid'
      },
      markers: {
        size: 5,
        colors: ['#1de9b6', '#10adf5', '#fdda08'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      grid: {
        borderColor: '#e2e5e885'
      }
    };
    var chart = new ApexCharts(document.querySelector('#line-chart1'), options);
    chart.render();
  }, 500);
});
