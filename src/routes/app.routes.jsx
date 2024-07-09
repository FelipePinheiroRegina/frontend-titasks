import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/Home"
import { DetailsTask } from "../pages/DetailsTask"
import { Create } from "../pages/Create"
import { Profile } from "../pages/Profile"
import { Documentations } from "../pages/Documentations"
import { DocumentationsCreate } from "../pages/DocumentationsCreate"
import { SeeDocumentation } from "../pages/SeeDocumentation"
import { Schedule } from "../pages/Schedule"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/details/:id" element={<DetailsTask />}/>
            
            <Route path="/create" element={<Create />} />

            <Route path="/documentations" element={<Documentations />}/>

            <Route path="/documentationscreate" element={<DocumentationsCreate />}/>

            <Route path="/seedocumentation/:id" element={<SeeDocumentation />}/>

            <Route path="/schedule" element={<Schedule />}/>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
