export interface Product {
    id: number;
    name: string;
    details: string;
    offers: Offer[];
    img?: string;
    ingredients?: string[]; 
}
export interface Offer {
    id: number;
    name: string;
    persons: string;
    price: number;
}