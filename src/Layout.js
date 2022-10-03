import React from 'react'
import { Route, Routes } from "react-router-dom";
import Test from './Test';


function Layout() {
    return (
        <div>

            <Routes>
                <Route path="/michal" element={<Test />} />
            </Routes>
        </div>
    )
}

export default Layout