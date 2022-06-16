import React, {createContext, useState} from 'react';
import {v4} from 'uuid';

const LogContext = createContext({
  logs: {},
  onCreate: ({title, body, date}) => {},
});

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState(
    [
      {
        id: v4(),
        title: 'RN 공부',
        body: 'DayLog 만들기',
        date: new Date().toISOString(),
      },
      {
        id: v4(),
        title: '독서',
        body: '리팩토링 2편 읽기',
        date: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
      },
    ].concat(
      Array.from({length: 10}).map((_, index) => ({
        id: v4(),
        title: `Log ${index}`,
        body: `Log ${index}`,
        date: new Date().toISOString(),
      })),
    ),
  );

  const onCreate = ({title, body, date}) => {
    const log = {
      id: v4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
