const { reviews } = require("../db");

 

exports.Query = {
  hello: (parent, args, context) => "World",
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;
    // console.log(filteredProducts);
    console.log(db.reviews);
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredProducts = filteredProducts.filter(product => {
          return product.onSale;
        })
      }
      if ([1,2,3,4,5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let numberOfReviews = 0;
          let sumRating = 0;
          db.reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= avgRating
        })
      }
    }
    return filteredProducts;
  },
  product: (parent, {id}, {db}) => {
    // console.log(args);
    // const { id } = args;
    return db.products.find((item) => item.id === id);
  },
  categories: (parent, args, {db}) => db.categories,
  category: (parent, {id}, {db}) => {
    // const { id } = args;
    return db.categories.find((category) => category.id === id);
  },
};
