import './styles/App.css';
import Calendar from './components/Calendar/calendar.jsx';
import { useState } from "react";
import CalendarTask from "./Model/ModelTask.jsx";
import SecondModal from './Model/SecondModal.jsx';

function App() {
  const [firstModalActive, setFirstModalActive] = useState(false);
  const [secondModalActive, setSecondModalActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState({ day: null, month: null });
  const [tasks, setTasks] = useState({});

  const months = [
    { month: "January", days: 31, monthInNumber: 0},
    { month: "February", days: 28, monthInNumber: 1 },
    { month: "March", days: 31, monthInNumber: 2},
    { month: "April", days: 30, monthInNumber: 3 },
    { month: "May", days: 31, monthInNumber: 4 },
    { month: "June", days: 30, monthInNumber: 5 },
    { month: "July", days: 31, monthInNumber: 6 },
    { month: "August", days: 31, monthInNumber: 7 },
    { month: "September", days: 30, monthInNumber: 8 },
    { month: "October", days: 31, monthInNumber: 9 },
    { month: "November", days: 30, monthInNumber: 10 },
    { month: "December", days: 31, monthInNumber : 11},
  ];

  const handleDayClick = (day, month) => {
    setSelectedDate({ day, month });
    setFirstModalActive(true);
  };

  const switchToSecondModal = (e) => {
    e.stopPropagation(); 
    setSecondModalActive(true); 
  };

  return (
    <div className='App'>
      <CalendarTask 
        active={firstModalActive}
        setActive={setFirstModalActive}
        onSwitchToTasks={switchToSecondModal}
        day={selectedDate.day}
        month={selectedDate.month}
        setTasks={setTasks}
        tasks={tasks}
      />

      <SecondModal 
        active={secondModalActive} 
        tasks={tasks}
        setActive={setSecondModalActive}
        selectedDate={selectedDate}
      />

      <h1 style={{ textAlign: 'center' }}>Calendar</h1>
      <div className='calendar-container'>
        {months.map((item, index) => (
          <Calendar 
            key={index} 
            month={item.month} 
            days={item.days} 
            monthInNumber={item.monthInNumber}
            onDayClick={(day) => handleDayClick(day, item.month)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
