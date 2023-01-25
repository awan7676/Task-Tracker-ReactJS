import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [buttonText, setButtonText] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      date: "Friday - 27/01/2023",
      reminder: false
    },
    {
      id: 2,
      text: "Task 2",
      date: "Today 6pm",
      reminder: false
    },
    {
      id: 3,
      text: "Task 3",
      date: "Today 5pm",
      reminder: false
    }

  ]
  );

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);

    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
    setShowAddTasks(!showAddTasks);
    setButtonText(!buttonText);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
    console.log(id);
  }

  const toggleForm = () => {
    setButtonText(!buttonText);
    setShowAddTasks(!showAddTasks);
  }

  return (
    <div className="App">
      <Header onToggle={toggleForm} btnText={buttonText} />
      {showAddTasks && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
