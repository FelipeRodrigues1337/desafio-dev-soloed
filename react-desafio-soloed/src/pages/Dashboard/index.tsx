import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Header, DivLogo, DivButton, Row, Footer, Sidebar, SidebarContent, SidebarBox, Ul } from './styles'
import logoImg from '../../assets/logo.svg';
import cartImg from '../../assets/cart.svg';
import CardComponent from './components/cardComponent/CardComponent';
import Product from '../../models/Product'
import ProductCart from '../../models/ProductCart';
import CartItemComponent from './components/cartItemComponent/CartITemComponent';

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [displaySidebar, setdisplaySidebar] = useState('none');
    const [cart, setCart] = useState<ProductCart[]>([]);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        api.get('/products').then(response => {
            setProducts(response.data);
        })
    }, []);

    function addOnCart(id: string) {
        const product = products.find(product => product.id === id);

        if (product && totalValue === 0) {
            setTotalValue(product.price);
        }
        if (product) {
            const total = totalValue + product.price;
            setTotalValue(total);
        }
        if (product) {
            const pruductCart = {
                id: product.id,
                name: product.name,
                short_description: product.short_description,
                image: product.image,
                price: product.price,
                qtd: 1,
            }
            setCart([...cart, pruductCart]);
            console.log(product.price);
        }
    }

    function removeProduct(id: string) {
        const findProduct = cart.find(cartItem => cartItem.id === id);
        const newCart = cart.filter(cartItem => cartItem.id !== id);

        if (findProduct) {
            const total = totalValue - findProduct.price;
            setTotalValue(total);
        }

        setCart(newCart);
    }

    function sideBarAction() {
        if (displaySidebar === 'none') {
            setdisplaySidebar('block');
        } else {
            setdisplaySidebar('none');
        }
    }

    return (
        <>
            <Header>
                <DivLogo>
                    <img src={logoImg} alt="logo soloed_" />
                    <p>store</p>
                </DivLogo>
                <DivButton onClick={sideBarAction}>
                    <img src={cartImg} alt="logo soloed_" />
                    <p>0</p>
                </DivButton>
                <Sidebar style={{ display: displaySidebar }}>
                    <SidebarBox>
                        <SidebarContent>
                            <p>Carrinho de compras</p>
                            <button onClick={sideBarAction}>X</button>
                        </SidebarContent>
                        <Ul>
                            {cart.map(cartItem =>
                                <CartItemComponent key={cartItem.id} cartItem={cartItem} removeProduct={removeProduct}/>
                            )}
                        </Ul>
                        <SidebarContent>
                            <p>Total</p>
                            <p>{totalValue}</p>
                        </SidebarContent>

                    </SidebarBox>
                </Sidebar>
            </Header>
            <Row>
                {products.map(product =>
                    <CardComponent key={product.id} product={product} addOnCart={addOnCart} />
                )}
            </Row>
            <Footer><p>soloed_ © Todos os direitos reservados</p></Footer>
        </>
    );
}

export default Dashboard;