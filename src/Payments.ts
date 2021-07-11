import { HasFormatter } from '../src/interfaces/HasFormater.js'

export class Payments implements HasFormatter {  
  constructor(
    readonly recipient: string, // the readonly one only allows us to read it both inside and outside the class but NOT change the value
    private details: string, // the private only allows us to read and change inside the class
    public amount: number, // the public (which is the default) means we can change and read the value outside and inside of the class
  ){}  
    
  format(){
    return `${this.recipient} is owed £${this.amount} for ${this.details}`
  }
}