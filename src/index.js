
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



import {ListGroupItem,ListGroup, Form, FormControl, Button, Grid, Row, Col } from 'react-bootstrap';

//TO-DO refactor, is not even a single single bar here...

function StationItem(props){
    return(
        <ListGroupItem id={props.id}>
            { props.value }
        </ListGroupItem>
    );

}

function LoadStations(props){
    var v = [1,2,3,4,5];
    return v;
}

class MainApp extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            //easier to keep childrens sync lift state up to father
            station: [],
        };
    }

    handleSubmit(e, vetor) {
        //Here we'll call an API
        var vetor = LoadStations(1);
        e.preventDefault();
        for (let i = 0; i < 5; i++) {
            const newItem={
                text: vetor[i],
                id: Date.now()
            };
            console.log(newItem);
            this.setState(prevState=> ({
                station: prevState.station.concat(newItem),
            }));
        }
    }

    handleClick(){
        alert('foi');
    }

    //Using setState redraw is giving for free
    //Remember react is all about smart state use
    handleClear(){
        this.setState({station: [] });
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit} inline>
                    <FormControl
                        className='input-search'
                    />
                    <Button bsStyle='primary' onClick={()=> this.handleSubmit(event) }> Ok </Button>
                    <Button bsStyle='primary' onClick={()=> this.handleClear()}> x </Button>
                </Form>
                <Grid className='items-station'>
                    <Row>
                        <Col className = 'station' sm = {6} md={4}>
                                <StationList stations={this.state.station} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

class StationList extends React.Component {
    render() {
        return(
            <ul>
            {this.props.stations.map(item=> (
                <StationItem key={item.id}
                    value = {item.text}
                    id = {item.id}
                />
            ))}
            </ul>
        );
    }
}

ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);
