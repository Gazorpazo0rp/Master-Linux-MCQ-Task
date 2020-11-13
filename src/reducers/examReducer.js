
const initialState={
    loggedIn:false,
    name:"",
    currentQuestion:0,
    questions:[{
        "id":0,
        "question":"question1",
        "A":'A choice',
        "B":'B choice',
        "C":'C',
        "D":'D',
        "answer":'',
        "correctAnswer":'B'
    },{
        "id":1,
        "question":"question2",
        "A":'A',
        "B":'B',
        "C":'C',
        "D":'D',
        "answer":'',
        "correctAnswer":'A'
    },
    {
        "id":2,
        "question":"question3",
        "A":'A',
        "B":'B',
        "C":'C',
        "D":'D',
        "answer":'',
        "correctAnswer":'A'
    },
    {
        "id":3,
        "question":"question4",
        "A":'A',
        "B":'B',
        "C":'C',
        "D":'D',
        "answer":'',
        "correctAnswer":'A'
    },
    {
        "id":4,
        "question":"question5",
        "A":'A',
        "B":'B',
        "C":'C',
        "D":'D',
        "answer":'',
        "correctAnswer":'A'
    }],
    showResults:false
}

export default function(state=initialState,action){
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                loggedIn:true,
                name:action.name
            };
        case 'SOLVE':
        return {
            ...state,
            questions:state.questions.map(
                (question,i) =>i=== action.id?{ ...question,answer:action.answer} : question
                
            )
            
        };
        case 'CHANGE_QUESTION':
            return {
                ...state,
                currentQuestion:state.currentQuestion + action.offset
                
            };
        case 'SUBMIT_EXAM':
            return {
                ...state,
                showResults:true
                
            };
        case 'SHUFFLE_ARRAY':
            return {
                ...state,
                questions:action.questions
            }
        default:
            return state;
    }
}