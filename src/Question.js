import React from 'react'
import {solve} from './actions/examActions'
import {connect } from 'react-redux'

class Question extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.data)
    }
    solveQuestion(answer){
        this.props.solve(this.props.data['id'],answer)
    }
    render(){
        return <div className="questionContainer">
            <h2>{this.props.data['question']}</h2>
            <h4 onClick={()=>this.solveQuestion('A')}> A. {this.props.data['A']}</h4>
            <h4 onClick={()=>this.solveQuestion('B')}> B. {this.props.data['B']}</h4>
            <h4 onClick={()=>this.solveQuestion('C')}> C. {this.props.data['C']}</h4>
            <h4 onClick={()=>this.solveQuestion('D')}> D. {this.props.data['D']}</h4>
        </div>
    }
}
const mapStateToProps = state =>({

})
export default connect(mapStateToProps,
    {solve})(Question); 