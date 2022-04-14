import {Cart} from "../../../../interface/interface";


export default {

  getCart(id_cart: number) {
    const cart = {} as Cart;
    cart.id_cart = id_cart;
    for (var i = 1; i<= 3; i++) {
      cart.command.push({
        id_product: i,
        quantity: i,
        id_offer: i
      });
    }

    return cart;
  }
}
