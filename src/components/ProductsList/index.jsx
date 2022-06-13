import Product from '../Product'
import './style.css'

const ProductsList = ({ products, handleClick, children }) => {

   return (

      <div className={children === 'Adicionar' ? 'product-list' : 'product-carrinho'}>

         {products.map((produto) => (
            <Product key={produto.id} produto={produto} handleClick={handleClick} children={children} />
         ))}

      </div>
   )
}

export default ProductsList


