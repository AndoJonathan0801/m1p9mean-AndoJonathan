import { Product } from 'src/app/interface/interface';
// @ts-ignore TODO make strict mode compatible
import faker from "faker";

export default {
    getProducts() {
      const products : Product[] = [];

      for (var i = 1; i<= 300; i++) {
        products.push({
          id: i,
          name: faker.commerce.productName(),
          details: faker.lorem.sentences(),
          price: faker.commerce.price(),
          img: "https://source.unsplash.com/1600x900/?product",
        });
      }

      return products;
    }
}