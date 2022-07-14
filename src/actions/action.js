export const setTodo = (action) => {
    return {
        type: "SET_TODO",
        payload: action,
    };
};

export const Addnew = (action) => {
    return {
      type: "ADD_TODO",
      payload: action,
    };
}