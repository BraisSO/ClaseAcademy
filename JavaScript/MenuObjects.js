const menu = {
    _meal: " ",
    _price: 0,
  
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._price = priceToCheck;
      }
    },
  
    get meal() {
      return this._meal;
    },
  
    get price() {
      return this._price;
    },
  
    get todaysSpecial() {
      if (menu.meal && menu.price) {
        console.log("Today’s Special is Spaghetti for $5!");
      } else {
        console.log("Meal or price was not set correctly!");
      }
    },
  };
  menu.price = 5;
  menu.meal = "pasta";
  menu.todaysSpecial;
  