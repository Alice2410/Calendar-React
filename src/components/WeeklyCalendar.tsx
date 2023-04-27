import styled from 'styled-components';
import { Dates } from './Dates';
import { Month } from './Month';
import { Weekdays } from './Weekdays';

const WeekCalendarWrapper = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  padding: 5px;
  padding-left: min(12%, 60px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WeeklyCalendar = () => {
  return(
    <WeekCalendarWrapper>
        <Weekdays />
        <Dates />
        <Month />
    </WeekCalendarWrapper>
  )
};

export default WeeklyCalendar;