import { useState } from "react";

export default function useTimer() {
    
    const [timeStarted, setTimeStarted] = useState();

    function startTimer() {
        setTimeStarted(new Date())
    }

    function timePassed() {
        return new Date() - timeStarted
    }

    return {startTimer, timePassed}
}