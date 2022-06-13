import ProductsList from "../ProductsList";
import Cart from "../Cart";

const CartList = ({ currentSale, handleClickRemove, removeAllItems }) => {

    return (
        <div className="divProduct">
            <h2>Carrinho de Compras</h2>
            <ProductsList
                products={currentSale}
                handleClick={handleClickRemove}
                children={"excluir"}
            />
            {currentSale.length > 0 && <Cart currentSale={currentSale} />}
            <button className="deleteAll" onClick={removeAllItems}>
                Remover Todos
            </button>
        </div>
    );
};

export default CartList;
