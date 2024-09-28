import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch,useSelector} from 'react-redux'
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {

    // const [products,getProducts] = useState([])
    const dispatch = useDispatch()
    const {data : products} = useSelector(state => state.products)

    useEffect(() =>{
        // Dispatch Action for getProducts
        dispatch(getProducts());
    //   fetch('https://fakestoreapi.com/products')
    //   .then(data => data.json())
    //   .then(result => getProducts(result))
    
    });

    const addtoCart = (product) =>{
        // Dispatch the add action 
        dispatch(add(product))
    }

    const cards = Array.iscArray(products) ? products.map(product =>(
        
        <div className="col-md-3" style={{marginBottom:"10px"}} key={product.id}>
            <Card style={{ width: '18rem' }}  className="h-100">
      <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         INR : {product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:"white"}}>
      <Button variant="primary" onClick={() => addtoCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
        </div>
    )) : <p>Loading Products...</p>

  return (
    <>
    <h3>Product Dashboard</h3>
    <div className="row">
        {cards}
    </div>
    </>
  )
}

export default Product