import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStudents } from '../../actions';

import TextInput from '../text-input';
import Students from '../students';
import Spinner from '../../helpers/spinner.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this);
    if (this.props.user.isAuthenticated) {
      this.props.fetchStudents();
    }
  }


  render() {
    if (this.props.data.isFetching) {
      return <Spinner />
    }
    return (
      <div className="row">
        <div className="col s12">
          <TextInput />
        </div>
        <div className="col s12">
          <Students data={ this.props.data } />
        </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    data: state.slocal,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStudents }, dispatch);
}

Dashboard.propTypes = {
  data: PropTypes.object,
  fetchStudents: PropTypes.func,
  history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
