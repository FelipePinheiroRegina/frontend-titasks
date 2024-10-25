import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/Home"
import { DetailsTask } from "../pages/DetailsTask"
import { Create } from "../pages/Create"
import { Profile } from "../pages/Profile"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/details/:id" element={<DetailsTask />}/>
            
            <Route path="/create" element={<Create />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
