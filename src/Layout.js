import React, { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Header from './components/common/Header';
import Login from './pages/Login';
import Test from './Test';
import UserContext from './context/UserContext';


function Layout() {
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={{ user, setUser }}>

            <div>
                {user &&
                    <Header />}

                <Routes>

                    {!user &&
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </>
                    }
                    {user &&
                        <>

                            <Route path="/login" element={<Navigate to="/michal" />} />
                            <Route path="/michal" element={<Test />} />

                        </>}
                </Routes>
            </div>
        </UserContext.Provider>
    )
}

export default Layout