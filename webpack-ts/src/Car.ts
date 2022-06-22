import { Product } from './resources/Product';
import { carsCategory } from './resources/Category';

const carProduct: Product = {
    name: 'Phone',
    price: 50000,
    currency: 'USD',
    category: carsCategory,
};

console.log(carProduct);
