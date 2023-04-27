import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { CardWar } from './components/CardWar/CardWar';
import { ChooseCard } from './components/ChooseCard/ChooseCard';
import { CrashGamble } from './components/CrashGamble/CrashGamble';

export const OddsTrainer = () => {

    const [money, setMoney] = useState(1000);

    return (
        <div>
            <h1>Can you beat the odds ?</h1>
            <Link to="crash-gamble">Crash gamble</Link>
            <Link to="choose-card">Choose card (50/50)</Link>
            <Link to="card-war">Card war (custom odds)</Link>
        </div>
    )
}
