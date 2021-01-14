import api from '../apiUtils/api'
const categories = ["Drink", "Nicotine", "Candy", "New", "Top Seller", "Food", "Snacks"];
let allCategories;

export function categoriesFetcher (cat) {
  let category;
  return api.getProductsByCategory(cat)
  .then(data => {
    if(data.success){
      console.log("ye kab")
      return data.products
      // return category
    }
  })
  .catch(err=>{
    console.log("error in get all products ------", err)
    alert("Something went wrong")
  })
  // return category;
  // console.log("just above",category)
  // return category
}

// let Drink = categoriesFetcher("Drink")
// console.log("hereeeeeee", Drink);
// export { Drink }