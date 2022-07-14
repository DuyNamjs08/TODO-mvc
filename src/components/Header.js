import React from "react";

function Header({ input, setTodo, addTodo, setAddtodo }) {
  const handleAddtodo = (e) => {
    
    if(e.keyCode === 13 && input !== ''){
      setAddtodo([
        ...addTodo,
        { id: Math.floor(Math.random() * 1000), title:input, completed: false },
      ]);
      setTodo('')
    } 
    const filterTitle=addTodo.filter(item =>{
      return item.title === input
    })
    if(filterTitle.length >=1){
      setAddtodo([...addTodo]);
      setTodo("");
      
    }
    // localStorage.setItem("TODOS", JSON.stringify(addTodo));
  };
  
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={input}
        onChange={(e) => setTodo(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleAddtodo}
      />
    </header>
  );
}

export default Header;
