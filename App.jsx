import Show from "./Show"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import React from "react"
import Summary from "../pages/Summary"
const App=()=>{
    return(
        <div>
            <Show/> 
            <BrowserRouter>
                <Routes>
                    <Route path="/summary" element={<Summary/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App 
