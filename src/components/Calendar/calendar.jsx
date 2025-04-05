import React from "react";
import './calendar.css'

const Calendar = ({ month, days, onDayClick, monthInNumber }) => {
    const firstDayIndex = new Date(2025, monthInNumber, 1).getDay();
    const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1; // Пн=0, Вс=6

    return (
        <div className="calendar">
            <div className="calendar-month">
                <strong>{month}</strong>
                <div className="calendar-weekdays">
                    <div>Пн</div>
                    <div>Вт</div>
                    <div>Ср</div>
                    <div>Чт</div>
                    <div>Пт</div>
                    <div>Сб</div>
                    <div>Вс</div>
                </div>
                <div className="calendar-numbers">
                    {Array.from({ length: startOffset }).map((_, i) => (
                        <div key={`empty-${i}`} className="calendar-empty-day"></div>
                    ))}
                    
                    {Array.from({ length: days }, (_, i) => (
                        <button 
                            key={i + 1}
                            className="calendar-day"
                            onClick={() => onDayClick(i + 1, month)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar