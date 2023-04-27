import React, { ReactNode, useState } from "react";
import { checkItemInArray } from "../helpers/checkItemInArray";

interface CalendarContextValue{
  events: string[];
  addEvent(id: string): void;
  deleteEvent(id: string): void;
  isEventOnDate(id: string): boolean;
}

interface CalendarProviderProps {
  children: ReactNode
}

export const CalendarContext = React.createContext({} as CalendarContextValue);

export const CalendarProvider = ({children}: CalendarProviderProps) => {
  const [events, setEvents] = useState<string[]>(['2019-03-25 00:00:00']);

  const addEvent = (id: string) => {
    const unifiedDate = id.slice(0, -5) + '00:00';

    if (isEventOnDate(unifiedDate)) {      
      return;
    }
    
    setEvents(prevEvents => [...prevEvents, unifiedDate]);
  }

  const deleteEvent = (id: string) => {
    const newEventsList = [...events];
    const {isExist, itemIndex} = checkItemInArray(id, newEventsList);
    
    if(isExist) {
      newEventsList.splice(itemIndex, 1);
    }

    setEvents(newEventsList);
  }

  const isEventOnDate = (id: string) => {
    return checkItemInArray(id, events).isExist;
  }

  return(
    <CalendarContext.Provider value={{
      events,
      addEvent,
      deleteEvent,
      isEventOnDate
    }}>
      {children}
    </CalendarContext.Provider>
  )
}