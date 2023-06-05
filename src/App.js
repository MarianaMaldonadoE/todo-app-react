//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component{
  constructor(props) {
    super(props);

    //Setting state
    this.state = {
      userInput: "",
      list: [],
    };
  }

  //Set user input value
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  //Add item if user input is not empty
  addItem(){
    if (this.state.userInput !== ""){
      const userInput = {
        //Add random id to delete
        id: Math.random(),

        //Add a user value to list
        value: this.state.userInput,
      };

      //Update list
      const list = [...this.state.list];
      list.push(userInput);

      //Reset state
      this.setState({
        list,
        userInput: "",
      });
    }
  }

  //Function to delete item from list using id
  deleteItem(key) {
    const list = [...this.state.list];

    //Filter values and leave value which are needed to delete
    const updateList = list.filter((item) => item.id !== key);

    //Update list in state
    this.setState({
      list:updateList,
    });
  }

  render() {
    return (
      <Container>
        <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
        >
          TODO LIST
        </Row>
        <hr></hr>
        <Row>
          <Col md={{ span: 5, offset:4 }}>
            <InputGroup classname="mb-3">
              <FormControl placeholder="Add item..."
              size="lg"
              value={this.state.userInput}
              onChange={(item) => 
                  this.updateInput(item.target.value)}
              aria-label="Add something"
              aria-describedby="basic-addon2"
               />
               <InputGroup>
               <Button 
               variant="dark"
               className="mt-2"
               onClick={() => this.addItem()}
               >
                  ADD
               </Button>
               </InputGroup>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 5, offset: 4}}>
              <ListGroup>
                {this.state.list.map((item) => {
                  return (
                    <ListGroup.Item
                      variant="dark"
                      action
                      onClick={() => this.deleteItem(item.id)}>
                        {item.value}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
