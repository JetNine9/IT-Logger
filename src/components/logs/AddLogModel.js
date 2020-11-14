import React, { useState } from 'react'

const AddLogModel = () => {

    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

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
        console.log(message, attention, tech)
    }

    // need modal classname or modals wont work in the return div
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content" >
                <h4>Enter System Log</h4>

                <div className="row" >
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={onChange} ></input>
                        <label htmlFor="message" className="active" >
                            Log Mmessage
                        </label>
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
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat" >
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

export default AddLogModel