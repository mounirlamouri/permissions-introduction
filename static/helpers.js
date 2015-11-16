// Some helper functions for the codelab.

function showRestaurantsAround() {
  var restaurants = [
    { name: 'Pudding Lane', price: '0', city: 'London' },
    { name: 'Cask', price: '10-20', city: 'London' },
    { name: 'Duke of Wellington', price: '10-15', city: 'London' },
  ];

  _showRestaurants(restaurants);
}

function showTopRestaurants() {
  var restaurants = [
    { name: 'Tasty Sushi', price: '15-25', city: 'Cardiff' },
    { name: 'Warm Pizza', price: '10-15', city: 'Glasgow' },
    { name: 'Chez Francois', price: '50-100', city: 'Belfast' },
  ];

  _showRestaurants(restaurants);
}

function _showRestaurants(restaurants) {
  var restaurantList = document.getElementById('restaurant-list');
  restaurantList.innerHTML = '';

  restaurants.forEach(function(r) {
    var restaurant = document.createElement('local-restaurant');
    restaurant.name = r.name;
    restaurant.price = r.price;
    restaurant.city = r.city;
    restaurantList.appendChild(restaurant);
  });
}
