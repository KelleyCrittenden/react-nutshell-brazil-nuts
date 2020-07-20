import { Route } from 'react-router-dom';
import React from 'react';
import TaskList from './task/TaskList';


const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route
                path='/'
                render={() => {
                    return <>
                    <TaskList />
                    </>
                }}/>
        </React.Fragment>
    );
};
export default ApplicationViews;

