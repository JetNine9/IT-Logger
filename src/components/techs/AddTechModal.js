import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const changeFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const changeLastName = (event) => {
        setLastName(event.target.value)
    }



    const onSubmit = () => {
        if(firstName === '' || lastName === '') {
            M.toast({html: "please enter their first and last name"})
        } else {
            console.log(firstName, lastName)
            setFirstName('')
            setLastName('')

        }
    }

    // need modal classname or modals wont work in the return div
    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content" >
                <h4>New Technician</h4>

                <div className="row" >
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={changeFirstName} ></input>
                        <label htmlFor="firstName" className="active" >
                            First Name
                        </label>
                    </div>
                </div>


                <div className="row" >
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={changeLastName} ></input>
                        <label htmlFor="lastName" className="active" >
                            Last Name
                        </label>
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



export default AddTechModal
