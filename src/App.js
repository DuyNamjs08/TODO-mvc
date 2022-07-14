
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer'
import {useState} from 'react'

function App() {
  const initStoreage = JSON.parse(localStorage.getItem('TODOS')) || []
  console.log(initStoreage);
  const [input , setTodo]=useState('')
  const [addTodo, setAddtodo] = useState([]);
  return (
    <section className="todoapp">
      <Header input={input} setTodo={setTodo}
       addTodo={addTodo} setAddtodo={setAddtodo} />
      <TodoList addTodo={addTodo} />
      <Footer />
    </section>
  );
}

export default App;
