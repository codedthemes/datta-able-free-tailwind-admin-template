'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options = {
      series: [
        {
          name: 'News',
          data: [53, 13, 30, 4]
        }
      ],
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      colors: ['#1de9b6', '#a389d4', '#04a9f5', '#f44236'],
      fill: {
        type: 'gradient',
        opacity: 1,
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: ['#1dc4e9', '#899ed4', '#049df5', '#f48f36'],
          stops: [0, 100]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '65%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: true
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      yaxis: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        categories: ['Sport', 'Music', 'Travel', 'News']
      }
    };
    var chart = new ApexCharts(document.querySelector('#bar-chart1'), options);
    chart.render();
  }, 500);
});
