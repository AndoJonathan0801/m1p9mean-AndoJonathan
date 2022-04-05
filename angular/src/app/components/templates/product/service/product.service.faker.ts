import { Product } from 'src/app/interface/interface';
// @ts-ignore TODO make strict mode compatible
import faker from "faker";

export default {
    getProduct(i: number) {
      const offers = [];
      for (var i = 1; i<= 3; i++) {
      offers.push(
        {
          id: faker.datatype.number({ min: 10, max: 100}),
          name: faker.commerce.product(),
          persons: faker.datatype.number({ min: 1, max: 10}),
          price: faker.datatype.number({ min: 100, max: 1000}),
        }
        );
      }
      const product =  {
        id: i,
        name: faker.commerce.product(),
        details: faker.commerce.productDescription(),
        offers: offers,
        img: faker.image.food(),
      } as Product;
      

      return product;
    }
}