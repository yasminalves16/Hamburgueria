
const Cart = ({ currentSale }) => {

    const ValorTotal = () => {

        return (
            currentSale.reduce((acumulador, valorAtual) =>
                (acumulador + Number(valorAtual.price)), 0)
        )
    }


    return (
        <div className='total'>
            <p>Total</p>
            <span>$ {ValorTotal().toFixed(2)}</span>
        </div>
    )


}

export default Cart

