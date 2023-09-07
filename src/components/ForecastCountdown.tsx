import Countdown from "react-countdown-simple";
import * as React from 'react';

// TODO get EST ZONE
// show time remaining to 4pm/4am
// on hover, show "Time remaining until forecast update: 4am or 4pm Eastern Standard Time"
// only show time when sidebar is open (include label underneath)
const twelveHours = new Date(
    new Date().setHours(new Date().getHours() + 12)
).toISOString();

function ForecastCountdown() {
    return (
        <Countdown
            targetDate={twelveHours}
            renderer={({ hours, minutes, seconds }) => (
                <div style={{ fontSize: "14px", color: "#b9101e", fontWeight: "500", marginLeft: "20px" }}>
                    {hours}:{minutes}:{seconds}
                </div>
            )}
        />
    );
}

export default function CountdownContainer() {
    return (
        <div>
            <ForecastCountdown />
            <p style={{ display: "inline", fontSize: "10px", marginLeft: "8px" }}>[&nbsp;&nbsp;next&nbsp;forecast&nbsp;&nbsp;]</p>
        </div>
    )
}