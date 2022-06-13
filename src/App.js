import { useState, useEffect } from "react";

import "./App.css";

import ProductsList from "./components/ProductsList";
import fotoLogo from "./components/imgs/logo.svg";
import Header from "./components/Header";
import CartList from "./components/CartList";

const App = () => {
    
    const [products, setProducts] = useState([]);

    const [currentSale, setCurrentSale] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    const [input, setInput] = useState("");

  
    useEffect(() => {

        const fetchResponse = async () => {
            const response = await fetch(
                "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
            );

            const jsonResponse = await response.json();

            setProducts(jsonResponse);
            setFilteredProducts(jsonResponse);
        };

        fetchResponse();
    }, []);

    const showProducts = () => {
        const filtraPesquisa = products.filter((item) => {

            return (
                item.name.toUpperCase().includes(input.toUpperCase()) ||
                item.category.toUpperCase().includes(input.toUpperCase())
            );
        });
        setFilteredProducts(filtraPesquisa);
    };

    const handleClick = (id) => {
        const findProduct = products.find((product) => product.id === id);
        const checkFindProduct = currentSale.find(
            (cartProduct) => cartProduct.id === id
        );

        !checkFindProduct && setCurrentSale([...currentSale, findProduct]);
    };

    const handleClickRemove = (id) => {
        const newCurrentSale = currentSale.filter((item) => item.id !== id);

        setCurrentSale(newCurrentSale);
    };

    const removeAllItems = () => {
        setCurrentSale([]);
    };

    return (
        <>
            <Header
                fotoLogo={fotoLogo}
                setInput={setInput}
                showProducts={showProducts}
            />

            <main>
                <section className="vitrine">
                    <ProductsList
                        products={filteredProducts}
                        handleClick={handleClick}
                        children={"Adicionar"}
                    />
                </section>

                <section className="carrinho">
                    {currentSale.length >= 1 ? (
                        <CartList
                            currentSale={currentSale}
                            handleClickRemove={handleClickRemove}
                            removeAllItems={removeAllItems}
                        />
                    ) : (
                        <div className="divCarrinho">
                            <h2>Carrinho de Compras</h2>
                            <p>Sua Sacola Esta Vazia</p>
                            <span>Adicione Itens</span>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}

export default App;
