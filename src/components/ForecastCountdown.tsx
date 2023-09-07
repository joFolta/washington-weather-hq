import * as React from 'react';
import moment from 'moment-timezone';
import Countdown from "react-countdown-simple";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function findFourToCountDownTo(fourAmEST: string, fourPmEST: string) {
    const timeDiff = moment(fourAmEST).diff(fourPmEST, 'seconds')
    return timeDiff === Math.abs(timeDiff) ? fourPmEST : fourAmEST
}

function ForecastCountdown() {
    // TODO REMOVE
    // const tenSeconds = new Date(
    //     new Date().setSeconds(new Date().getSeconds() + 100000)
    // ).toISOString();

    // // TODO ensure we are always using EST ZONE

    // const fourAmEST = moment().tz("America/New_York").set({ "hour": 23, "minute": 10 }).toISOString();
    // // TODO REMOVE LOG 
    // console.log('fourAmEST 1', fourAmEST);
    // // TODO REMOVE LOG 
    // console.log('fourAmEST 2', moment().set({ "hour": 23, "minute": 10 }).format());
    // const currentTimeEST = moment().tz("America/New_York").toISOString()

    const fourAmEST = (moment().hour(24).minute(0).second(0)).toISOString()
    const fourPmEST = (moment().hour(16).minute(0).second(0)).toISOString()
    const fourToCountDownTo = findFourToCountDownTo(fourAmEST, fourPmEST)

    // TODO REMOVE LOG 
    // console.log('fourToCountDownTo', fourToCountDownTo);

    return (
        <Countdown
            targetDate={fourToCountDownTo}
            // TODO REMOVE
            // targetDate={tenSeconds}
            renderer={({ hours, minutes, seconds }) => (
                <div style={{ fontSize: "14px", color: "#b9101e", fontWeight: "500", marginLeft: "20px" }}>
                    {hours}:{minutes}:{seconds}
                </div>
            )}
        />
    );
}

export default function CountdownContainer({ }) {
    const [isToolltipOpen, setIsToolTipOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setIsToolTipOpen(false);
    };

    const handleTooltipOpen = () => {
        setIsToolTipOpen(true);
    };

    return (
        <div>
            <ForecastCountdown />
            <Tooltip
                open={isToolltipOpen}
                onOpen={handleTooltipOpen}
                onClose={handleTooltipClose}
                title="Updates ~4am/4pm Eastern Standard Time"
            >
                <Button
                    onClick={handleTooltipOpen}
                    style={{ display: "inline", fontSize: "10px", marginLeft: "8px", border: "none", padding: "0", textTransform: 'none' }}
                    tabIndex={-1}
                >
                    [&nbsp;&nbsp;next&nbsp;forecast&nbsp;&nbsp;]
                </Button>
            </Tooltip>
        </div>
    )
}