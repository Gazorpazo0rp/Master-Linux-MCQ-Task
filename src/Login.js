import React from 'react';
import {login} from './actions/examActions'
import {connect } from 'react-redux'
import { Redirect } from "react-router"
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            redirect:false,
        }
    }
    login(){
        let name=document.getElementById("name").value
        if(name===""){
            alert("You must enter your name to start the exam.")
            return
        }
        localStorage.setItem("name",name)
        this.setState({
            redirect:true
        })
    }
    render(){
        if (this.state.redirect===true) return <Redirect push to={'/exam'}></Redirect>
        return <Container fluid="sm" id="LoginPortal" >
            <Form>
                <h4>MCQ Exam Portal</h4><br></br>
                <Form.Group controlId="name">
                    <Form.Control type="email" placeholder="Enter name" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={()=>this.login()}>Submit</Button>
            </Form>
          </Container>

    }
}
const mapStateToProps = state =>({
    
})
export default connect(mapStateToProps,
    {login})(Login); 