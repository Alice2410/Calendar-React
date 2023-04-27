import styled from 'styled-components';
import { RowWrapper } from './RowWrapper';

const Weekday = styled.p`
  font-family: Roboto;
  margin: 0;
  padding: 0;
  font-size: min(2.7vw, 10px);
  font-weight: bold;
`

export const WeekdayWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Weekdays = () => {
  const weekdaysNames = ['m', 't', 'w', 't', 'f', 's', 's'];

  return(
    <RowWrapper>
      {weekdaysNames.map((weekdaysName, index) => {
        return(
          <WeekdayWrapper key={index}>
            <Weekday>{weekdaysName.toUpperCase()}</Weekday>
          </WeekdayWrapper>
        )
      })}
    </RowWrapper>
  )
}

