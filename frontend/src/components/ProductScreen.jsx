import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'
import Rating from '../components/Rating'
import {listProductsDetails} from '../actions/productActions'

import {Row, Col, ListGroup, Button, Image, Card, Form} from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading , error, product}=productDetails
    useEffect(() => {
        dispatch(listProductsDetails(match.params.id))
    }, [dispatch, match])
    
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    return (
        <>
            <Link className="btn-light" to='/'>Back</Link>
            {loading ? <Loader /> : error ? <Message varient='danger'>{error}</Message> : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={ product.name} fluid/>
                    </Col>
                    <Col md={3}>
                        <ListGroup varient='flush'>
                            <ListGroup.Item>
                                <h3>{ product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${ product.numReviews } review`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price</Col>
                                        <Col>${product.price}</Col>
                                    </Row>
                                </ListGroup.Item>
                                { product.countInStock > 0  && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>QTY</Col>
                                            <Col>
                                                <Form.Control as='select' value={qty} onChange={(e) =>
                                                    setQty(e.target.value)}>
                                                    { [...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={ x + 1}>{ x + 1}</option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status</Col>
                                        <Col>
                                            { product.countInStock === 0 ? 'Out of Stock' :'In Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className="btn-dark"  disabled={ product.countInStock === 0} onClick={addToCartHandler} >Add to Cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>  
            )}
            
        </>
    )
}
export default ProductScreen;