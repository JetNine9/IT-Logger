import React, { useEffect } from 'react'
import TechItem from './TechItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTech,  } from '../../actions/techActions'




const TechListModal = (props) => {

    const {loading, techs} = props.techs

    useEffect(() => {
        props.getTech();
    // eslint-disable-next-line
    }, [])



    return (
       <div id="tech-list-modal" className="modal" >
           <div className="modal-content" >
                <h4>Technician List</h4>
                <ul className="collection" >
                    {!loading && techs !== null && techs.map((tech) => {
                        return <TechItem tech={tech} key={tech.id} />
                    })}
                </ul>
           </div>
       </div>
    )
}

TechListModal.propTypes = {
    techs: PropTypes.object.isRequired,
    getTech: PropTypes.func.isRequired,

}

const mapStateToProps = (state) => {
    return {
        techs: state.tech
    }
}

export default connect(mapStateToProps, {getTech}) (TechListModal);
