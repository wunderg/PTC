import React from 'react';
import { Input } from 'react-materialize';

export default (props) => {
  const onDateClick = () => {
    $('.datepicker').pickadate({
      selectMonths: true,
      closeOnSelect: true,
      selectYears: 15
    });

    $( ".datepicker" ).change(function(e) {
      const student = props.data;
      student.interview = e.target.value;
      props.updateStudent(student);
    });
  };

  const onDecisionClick = (e) => {
    const student = props.data;
    student.decision = e.target.value;
    props.updateStudent(student);
  };

  return (
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title"><span> {props.data.name} </span> </span>
        <hr />
        <section className="info"><span>Email:</span> <span> {props.data.email} </span></section>
        <section className="info">
          <span>Lesson:</span>
          <span> {props.data.lesson} of 8</span>
        </section>
        <section className="info"><span>Level:</span><span> {props.data.level} of 5</span></section>
        <section className="info"><span>Instructor:</span><span> {props.data.instructor} </span></section>
        <section className="info"><span>Contacted:</span><span> {props.data.contacted} </span></section>
        <section className="info"><span>Interview:</span>
          <span><input type="text" className="datepicker" value={props.data.interview} onClick={onDateClick} /></span>
        </section>
        <section className="info"><span>Decision:</span>
          <span className="decision">
            <Input type="select" onChange={onDecisionClick}>
              <option>{props.data.decision}</option>
              <option>Pending</option>
              <option>Accepted</option>
              <option>Denied</option>
            </Input>
          </span>
        </section>
        <section className="info"><span>Contacted:</span><span> {props.data.contacted} </span></section>
      </div>
    </div>
  );
};
