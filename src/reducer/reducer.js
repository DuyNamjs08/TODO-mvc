const initState={
    setTdodo: '',
    addTodo:[
        {id:1 , name : 'Nam'},
        {id:2 , name : 'Dũng'},
        {id:3 , name : 'Thành'},
    ]
}

function Reducer(state = initState, action) {
    switch(action.type){
        case 'ADD_TODO':
            return state
        default:
            return state
    }
}

export default Reducer;