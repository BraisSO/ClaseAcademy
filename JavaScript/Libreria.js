class media {
    media(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    getTitle() {
      return this._title;
    }
    getIsCheckedOut() {
      return this._isCheckedOut;
    }
    getRatings() {
      return this._ratings;
    }
  
    setIsCheckedOut(check) {
      this._isCheckedOut = check;
    }
  
    toggleCheckOutStatus(){
      if (this._isCheckedOut===false){
        this._isCheckedOut=true;
      }
        if (this._isCheckedOut===true){
        this._isCheckedOut=false;
        }
    }
  
    getAverageRating(){
      let ratingsSum= this._ratings.reduce((currentSum, rating)=> currentSum+rating, 0)
    }
  
    addRating (num){
      this._ratings.push(num);
    }
  
  }
  