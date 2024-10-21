'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var map = new jsVectorMap({
      selector: '#world-low',
      map: 'world',
      markersSelectable: true,
      markers: [
        {
          coords: [-14.235, -51.9253]
        },
        {
          coords: [35.8617, 104.1954]
        },
        {
          coords: [61, 105]
        },
        {
          coords: [26.8206, 30.8025]
        }
      ],
      markerStyle: {
        initial: {
          fill: '#3f4d67'
        },
        hover: {
          fill: '#04a9f5'
        }
      },
      markerLabelStyle: {
        initial: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 500,
          fill: '#3f4d67'
        }
      }
    });
  }, 500);
});
