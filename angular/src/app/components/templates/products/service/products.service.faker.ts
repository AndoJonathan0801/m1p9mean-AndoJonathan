import { Offer, Product } from 'src/app/interface/interface';
// @ts-ignore TODO make strict mode compatible
import faker from "faker";

export default {
    getProducts() {
      const products : Product[] = [];
      const offers : Offer[] = [];
      for (var i = 1; i<= 12; i++) {
        products.push({
          id: i,
          name: faker.commerce.product(),
          details: faker.commerce.productDescription(),
          offers: [{
            id: faker.datatype.number({ min: 10, max: 100}),
            name: faker.commerce.product(),
            persons: faker.datatype.number({ min: 1, max: 10}),
            price: faker.datatype.number({ min: 100, max: 1000}),
          }],
          img: faker.image.food(),
        });
      }

      return products;
    }
}