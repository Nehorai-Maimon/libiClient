import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './components/common/Header';
import Test from './Test';


function Layout() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/michal" element={<Test />} />
            </Routes>
        </div>
    )
}

export default Layout