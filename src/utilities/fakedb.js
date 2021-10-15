const addTodb = (id, quantity) => {
  console.log(id);
  console.log(quantity);
  const exist = getDb();
  let food_cart = {};
  if (exist) {
    food_cart = JSON.parse(exist);
    if (food_cart[id]) {
      food_cart[id] = quantity;
    } else {
      food_cart[id] = quantity;
    }
  } else {
    food_cart[id] = quantity;
  }

  updateDb(food_cart);
};
const getDb = () => localStorage.getItem("food_cart");
const updateDb = (cart) => {
  localStorage.setItem("food_cart", JSON.stringify(cart));
};
const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};
const removeFromDb = (id) =>{
  const exist = getDb();
  if(!exist){

  }
  else{
    const food_cart = JSON.parse(exist);
    delete food_cart[id];
    updateDb(food_cart)
  }
}
const deleteLoaclStorage =()=>{
  localStorage.removeItem("food_cart")
}
export { addTodb, getStoredCart, removeFromDb, deleteLoaclStorage, getDb };

