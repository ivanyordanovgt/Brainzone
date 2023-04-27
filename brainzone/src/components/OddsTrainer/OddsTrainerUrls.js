import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { CardWar } from './components/CardWar/CardWar';
import { ChooseCard } from './components/ChooseCard/ChooseCard';
import { CrashGamble } from './components/CrashGamble/CrashGamble';

export const OddsTrainerUrls = () => {

    const [money, setMoney] = useState(1000);

    return (
        <div>
            <Routes>
            <Route path="card-war" element={<CardWar/>}></Route>
            <Route path="choose-card" element={<ChooseCard/>}></Route>
            <Route path="crash-gamble" element={<CrashGamble/>}></Route>
            </Routes>
        </div>
    )
}
