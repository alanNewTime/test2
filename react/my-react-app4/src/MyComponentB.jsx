// useContext() = React hook that allows you to share values
//                b/w multiple levels of components
//                without passing props through each level.

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

import React, { useState } from "react";
import MyComponentC from "./MyComponentC";

function MyComponentB() {
  return (
    <>
      <div className="box">
        <h1>ComponentB</h1>
        <MyComponentC></MyComponentC>
      </div>
    </>
  );
}

export default MyComponentB;
