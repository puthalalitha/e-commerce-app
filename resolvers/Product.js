 

exports.Product = {
  category: ({categoryId}, args, {db}) => {
    
      // console.log(parent);
      // const categoryId = parent.categoryId;
      return db.categories.find(category => categoryId === category.id);
      
  },
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter(review => id === review.productId)
  }
}
