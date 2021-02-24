import React from 'react';
import { ProductListCard ,RemoveButton } from './styles'
import ProductCart from '../../../../models/ProductCart';

type Prop = {
    cartItem: ProductCart;
    removeProduct: Function;
}

const CartItemComponent: React.FC<Prop> = (prop: Prop) => {
    return (
        <>
            <ProductListCard key={prop.cartItem.id}>
                <img src={prop.cartItem.image} alt="img cart" />
                <p>{prop.cartItem.name}</p>
                <div>
                    <button>-</button>
                    <input name="qtd" value={prop.cartItem.qtd} readOnly />
                    <button>+</button>
                </div>
                <strong>R${prop.cartItem.price}</strong>
                <RemoveButton onClick={() => prop.removeProduct(prop.cartItem.id)}>X</RemoveButton>
            </ProductListCard>
        </>
    );
}

export default CartItemComponent;