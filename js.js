function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.displayInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
};

let library = [];

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

addBook("The Hobbit", "J.R.R. Tolkien", 320);
addBook("To Kill a Mockingbird", "Harper Lee", 281);
addBook("1984", "George Orwell", 328);

console.log(library);

console.log(searchByTitle("the")); 
console.log(searchByAuthor("lee")); 



function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}


Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Successfully deposited ${amount} into account ${this.accountNumber}.`);
    } else {
        console.log(`Deposit amount must be greater than zero.`);
    }
};


Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Successfully withdrew ${amount} from account ${this.accountNumber}.`);
    } else if (amount > this.balance) {
        console.log(`Insufficient funds.`);
    } else {
        console.log(`Withdrawal amount must be greater than zero.`);
    }
};


Account.prototype.calculateInterest = function(rate, years) {
    if (rate > 0 && years > 0) {
        let principal = this.balance;
        let compoundInterest = principal * Math.pow((1 + rate/100), years);
        console.log(`After ${years} years at ${rate}% interest, the balance will be ${compoundInterest.toFixed(2)}.`);
    } else {
        console.log(`Invalid input for rate or years.`);
    }
};


let account1 = new Account("ACC001", 1000, "John Doe");

console.log(account1); 

account1.deposit(500); 
console.log(account1.balance); 

account1.withdraw(200); 
console.log(account1.balance); 

account1.calculateInterest(5, 10); 
