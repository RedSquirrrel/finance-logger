export class Invoice {
    constructor(client, // the readonly one only allows us to read it both inside and outside the class but NOT change the value
    details, // the private only allows us to read and change inside the class
    amount // the public (which is the default) means we can change and read the value outside and inside of the class
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
