import { useContext } from 'react';
import styled from 'styled-components';
import { CalendarContext } from '../context/CalendarContext';
import { getWeekDates } from '../helpers/getWeekDates';

interface CellProps {
  isEvent: boolean
}

const CalendarRow = styled.div`
  width: 100%;
  height: 8%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(8, 1fr);
`;

const TimeCell = styled.div`
  width: min(12vw, 60px);
  position: relative;
`;

const TimeStamp = styled.p`
  font-family: Roboto;
  font-size: min(3vw, 15px);
  color: #8c8484;
  position: absolute;
  margin: 0;
  bottom: 0;
  right: 3px;
  transform: translateY(50%);
`;

const CalendarWrapper = styled.div`
  height: 400px;
  overflow-y: auto;
`;

const CalendarCell = styled.div<CellProps>`
  border: 1px solid #dcdada;
  border-top: none;
  border-left: none;
  background-color: ${props => props.isEvent ? "#b3b7ff" : "transparent"};
  opacity: 0.5;

  &:focus{
    opacity: ${props => props.isEvent ? "1" : "0.5"};
  }
`;

export const Calendar = () => {
  const days = getWeekDates(25);
  const {isEventOnDate} = useContext(CalendarContext);

  function getFormattedHour(hour: number) {
    return hour < 10 ? `0${hour}` : `${hour}`
  }

  function getCalendarCellId (date: number, hour: number) {
    const formattedHour = getFormattedHour(hour);
    const id = `2019-03-${date} ${formattedHour}:00:00`;

    return id;
  }

  function getTimestamp (hour: number) {
    const formattedHour = getFormattedHour(hour);
    const timeStamp = `${formattedHour}:00`;

    return timeStamp;
  }

  function getCalendarRows() {
    const rows = [];

    for (let hour = 1; hour <= 24; hour++) {
      const timeStamp = getTimestamp(hour);

      rows.push(
      <CalendarRow key={timeStamp}>
        <TimeCell>
          <TimeStamp>{timeStamp}</TimeStamp>
        </TimeCell>

        {days.map((date) => {
          const id = getCalendarCellId(date, hour-1);
          
          return(
            <CalendarCell key={id} data-id={id} date-has-content="false" isEvent={isEventOnDate(id)} tabIndex={0} />
          )
        })}
      </CalendarRow>)
    }
        
    return rows;
  }

  return(
    <CalendarWrapper >
      {getCalendarRows()}
    </CalendarWrapper>
  )
}