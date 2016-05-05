import React, { PropTypes } from 'react';
import Card from './card.js';
import './style.scss';

const style = {
  cursor: 'pointer'
};

const Table = (props, link) => (

  <div className="student-list">
    {props.data.students.map(student => <Card student={student} selectStudent={props.selectStudent} key={student.name} /> )}
  </div>
);

Table.propTypes = {
  data: PropTypes.object,
  students: PropTypes.array
};

export default Table;
