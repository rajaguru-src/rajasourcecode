import './App.css';
import Counterusestate from './Counterusestate';
import {Functioncomponent} from './FunctionComponent';
import { Propsfun } from './PropsComponenet';
import { PropsArrayfun } from './PropsArrayComponenet';

import {Fetchapi} from './UseApicall';

import Child from './UseContextPassValue';
import { createContext } from 'react';

export const UserContext = createContext();
function App() {
  const fruite = ["apple","banana","sdsdgs","sds"];  
  return (
    
    <>
      <Functioncomponent />

      <Counterusestate />
      <Propsfun name="test"/>
      {fruite.length>1?<PropsArrayfun name={fruite} />:<Propsfun name={fruite[0]} />
      }

        <UserContext.Provider value="Hello World">

           <Child />

        </UserContext.Provider>

        <Fetchapi />

       


      
    </>
  );
}

export default App;
