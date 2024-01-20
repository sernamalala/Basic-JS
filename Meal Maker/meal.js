//menu object
let menu = {
    _meal: '',
    _price: 0,

    //setter method to make sure typeof wont be manipulated
    set meal(mealToCheck){

      if(typeof mealToCheck === 'string'){
       this._meal = mealToCheck;
       
      }
      
    },

        set price(priceToCheck){

      if(typeof priceToCheck === 'number'){
       this._price = priceToCheck;
       
      }
      
    },

    get todaysSpecial(){
        if(this._meal && this._price){
          return 'Today’s Special is '+this._meal+' for $'+this._price+'!';
        }
        else{
          return 'Meal or price was not set correctly!';
        }
    }
};

menu.meal = 'burger';
menu.price = 60;

console.log(menu.todaysSpecial);