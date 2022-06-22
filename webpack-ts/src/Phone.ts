import { Product } from './resources/Product';
import { phonesCategory } from './resources/Category';

const phoneProduct: Product = {
    name: 'Phone',
    price: 500,
    currency: 'USD',
    category: phonesCategory,
};

console.log(phoneProduct);
