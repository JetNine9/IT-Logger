import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {searchLogs} from '../../actions/logActions'

 const SearchBar = (props) => {
  const text = useRef('');

  const onChange = () => {
    props.searchLogs(text.current.value)
  }


    return (
        <nav style={{ marginBtoom: '30px'}} className="blue" >
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder="Search Logs.." ref={text} onChange={onChange} />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}


SearchBar.prototypes = {
  searchLogs: PropTypes.func.isRequired,
}

export default connect(null, {searchLogs}) (SearchBar);
