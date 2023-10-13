import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import TodoList from "./TodoList";

function TabApp() {
    const [value, setValue] = useState(0);

    const handelChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Tabs value={value} onChange={handelChange}>
                <Tab value={0} label="Home"/>
                <Tab value={1} label="TodoList"/>
                
            </Tabs>
            {value === 0 &&(
            <div>
                <h1>Tervetuloa!</h1>
                <h2>Tervetuloa kotisivuilleni, kokeile rauhassa sen ominaisuuksia.</h2>
                </div>
                )}
            {value === 1 && (
                <div>
                    <TodoList />
             </div>
             )}
            
        </div>
    )
}

export default TabApp;