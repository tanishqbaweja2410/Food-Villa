const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const FETCH_MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6436082&lng=77.08698369999999&restaurantId=";

const FETCH_RESTAURANT_URL =
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6389315&lng=77.08668109999999&page_type=DESKTOP_WEB_LISTING";

app.use(
  '/api',
  createProxyMiddleware({
    target: FETCH_MENU_URL, 
    changeOrigin: true,
    secure: false,
  },{
    target: FETCH_RESTAURANT_URL, 
    changeOrigin: true,
    secure: false,
  })
);

app.listen(5000, () => {
  console.log('Proxy server is running on port 5000');
});
