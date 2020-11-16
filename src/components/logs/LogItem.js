import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions'

import M from 'materialize-css/dist/js/materialize.min.js'


const LogItem = (props) => {

    const handleClick = () => {
        props.deleteLog(props.log.id)
        M.toast({ html: "succesfully deleted" })

    }

    const setClick = () => {
        props.setCurrent(props.log)
    }

    return (
        <li className="collection-item">
            <div>
                {/* by having edit log modal it allows us to open that component */}
                <a href="#edit-log-modal"
                    className={`modal-trigger  ${props.log.attention ? "red-text" : "blue-text"}`}
                    onClick={setClick}>{props.log.message}

                </a>

                <br />
                <span className='grey-text'>
                    <span className="black-text">ID #{props.log.id} </span> last updated by {' '}
                    <span className="black-text" >{props.log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>
                        {props.log.date}
                    </Moment>
                </span>
                <a href="#!" onClick={handleClick} className="secondary-content" >
                    <i className="material-icons grey-text" >delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LogItem)
