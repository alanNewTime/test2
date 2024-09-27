// useContext() = React hook that allows you to share values
//                b/w multiple levels of components
//                without passing props through each level.(and avoid a fenomenom called PROP DRILLING)

//PROVIDER COMPONENT
// 1. import{createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value = {value}>
//      <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './ComponentA';
// 3. const value = useContext(MyContext);

import MyComponentB from "./MyComponentB";
import React, { useState, createContext } from "react";
export const UserContext = createContext();

function MyComponentA() {
  const [user, setUser] = useState("Alan");

  return (
    <>
      <div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
          <MyComponentB />
          {/* I Can put directly componentD if i want to, the only reason i left this is because i want all the nests to be visible */}
        </UserContext.Provider>
      </div>
    </>
  );
}

export default MyComponentA;
