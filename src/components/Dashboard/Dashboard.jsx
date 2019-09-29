import React from 'react';
import { Redirect } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    document.title = 'Панель управления - Нейролинк';
    return <Redirect to='/dashboard/health' />
}


export default Dashboard;