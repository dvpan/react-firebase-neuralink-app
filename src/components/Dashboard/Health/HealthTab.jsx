import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { useTranslation } from 'react-i18next';

import Chart from 'components/Dashboard/Chart/Chart';
import TabButton from 'components/Dashboard/Health/TabButton/TabButton';
import HealthCard from './HealthCard';
import H from 'components/Wrapper/H';

import './HealthTab.css';

const HealthTab = ({ health, healthFilter, healthLastItem, setFilter }) => {
    const getFieldFromHealth = (arr) => {
        if (health) return health.map(hItem => {
            let obj = {};
            if (healthFilter.type === 'week') obj.key = new Date(hItem.time).toLocaleString();
            else obj.key = new Date(hItem.time).toLocaleTimeString();

            arr.forEach(item => {
                obj[item.label] = hItem[item.field];
            });

            return obj;
        });

        else return [];
    }
    const { t } = useTranslation();

    document.title = t('Здоровье - Нейролинк');

    const { type } = healthFilter;

    return (
        <div className='dashboard-container'>
            <H>Здоровье</H>

            <div>
                <TabButton onClick={() => setFilter('week')} selected={type === 'week'}>Текущая неделя</TabButton>
                <TabButton onClick={() => setFilter('yesterday')} selected={type === 'yesterday'}>Вчера</TabButton>
                <TabButton onClick={() => setFilter('today')} selected={type === 'today'}>24 часа</TabButton>
                <TabButton onClick={() => setFilter('hour')} selected={type === 'hour'}>Последний час</TabButton>
            </div>

            <div className='health-container'>
                <div className='health-chart-column-big'>
                    <div className='health-chart-card'>
                        <Chart
                            data={getFieldFromHealth([{ label: 'уд./мин', field: 'heartbeat' }])}
                            label='Пульс'
                            dataLabel='уд./мин'
                            color='#e83158'
                        />
                    </div>

                    <div className='health-chart-card'>
                        <Chart
                            data={
                                getFieldFromHealth(
                                    [{ label: 'верхнее мм.рт.ст', field: 'bloodPressureTop' },
                                    { label: 'нижнее мм.рт.ст', field: 'bloodPressureBottom' }]
                                )}
                            label='Кровяное давление'
                            dataLabel='верхнее мм.рт.ст'
                            dataLabelSecond='нижнее мм.рт.ст'
                            color='#3432a8'
                            colorSecond='#23cc5e'
                        />
                    </div>
                </div>


                <div className='health-chart-column-small'>
                    <div className='health-chart-card'>
                        <HealthCard {...healthLastItem} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        health: state.firestore.ordered.health,
        healthLastItem: (state.firestore.ordered.healthLastItem ? state.firestore.ordered.healthLastItem[0] : {}),
        healthFilter: state.healthFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => dispatch((dispatch) => { dispatch({ type: 'SET_FILTER', filter }) })
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => {
        if (!props.auth.uid) return [];

        return ([
            {
                collection: 'health',
                orderBy: [['time', 'asc']],
                where: [
                    ['userId', '==', props.auth.uid],
                    ['time', '>', props.healthFilter.start],
                    ['time', '<', props.healthFilter.end],
                ],
                storeAs: 'health'
            },
            {
                collection: 'health',
                orderBy: [['time', 'desc']],
                where: [
                    ['userId', '==', props.auth.uid]
                ],
                limit: 1,
                storeAs: 'healthLastItem'
            }]);
    })
)(HealthTab);