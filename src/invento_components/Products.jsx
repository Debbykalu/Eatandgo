
import { useContext } from 'react'
import  ProductContext  from '../context/ProductContext'
//To consume what is inside context, 
// we need to use the useContext hook.
const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  return (
    <div className="row products text-center">
  <div className="col-md-6 offset-md-3">
    <h3>Products Inventory </h3>
  </div>
  <div className="col-md-8 offset-md-2">
    <table className="table">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        products && products.length > 0 && products.map((pro) => {
          return (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.name}</td>
              <td>{pro.quantity}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={function(){
                  const newProducts = products.filter((p) => p.id !== pro.id);
                  setProducts(newProducts);
                }}>Delete</button>
              </td>
            </tr>
          )

        }) 
       }
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Products