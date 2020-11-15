import React, { useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import { connect } from 'react-redux';
import {getLogs} from '../../actions/logActions'


const Logs = (props) => {

    const {logs, loading} = props.log;


    useEffect(() => {
        props.getLogs();
        // eslint-disable-next-line
    }, [])

    if (loading || logs === null) {
        return <Preloader/>
    }


    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System logs</h4>
            </li>
            {!loading && logs.length === 0 ? <p>Please add logs</p> : logs.map((log) => {
                return <LogItem log={log} key={log.id}/>
            })}
        </ul>
    )
}


Logs.propTypes = {
    log: PropTypes.object.isRequired,
}

////////////////// Bringing in Redux state below ///////////////////////////////////

const mapStateToProps = (state) => {

    return {
        log: state.logState
    }
}

// if we need actions we need to bring them in below. Example) getLogs
export default connect(mapStateToProps, {getLogs})(Logs);
