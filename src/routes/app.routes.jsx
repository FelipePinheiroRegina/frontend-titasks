import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// ROUTES MOBILE
import { Home } from "../pages/Home"
import { DetailsTask } from "../pages/DetailsTask"
import { Create } from "../pages/Create"
import { Profile } from "../pages/Profile"

// ROUTES DESKTOP
import { HomeDesktop } from "../pages/HomeDesktop"
import { DetailsTaskDesktop } from "../pages/DetailsTaskDesktop"
import { CreateDesktop } from "../pages/CreateDesktop"
import { ProfileDesktop } from "../pages/ProfileDesktop"


export function AppRoutes() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Routes>

            {isMobile ? (
                <Route path="/" element={<Home />} />
            ) : (
                <Route path="/" element={<HomeDesktop />} />
            )}

            {isMobile ? (
                <Route path="/details/:id" element={<DetailsTask />}/>
            ) : (
                <Route path="/details/:id" element={<DetailsTaskDesktop />}/>
            )}
            
            {isMobile ? (
                <Route path="/create" element={<Create />} />
            ) : (
                <Route path="/create" element={<CreateDesktop />}/>
            )}
            

            {isMobile ? (
                <Route path="/profile" element={<Profile />} />
            ) : (
                <Route path="/profile" element={<ProfileDesktop />} />
            )} 

           
            <Route path="*" element={<Navigate to="/" />} />
           
        </Routes>
    );
}
