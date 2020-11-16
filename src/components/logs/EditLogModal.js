import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { updateLog} from '../../actions/logActions'

const EditLogModal = (props) => {

    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')


    useEffect(() => {
        if (props.current) {

            setMessage(props.current.message)
            setAttention(props.current.attention)
            setTech(props.current.tech)
        }
        //eslint-disable-next-line
    }, [props.current])

    const onChange = (event) => {
        setMessage(event.target.value)
    }

    const techChange = (event) => {
        setTech(event.target.value)
    }

    const inputChange = (event) => {
        setAttention(!attention)
    }

    const onSubmit = () => {
        if(message === '' || tech === '') {
            M.toast({html: "please enter a message and tech"})
        } else {
            const newLog = {
                id: props.current.id,
                message: message,
                attention: attention,
                tech:tech,
                date: new Date()
            }

            props.updateLog(newLog)
            M.toast({html: "Log updated by" + tech})

            //clear fields
            setMessage('')
            setTech('')
            setAttention(false)
        }


    }

    // need modal classname or modals wont work in the return div
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content" >
                <h4>Enter System Log</h4>

                <div className="row" >
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={onChange} ></input>

                    </div>
                </div>

                <div className="row" >
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={techChange} >
                            <option value="" disabled>
                                Select Technician
                            </option>
                            <option value="john doe" >John Doe</option>
                            <option value="LeBron" >LeBron</option>
                            <option value="Kobe" >Kobe</option>
                        </select>
                    </div>
                </div>

                <div className="row" >
                    <div className="input-field" >
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={inputChange} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>

            <div className="modal-footer" >
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn" >
                    Enter
                </a>
            </div>
        </div>
    )
}


const modalStyle = {
    width: '75%',
    height: '75%'
}

EditLogModal.prototypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        current: state.logState.current
    }
}

export default connect(mapStateToProps, {updateLog})(EditLogModal)
