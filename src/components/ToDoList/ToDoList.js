import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import InputText from '../TextInput'
import List from '../List';


const Container = styled.div`
    position: relative;
    margin: 50px auto;
    overflow: auto;
    width: 25%;
    min-height: 250px;
    background-color: rgb(255, 255, 255);
    box-shadow: 5px 5px 15px #00000047;
    border-radius: 10px;
    padding: 40px 25px 40px 25px;
    @media (max-width: 1200px) {
        width: 40%
    };
    @media screen and (max-width: 600px){
        margin: 0 0;
        overflow: auto;
        width: 85%;
        margin: auto;
    }
`

const InputForm = styled.form`
    display: flex;
    margin-bottom: 25px;
    & > :first-child{
        margin-right: 6px;
    }
`

export default class ToDoListContainer extends Component {

    state = {
        toDoItems: [],
        inputText: '',
        submitDisabled: true
    }

    addToDo = (text) => {
        const key = Math.floor((Math.random() * 10000)).toString();
        this.setState({toDoItems: [{text, key}, ...this.state.toDoItems], submitDisabled: true});
    }

    delToDo = (id) => {
        this.setState({toDoItems: this.state.toDoItems.filter(todo => todo.key !== id)})
    }

    updateInput = (event) => {
        let text = event.target.value.replace(/\s/g,'');
        this.setState({inputText: event.target.value})
        if (text) {
            this.setState({submitDisabled: false})
        } else {
            this.setState({submitDisabled: true})
        }
    }

    handleSubmit= (event) =>{
        event.preventDefault();
        this.addToDo(this.state.inputText);
        this.setState({inputText: ''});
    }

    render() {
        return (
            <Container>
                <InputForm onSubmit={this.handleSubmit}>
                    <InputText value ={this.state.inputText} onChange={this.updateInput} />
                    <Button disabled={this.state.submitDisabled} type="submit">Add</Button>
                </InputForm>
                <List items={this.state.toDoItems} removeItem={this.delToDo} />
            </Container>
        )
    }
}