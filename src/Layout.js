import { Navigate, Route, Routes } from "react-router-dom";
import ProjectContext from './context/ProjectContext';
import StudentContext from './context/StudentContext';
import CreateStudent from './pages/CreateStudent';
import Sidebar from './components/common/Sidebar';
import UserContext from './context/UserContext';
import Header from './components/common/Header';
import Daycare from './pages/Daycare/daycare';
import StudentView from './pages/StudentView';
import EditStudent from './pages/EditStudent';
import ProjectView from './pages/ProjectView';
import Table from './pages/TableStudent';
import Projects from './pages/Project';
import React, { useState } from 'react'
import Login from './pages/Login';
import Test from './Test';

function Layout() {
    const [user, setUser] = useState("");
    const [student, setStudent] = useState()
    const [project, setProject] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <StudentContext.Provider value={{ student, setStudent }}>
                <ProjectContext.Provider value={{ project, setProject }}>

                    <div>
                        {user &&
                            <>
                                <Header />
                                <Sidebar />
                            </>}

                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate to="/login" />} />

                            {!user &&
                                <>
                                </>
                            }
                            <Route path="/login" element={<Navigate to="/table" />} />
                            <Route path="/michal" element={<Test />} />
                            <Route path="/table" element={<Table />} />
                            <Route path="/edit" element={<EditStudent />} />
                            <Route path="/view" element={<StudentView />} />
                            <Route path="/new" element={<CreateStudent />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/projectView" element={<ProjectView />} />
                            <Route path="/dayCare" element={<Daycare />} />
                            <Route path="/dayCare/:id" element={<Daycare />} />
                            {user &&
                                <>


                                </>}
                        </Routes>
                    </div>
                </ProjectContext.Provider>
            </StudentContext.Provider>
        </UserContext.Provider>
    )
}

export default Layout