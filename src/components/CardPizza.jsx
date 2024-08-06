import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardPizza(props) {
  return (
    <Card style={{ width: '20rem', padding:'10px'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>Pizza : {props.name}</Card.Title>
        <Card.Text>
          <p>Ingredientes :</p> <a>{props.ingredients}</a>
        </Card.Text>
        <div className='precio'>
        <Card.Title className="CardTitle1">Precio : ${props.price}</Card.Title>
        <div className="d-flex justify-content-between"> 
        <Button variant="secondary">Ver mas &#x1F440;</Button>
        <Button variant="primary">Añadir &#x1F6D2;</Button>
        </div>
        </div>

      </Card.Body>
    </Card>
  )
}