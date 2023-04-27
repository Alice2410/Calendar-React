import styled from 'styled-components';
import { WeekdayWrapper } from './Weekdays';
import { RowWrapper } from './RowWrapper';
import { getWeekDates } from '../helpers/getWeekDates';

interface DateProps {
  current: boolean;
}

const Date = styled.p<DateProps>`
  font-family: Roboto;
  margin: 0;
  padding: 2px;
  display: flex;
  align-items: center;
  border: ${props => props.current ? "1px solid red" : "none"};
  border-radius: 50%;
  background-color: ${props => props.current ? "red" : "transparent"};
  color: ${props => props.current ? "white" : "black"}
`;

export const Dates = () => {
  const dates = getWeekDates(25);

  return(
    <RowWrapper>
      {dates.map((date) => {
        return(
          <WeekdayWrapper key={date}>
            <Date current={date === 29}>{date}</Date>
          </WeekdayWrapper>
      )})}
    </RowWrapper>
  )
}