
const initialState={
    loggedIn:false,
    currentQuestion:0,
    questions:shuffleArray([{
        "id":0,
        "question":"What is the color of the sea?",
        "A":'Red',
        "B":'Blue',
        "C":'Green',
        "D":'Black',
        "answer":'',
        "correctAnswer":'B'
    },{
        "id":1,
        "question":"Select the largest number from the numbers listed below.",
        "A":'11',
        "B":'7',
        "C":'9',
        "D":'10',
        "answer":'',
        "correctAnswer":'A'
    },
    {
        "id":2,
        "question":"How did Spider-Man get his powers?",
        "A":'Military experiment gone awry',
        "B":'Born with them',
        "C":'Woke up with them after a strange dream',
        "D":'Bitten by a radioactive spider',
        "answer":'',
        "correctAnswer":'D'
    },
    {
        "id":3,
        "question":"What is the country that suffered the most death toll due to COVID-19?",
        "A":'USA',
        "B":'Italy',
        "C":'Spain',
        "D":'Brazil',
        "answer":'',
        "correctAnswer":'A'
    },
    {
        "id":4,
        "question":"What is the most important skill in a computer engineer?",
        "A":'Problem solving',
        "B":'Critical thinking',
        "C":'Constantly up to date with new technologies',
        "D":'All of the above',
        "answer":'',
        "correctAnswer":'D'
    }]),
    showResults:false
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
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
                questions:shuffleArray(state.questions)
            }
        default:
            return state;
    }
}