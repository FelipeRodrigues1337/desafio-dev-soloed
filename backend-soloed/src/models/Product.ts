class Product {
  id: string;
  name: string;
  short_description: string;
  image: string;
  price: number;

  constructor(id: string, name: string, short_description: string, image: string, price: number) {
    this.id = id //Estou passando um ID como string apenas para simular, em outro caso eu utilizaria um uuid.
    this.name = name;
    this.short_description = short_description;
    this.image = image;
    this.price = price;
  }
}

export default Product;