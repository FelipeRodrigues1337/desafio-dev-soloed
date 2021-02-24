import React from 'react';
import { Card, CardHeader, CardBtn, ItemTitle, PriceBox, ItemInfo, Description } from './styles'
import Product from '../../../../models/Product'

type Prop = {
    product: Product;
    addOnCart: Function;
}

const CardComponent: React.FC<Prop> = (prop: Prop) => {
    return (
        <>
            <div>
                <Card>
                    <CardHeader><img src={prop.product.image}></img></CardHeader>
                    <ItemInfo>
                        <ItemTitle>{prop.product.name}</ItemTitle>
                        <PriceBox><p>${prop.product.price}</p></PriceBox>
                    </ItemInfo>
                    <Description>{prop.product.short_description}</Description>
                    <CardBtn onClick={() => prop.addOnCart(prop.product.id)}><p>COMPRAR</p></CardBtn>
                </Card>
            </div>
        </>
    );
}

export default CardComponent;