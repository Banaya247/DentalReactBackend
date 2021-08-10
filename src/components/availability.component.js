import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';



import UserService from "../services/user.service";

const currentDate = '2021-08-10';
const schedulerData = [
    { startDate: '2021-08-10T09:45', endDate: '2021-08-10T11:00', title: 'John Doe Cleaning' },
    { startDate: '2021-08-10T12:00', endDate: '2021-08-10T13:30', title: 'Jane Doe Checkup' },
];

export default class Availability extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "Doctor's Availability"
        };
    }


    render() {
        return (
            <div className="container">
                <h5>{this.state.content}</h5>
                <div>
                    <Paper>
                        <Scheduler
                            data={schedulerData}
                        >
                            <ViewState
                                currentDate={currentDate}
                            />
                            <DayView
                                startDayHour={9}
                                endDayHour={17}
                            />
                            <Appointments />
                        </Scheduler>
                    </Paper>
                </div>
            </div>
        );
    }
}
