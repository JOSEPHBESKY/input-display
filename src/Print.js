import React from 'react'
import App from "./App"
function Print(props) {
    return(
        <div><App getvalue={props.name}/></div>
    )
}
export default Print;