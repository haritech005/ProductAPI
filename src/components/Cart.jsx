import {useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'
import { remove } from "../store/cartSlice";

const Cart = () => {
    const productCart = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    const removeToCart = (product) =>{
        // Dispatch the add action 
        dispatch(remove(product))
    }
    const cards = productCart.map(product =>(
        
        <div className="col-md-12" style={{marginBottom:"10px"}} key={product.id}>
            <Card  className="h-100">
        <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         INR : {product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:"white"}}>
      <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
      </Card.Footer>
    </Card>
        </div>
    ))

    

  return (
    <>
    <div className="row">
    {cards}
    </div>
    </>
  )
}

export default Cart