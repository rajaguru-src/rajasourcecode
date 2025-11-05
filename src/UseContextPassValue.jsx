import React, {useContext} from 'react';
import { UserContext } from './App';
function Child(){
    const user = useContext(UserContext);
    return(
    <>
        <h2>Pass data via Context</h2>
        <div>User: {user}</div>
    </>)
}
export default Child;