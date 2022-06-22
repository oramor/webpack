import { Category } from './Category';

export interface Product {
    name: string;
    price: number;
    currency: 'USD' | 'RUB';
    category: Category | Category[];
}
