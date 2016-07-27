

L.mapbox.accessToken = 'pk.eyJ1IjoibWlrZWhvaG5lIiwiYSI6ImNpcjJnZm51MDAzMm5mcW04OGJuMnNldTEifQ.zP52AFn34pJFdbtEpO7rWw';

L.mapbox.map('map-one', 'mapbox.streets',{
  scrollWheelZoom: false,
  maxZoom: 18,
  minZoom: 12
}).setView([45.679090,-111.033168], 13);
