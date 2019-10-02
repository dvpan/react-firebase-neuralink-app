import React from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Dashboard.css';

const Dashboard = () => {
    const { t } = useTranslation();
    document.title = t('Панель управления - Нейролинк');
    return <Redirect to='/dashboard/health' />
}


export default Dashboard;