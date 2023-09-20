import * as React from 'react';
import moment from 'moment-timezone';
import Countdown from "react-countdown-simple";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function findFourToCountDownTo() {
    const currentTime = moment().toISOString()

    // TODO REMOVE LOG 
    console.log('currentTime', currentTime);

    const fourAmToday = (moment().day(3).hour(4).minute(0).second(0)).toISOString();
    const fourAmNextDay = (moment().day(4).hour(4).minute(0).second(0)).toISOString()
    const fourAmToUse = moment(fourAmToday).diff(currentTime, 'seconds') < 0 ? fourAmNextDay : fourAmToday;

    const fourPmToday = (moment().day(2).hour(16).minute(0).second(0)).toISOString();
    const fourPmNextDay = (moment().day(3).hour(16).minute(0).second(0)).toISOString()
    const fourPmToUse = moment(fourPmToday).diff(currentTime, 'seconds') < 0 ? fourPmNextDay : fourPmToday;

    // if four AM is in the past, use four PM
    if (moment(fourAmToUse).diff(currentTime, 'seconds') < 0) {
        return fourPmToUse;
    }

    // if four PM is in the past, use four AM
    if (moment(fourPmToUse).diff(currentTime, 'seconds') < 0) {
        return fourAmToUse;
    }

    // if they are both in the future, use the closest one
    return moment(fourAmToUse).diff(currentTime, 'seconds') > moment(fourPmToUse).diff(currentTime, 'seconds') ? fourPmToUse : fourAmToUse;
}

function ForecastCountdown() {
    const fourToCountDownTo = findFourToCountDownTo();

    // TODO REMOVE LOG 
    console.log('fourToCountDownTo', fourToCountDownTo);

    return (
        <Countdown
            targetDate={fourToCountDownTo}
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
                title="Mt Washington Observatory updates roughly 4am/4pm Eastern Standard Time"
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