import React, {createContext, useState} from 'react';

const LogContext = createContext({text: {}, setText: () => {}});

export function LogContextProvider({children}) {
  const [text, setText] = useState();
  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
