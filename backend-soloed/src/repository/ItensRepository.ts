import Product from '../models/Product';
import {mockProducts} from '../data/stock';

class ProductsRepository {
    private products: Product[];

    constructor() {
        this.products = mockProducts.products;
    }

    public get() {
        return this.products;
    }
}

export default ProductsRepository;