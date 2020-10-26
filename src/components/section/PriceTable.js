import React from 'react';

import {Card, ListGroup,} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from '@material-ui/core/Button';


export default function PriceTable() {
    return(
        <div className='container'>
        <h2 className='fontHead text-center my-2'>Price Table</h2>
            <div className='row my-2'>
                <div className='col-md-4 my-3' >
                <Card style={{ width: '18rem' }} className='mx-auto shadow'>
                <Card.Header className='text-center'>Basic</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item> <FontAwesomeIcon icon={faCheck} color='green' /> <strong>$25</strong>/month</ListGroup.Item>
                    <ListGroup.Item><FontAwesomeIcon icon={faTimes} color='red' /> Unlimited Archives</ListGroup.Item>
                    <ListGroup.Item><FontAwesomeIcon icon={faTimes} color='red' /> Email Support</ListGroup.Item>
                    <ListGroup.Item><FontAwesomeIcon icon={faCheck} color='green' /> Storage of 300Mb</ListGroup.Item>
                    <ListGroup.Item><FontAwesomeIcon icon={faTimes} color='red' /> Suggestion</ListGroup.Item>
                </ListGroup>
                <Button variant="contained" color="primary">
                   Buy Now
                </Button>
                </Card>
                </div>

                <div className='col-md-4 my-3' >
                    <Card style={{ width: '18rem' }} className='mx-auto shadow'>
                        <Card.Header className='text-center'>Premium</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item> <FontAwesomeIcon icon={faCheck} color='green' /> <strong>$50</strong>/month</ListGroup.Item>
                            <ListGroup.Item><FontAwesomeIcon icon={faTimes} color='red' /> Unlimited Archives</ListGroup.Item>
                            <ListGroup.Item><FontAwesomeIcon icon={faCheck} color='green' /> Email Support</ListGroup.Item>
                            <ListGroup.Item><FontAwesomeIcon icon={faCheck} color='green' /> Storage of 700Mb</ListGroup.Item>
                            <ListGroup.Item><FontAwesomeIcon icon={faTimes} color='red' /> Suggestion</ListGroup.Item>
                        </ListGroup>
                        <Button variant="contained" color="primary">
                        Buy Now
                        </Button>
                    </Card>
                </div>

                <div className='col-md-4 my-3'>
                    <Card style={{ width: '18rem' }} className='mx-auto shadow'>
                    <Card.Header className='text-center'>Gold</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item> <FontAwesomeIcon icon={faCheck} color='green' /> <strong>$75</strong>/month</ListGroup.Item>
                            <ListGroup.Item><FontAwesomeIcon icon={faCheck} color='green' /> Unlimited Archives</ListGroup.Item>
                            <ListGroup.Item><FontAwesomeIcon icon={faCheck} color='green' /> Email Support</ListGroup.Item>
                            <ListGroup.Item><FontAwesomeIcon icon={faCheck} color='green' /> Storage of 1Gb</ListGroup.Item>
                            <ListGroup.Item><FontAwesomeIcon icon={faCheck} color='green' /> Suggestion</ListGroup.Item>
                        </ListGroup>
                        <Button variant="contained" color="primary">
                        Buy Now
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}