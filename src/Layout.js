import React, { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Header from './components/common/Header';
import Login from './pages/Login';
import Test from './Test';
import UserContext from './context/UserContext';
import EditStudent from './pages/EditStudent';
import CreateStudent from './pages/CreateStudent';
import StudentView from './pages/StudentView';
import Sidebar from './components/common/Sidebar';
import Projects from './pages/Project';
import Table from './pages/TableStudent';
import ProjectView from './pages/ProjectView';
import Daycare from './pages/Daycare/daycare';


function Layout() {
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={{ user, setUser }}>

            <div>
                {user &&
                    <>
                        <Header />
                        <Sidebar />
                    </>}

                <Routes>

                    {!user &&
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </>
                    }
                    {user &&
                        <>

                            <Route path="/login" element={<Navigate to="/table" />} />
                            <Route path="/michal" element={<Test />} />
                            <Route path="/table" element={<Table />} />
                            <Route path="/edit" element={<EditStudent />} />
                            <Route path="/new" element={<CreateStudent />} />
                            <Route path="/view" element={<StudentView />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/projectView" element={<ProjectView />} />
                            <Route path="/dayCare" element={<Daycare />} />

                        </>}
                </Routes>
            </div>
        </UserContext.Provider>
    )
}

export default Layout