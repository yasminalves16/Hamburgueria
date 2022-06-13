import './style.css'

const Product = ({ produto, handleClick, children }) => {

    const { img, name, category, price, id } = produto

    return (
        <div className={children === 'Adicionar' ? 'card' : 'cardCarrinho'}>
            <figure><img src={img} alt={name} /></figure>
            <div>
                <p className='name'>{name}</p>
                <p className='categoria'>{category}</p>
            </div>
            <p className='preco'>R$ {price.toFixed(2)}</p>

            <button onClick={() => handleClick(id)}>{children}</button>
        </div>
    )
}

export default Product
