export class Payments {
    constructor(recipient, // the readonly one only allows us to read it both inside and outside the class but NOT change the value
    details, // the private only allows us to read and change inside the class
    amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
