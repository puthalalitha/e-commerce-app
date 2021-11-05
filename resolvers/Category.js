

exports.Category = {
  products: ({id: categoryId}, {filter}, {db}) => {
    // console.log(parent);
    // const categoryId = parent.id;
    const categoryProducts = db.products.filter((product) => product.categoryId === categoryId);
    let filteredCategoryProducts = categoryProducts;
    if (filter) {
      if (filter.onSale == true) {
        filteredCategoryProducts = categoryProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredCategoryProducts;
  },
};
 