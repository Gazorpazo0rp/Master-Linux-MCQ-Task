import React from 'react'
import Question from './Question.js'
import {connect } from 'react-redux'
import {changeQuestion,submit} from './actions/examActions'
import Button from 'react-bootstrap/Button'
class Exam extends React.Component{
    constructor(props){
        super(props)
        this.state={
            score:0
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(this.props.questions===undefined){
            if(nextProps.questions !==undefined){
                this.questions= this.nextprops.questions
            }
        }
        if(nextProps.showResults!==undefined){
            if(nextProps.showResults===true){
                this.calcScore()
            }
        }
    }
    shuffleArray(array) {
        console.log("shuffle")
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    calcScore(){
        var score=0
        this.props.questions.map(
            (question,i) =>{
                if(question['answer']===question['correctAnswer']){
                    score+=1
                }
            }
        )
        console.log(score)
        this.setState({
            score:score
        })
    }
    changeQuestion(offset){
        this.props.changeQuestion(offset)
    }
    submit(){
        this.props.submit()
    }
    render(){
        return <div id="examContainer">
            {this.props.showResults!==true?
            <div className="wrapper">
                <Question data={this.props.questions[this.props.currentQuestion]}></Question>
                <div className="examControls">
                    <Button onClick={()=>this.changeQuestion(-1)} disabled={this.props.currentQuestion===0? true:false}>prev</Button>
                    {this.props.currentQuestion===4 ?
                    <Button onClick={()=>{this.submit()}} variant="success" >Submit</Button>
                    :""
                    }
                    <Button onClick={()=>this.changeQuestion(1)}disabled={this.props.currentQuestion===4}>next</Button>
                </div>
            </div>
            :<div className="score">
                <h4>Hi {localStorage.getItem("name")}!</h4>
                <h4> You scored: {this.state.score}</h4>
                <a href="/exam"><Button variant="info">Retake Test</Button></a>
            </div>
            }
        </div>
    }
}
const mapStateToProps = state =>({
    questions:state.exam.questions,
    currentQuestion:state.exam.currentQuestion,
    showResults:state.exam.showResults,
})
export default connect(mapStateToProps,
    {changeQuestion,submit})(Exam); 