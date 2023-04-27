import { useContext } from 'react';
import styled from 'styled-components';
import { CalendarContext } from '../context/CalendarContext';

const AddButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  ::before{
    content: '';
    top: 0;
    left: 7px;
    position: absolute;
    width: 1px;
    height: 14px;
    background-color: red;
  }

  ::after{
    content: '';
    top: 6px;
    left: 0;
    position: absolute;
    height: 1px;
    width: 14px;
    background-color: red;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px 8% ;
`

const AppTitle = styled.p`
  margin: 0;
  font-family: Roboto;
`

const Header = () => {
  const {addEvent} = useContext(CalendarContext);

  function addNewEventToCalendar() {
    const eventDate = prompt('Enter event time: YYYY-MM-DD HH:mm:ss');

    if(!eventDate) {
      return;
    }

    addEvent(eventDate);
  }

  return(
    <HeaderWrapper>
      <AppTitle>Interview Calendar</AppTitle>
      <AddButton onClick={addNewEventToCalendar} />
    </HeaderWrapper>
  )
}

export default Header;