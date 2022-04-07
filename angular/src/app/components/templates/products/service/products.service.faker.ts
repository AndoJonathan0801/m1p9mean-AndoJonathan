import { Offer, Product } from 'src/app/interface/interface';
// @ts-ignore TODO make strict mode compatible
import faker from "faker";

export default {
    getProducts() {
      const products : Product[] = [];
      const offers : Offer[] = [];
      for (var i = 1; i<= 12; i++) {
        products.push({
          id_product: i,
          id_restaurant: i,
          name: faker.commerce.product(),
          details: faker.commerce.productDescription(),
          img: faker.image.food(),
        });
      }

      return products;
    }
}