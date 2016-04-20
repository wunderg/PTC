import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { addStudent } from '../../actions/index';


class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log(this);
    e.preventDefault();
    const student = { name: this.props.data.name.value, email: this.props.data.email.value };
    this.props.addStudent(student);
    this.props.resetForm();
  }

  render() {
    const { fields: { name, email, instructor } } = this.props;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit} >
          <div className="row">
            <div class="divider"></div>
            <div className="input-field col s6 offset-s3">
              <input type="text" className="validate form-control" {...name} />
              <label htmlFor="icon_prefix">Name</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_telephone">Email</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <input type="text" className="validate form-control" {...instructor} />
              <label htmlFor="icon_prefix">Instructor</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light col s6 offset-s3" type="submit">
            Submit
            <i className="fa fa-info fa-2x fa-spin right"></i>
          </button>
        </form>
      </div>
    );
  }
}

NewStudent.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  data: PropTypes.object,
  addStudent: PropTypes.func,
  resetForm: PropTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.form.NewStudent
  };
}

export default reduxForm({
  form: 'NewStudent',
  fields: ['name', 'email']
}, mapStateToProps, { addStudent })(NewStudent);
