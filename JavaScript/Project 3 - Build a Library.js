class Media {
    constructor(title) {
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(inputValue) {
        if (inputValue <= 5) {
            this._ratings.push(inputValue);
        } else {
            console.log("Rating have to be under 5");
        }
    }

    getAverageRating() {
        let sum = this._ratings.reduce(
            (accumulator, rating) => accumulator + rating,
            0
        );
        return (sum / this._ratings.length).toFixed(2);
    }
    
    set isCheckedOut(checkIn) {
        this._isCheckedOut = checkIn;
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
};

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());



