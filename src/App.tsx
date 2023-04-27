import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { Calendar } from './components/Calendar';
import Header from './components/Header';
import WeeklyCalendar from './components/WeeklyCalendar';
import { CalendarContext } from './context/CalendarContext';

const Wrapper = styled.div`
  @media (min-width: 741px) {
    width: 740px;
    margin: 0 auto;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
`;

const FooterText = styled.p`
  font-family: -apple-system, 'Roboto';
  font-size: 16px;
  padding: 20px;
  margin: 0;
  color: red;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

function App() {
  const {isEventOnDate, deleteEvent} = useContext(CalendarContext);
  const [isDeleteButtonHidden, setIsDeleteButtonHidden] = useState(true);
  const chosenEvent = useRef<string | null>(null);

  function processClickOnCalendar (e: React.MouseEvent<HTMLElement>){
    const cellId = (e.target as HTMLElement).dataset.id;

    if(!cellId) {
      chosenEvent.current = null;
      return setIsDeleteButtonHidden(true);
    }
    
    const hasEvent = isEventOnDate(cellId);

    if(hasEvent) {
      chosenEvent.current = cellId;
      return setIsDeleteButtonHidden(false);
    }

    chosenEvent.current = null;
    return setIsDeleteButtonHidden(true)
  }

  function processDeleteEvent() {
    if(!chosenEvent.current) return;

    deleteEvent(chosenEvent.current);
  }

  return (
    <Wrapper onClick={processClickOnCalendar}>
      <Header/>
      <WeeklyCalendar/>
      <Calendar/>
      <FooterWrapper>
        <FooterText>Today</FooterText>
        <DeleteButton hidden={isDeleteButtonHidden} onClick={processDeleteEvent}><FooterText>Delete</FooterText></DeleteButton>
      </FooterWrapper>
    </Wrapper>
  );
}

export default App;
