// Dom7
var $ = Dom7;
// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app', 
  routes: [
    // index/home page
    {
      path: '/',
      url: './index.html',
      name: 'home',
    },
    // bread page
    {
      path: '/bread/',
      componentUrl: './bread.html',
      name: 'bread',
    },
    // detail page (notice we pass a paramater!)
    {
      path: '/detail/:id',
      componentUrl: './detail.html',
      name: 'detail',
    },
  ],
});
var mainView = app.views.create('.view-main');
//load up data from the JSON file at runtime.
app.request.json('bread.json', function (mydata) {
  app.data.bread = mydata;
});
console.log(app.data);