import { Invoice } from './invoice.js';
import { Payments } from './Payments.js';
import { HasFormatter } from './interfaces/HasFormater.js';
import { ListTemplate } from './ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];

  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payments(...values);
  }

  toFrom.value = '';
  details.value = '';
  amount.value = '';

  list.render(doc, type.value, 'end');
});
