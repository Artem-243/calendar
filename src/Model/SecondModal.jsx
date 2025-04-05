import React from "react";
import './SecondModal.css';
import MyButton from "../components/My-Button/MyButton";

const SecondModal = ({ active, setActive, tasks, selectedDate }) => {
  const taskList = tasks[`${selectedDate.day} ${selectedDate.month}`] || [];

  return (
    <div className={`modal-overlay-second ${active ? 'active-second' : ''}`} onClick={() => setActive(false)}>
      <div className="modal-content-second" onClick={e => e.stopPropagation()}>
        <h2>Задачи на {selectedDate.day} {selectedDate.month}</h2>
        <div className="modal-task-second">
        <ul>
          {taskList.length > 0 ? (
            taskList.map((task, index) => <li key={index}>{task}</li>)
          ) : (
            <p>Нет задач</p>
          )}
        </ul>
        </div>
        <MyButton onClick={() => setActive(false)}>Закрыть</MyButton>
      </div>
    </div>
  );
};

export default SecondModal;
