export interface Product {
    id_product: number;
    id_restaurant: number; 
    name: string;
    details: string;
    img?: string;
    ingredients?: string[];
}
export interface Offer {
    id_product: number;
    name: string;
    persons: string;
    price: number;
    tags?: string[];
}

export interface Command{
    id_command: number;
    id_cart: number;
    id_client: number;
    delivery_address: Address;
    state: State; 
    id_deliverer?:number;
}

export interface Address {
    id_delivery_address: number;
    id_client: number;
    city: string;
    details: string;
}

export interface State {
    id_state: number;
    name: string;
}

export interface Cart {
    id_cart: number;
    command: CartItems[];
    total: number;
}

export interface CartItems {
    id_product: number;
    quantity?: number;
}

export interface Restaurant {
    id_restaurant: number;
    name: string;
}