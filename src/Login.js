import React from 'react';
import {login} from './actions/examActions'
import {connect } from 'react-redux'
import { Redirect } from "react-router";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            redirect:false,
        }
    }
    login(){
        let name=document.getElementById("name").value
        this.props.login(name)
        this.setState({
            redirect:true
        })
    }
    render(){
        if (this.state.redirect===true) return <Redirect push to={'/exam'}></Redirect>
        return <div className="Login">
          <input id="name"type="text" placeholder="Name" />
          <button onClick={()=>this.login()}>Submit</button>
        </div>
    }
}
const mapStateToProps = state =>({
    
})
export default connect(mapStateToProps,
    {login})(Login); 