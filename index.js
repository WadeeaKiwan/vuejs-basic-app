const app = new Vue({
  el: '#app',
  data: {
    // products: ['Boots', 'Jacket', 'Hiking Socks'],
    products: [],
  },
  created() {
    fetch('https://api.myjson.com/bins/74l63')
      .then(res => res.json())
      .then(json => {
        this.products = json.products;
      });
  },
  computed: {
    totalProducts() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);
    },
  },
});
