import { Product } from 'src/app/interface/interface';
// @ts-ignore TODO make strict mode compatible
import faker from "faker";

export default {
    getProduct(i: number) {
      const product =  {
        id_product: i,
        id_restaurant: i,
        name: faker.commerce.product(),
        details: faker.commerce.productDescription(),
        img: faker.image.food(),
      } as Product;
      

      return product;
    },
    getOffers(id_product : number) {
      const offers = [];
      const tags = [];
      for (var i = 1; i<= 3; i++) {
        tags.push(faker.commerce.productMaterial());
      }
     
      for (var i = 1; i<= 3; i++) {
      offers.push(
        {
          id_product: id_product,
          name: faker.commerce.product(),
          persons: faker.datatype.number({ min: 1, max: 10}),
          price: faker.datatype.number({ min: 100, max: 1000}),
          tags: tags,
        }
        );
      }
      return offers;
    } 
}