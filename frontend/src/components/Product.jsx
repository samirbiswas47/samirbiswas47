import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';
const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`product/${product._id}`}>
                <Card.Img src={product.image } varient='top' />
            </Link>
            <Card.Body as='div'>
                <Card.Title as='div'>
                <Link to={`product/${product._id}`}><strong>{product.name}</strong></Link>
                </Card.Title>
                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${ product.numReviews } review`} />
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Product