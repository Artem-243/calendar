import React,{useState} from "react";
import './ModelTask.css'
import MyButton from '../components/My-Button/MyButton';
import MyInput from "../components/MyInput/MuInput";

const CalendarTask = ({ active, setActive, day, month, onSwitchToTasks, tasks, setTasks }) => {
  const [title, setTitle] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
  
    const key = `${day} ${month}`;
    setTasks(prevTasks => ({
      ...prevTasks,
      [key]: [...(prevTasks[key] || []), title]
    }));
  
    setTitle(""); 
  };
  

  return (
    <div className={`modal-overlay ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Задачи на {day} {month}</h3>
          <button className="close-btn" onClick={() => setActive(false)}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form>
            <MyInput  
              type="text" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Задача на день"
            />
            <MyButton  type="button" onClick={addNewTask}>Создать</MyButton>

            <MyButton 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSwitchToTasks(e);
              }}

            >
              Задачи 
            </MyButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalendarTask;
