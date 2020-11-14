import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LogItem from './LogItem'


const Logs = () => {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getLogs();

    }, [])


    const getLogs = async () => {
        setLoading(true);

        const res = await axios.get('/logs') // keep in mind we are runnign a proxy so we can just do /logs.


        setLogs(res.data) // logs now becomes an array of objects
        setLoading(false)

    }

    if (loading) {
        return <h4>Loading....</h4>
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

export default Logs;
