import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const onDateClick = function(_, date) {
  console.log(date)
}

export default (props) => (
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
      <section className="info"><span>Interview:</span><span> <DatePicker onChange={onDateClick} hintText="Enter Date"/></span></section>
      <section className="info"><span>Decision:</span><span> {props.data.decision} </span></section>
      <section className="info"><span>Contacted:</span><span> {props.data.contacted} </span></section>
    </div>
  </div>
);
