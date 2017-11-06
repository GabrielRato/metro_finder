
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



import {ListGroupItem,ListGroup, Form, FormControl, Button, MenuItem } from 'react-bootstrap';

//TO-DO refactor, is not even a single single bar here...
function Searchbar() {
    
    return(
        <div>
        <Form inline>
            <FormControl
                className = 'input-search'
            />
            <Button bsStyle = 'primary'> x </Button>
        </Form>
          <ListGroup>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
          </ListGroup>
        </div>
    )
}


ReactDOM.render(
    <Searchbar />,
    document.getElementById('root')
);
