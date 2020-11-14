import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TechItem from './TechItem'




const TechListModal = () => {
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getTechs();

    }, [])


    const getTechs = async () => {
        setLoading(true);

        const res = await axios.get('/techs') // keep in mind we are runnign a proxy so we can just do /logs.


        setTechs(res.data) // logs now becomes an array of objects
        setLoading(false)

    }



    return (
       <div id="tech-list-modal" className="modal" >
           <div className="modal-content" >
                <h4>Technician List</h4>
                <ul className="collection" >
                    {!loading && techs.map((tech) => {
                        return <TechItem tech={tech} key={tech.id} />
                    })}
                </ul>
           </div>
       </div>
    )
}

export default TechListModal;
