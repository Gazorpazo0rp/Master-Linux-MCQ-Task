import {LOGIN,SOLVE,CHANGE_QUESTION,SUBMIT_EXAM,SHUFFLE_ARRAY} from './types'
export const login =(name)=> dispatch=>{
    dispatch({
        type:LOGIN,
        name:name
    })
}
export const solve =(questionId,answer)=> dispatch=>{
    dispatch({
        type:SOLVE,
        id:questionId,
        answer:answer
    })
}
export const changeQuestion =(offset)=> dispatch=>{
    dispatch({
        type:CHANGE_QUESTION,
        offset:offset
    })
}
export const submit  =()=> dispatch=>{
    dispatch({
        type:SUBMIT_EXAM,
    })
}
export const shuffle  =(questions)=> dispatch=>{
    dispatch({
        type:SHUFFLE_ARRAY,
    })
}

