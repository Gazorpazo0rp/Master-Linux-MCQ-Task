import React from 'react'
import {solve} from './actions/examActions'
import {connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Question extends React.Component{
    constructor(props){
        super(props)
    }
    solveQuestion(answer){
        this.props.solve(this.props.currentQuestion,answer)
    }
    render(){
        return <Container className="questionContainer">
            <Row>
                <Col>
                    <h4 className="question">Q{this.props.currentQuestion+1}: {this.props.data['question']}</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6}>
                    <h6 onClick={()=>this.solveQuestion('A')} className={this.props.questions[this.props.currentQuestion]['answer']==='A'?"active":""}> A. {this.props.data['A']}</h6>
                </Col>
                <Col xs={12} lg={6}>
                    <h6 onClick={()=>this.solveQuestion('B')}className={this.props.questions[this.props.currentQuestion]['answer']==='B'?"active":""}> B. {this.props.data['B']}</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6}>
                <h6 onClick={()=>this.solveQuestion('C')} className={this.props.questions[this.props.currentQuestion]['answer']==='C'?"active":""}> C. {this.props.data['C']}</h6>
                </Col>
                <Col xs={12} lg={6}>
                <h6 onClick={()=>this.solveQuestion('D')} className={this.props.questions[this.props.currentQuestion]['answer']==='D'?"active":""}> D. {this.props.data['D']}</h6>
                </Col>
            </Row>
        </Container>
    }
}
const mapStateToProps = state =>({
    questions:state.exam.questions,
    currentQuestion:state.exam.currentQuestion,

})
export default connect(mapStateToProps,
    {solve})(Question); 