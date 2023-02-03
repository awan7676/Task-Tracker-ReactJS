import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [buttonText, setButtonText] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();

  }, []);

  //Fetch Tasks from JSON server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    setShowAddTasks(!showAddTasks);
    setButtonText(!buttonText);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id) => {
    const targetTask = await fetchTask(id);
    const updatedTask = { ...targetTask, reminder: !targetTask.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
  }

  const toggleForm = () => {
    setButtonText(!buttonText);
    setShowAddTasks(!showAddTasks);
  }

  return (
    <Router>
      <div className="App">
        <Header onToggle={toggleForm} btnText={buttonText} />
        <Routes>
          <Route exact path='/' element={[
            showAddTasks && <AddTask onAdd={addTask} />,
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ]
          }></Route>
          <Route exact path='/about' element={< About />}></Route>

        </Routes>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
