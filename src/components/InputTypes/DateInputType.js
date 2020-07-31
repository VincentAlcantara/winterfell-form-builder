import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import moment from "moment";
require("react-datepicker/dist/react-datepicker-cssmodules.css");

const DATE_FORMAT = "dd/MM/yyyy";

export const DateInput = ({ value, onChange, onBlur, name, id, classes, onFocus, labelId }) => {
  const [selectedDate, setSelectedDate] = useState(value && value.type ? moment(value.value).toDate() : moment().toDate());
  const handleChange = (date) => {
    setSelectedDate(date);
    onChange({ type: "date", value: moment(date) });
  };
  return (
    <div>
      <DatePicker
        name={name}
        id={id}
        aria-labelledby={labelId}
        className={classes.input}
        selected={selectedDate}
        onSelect={onBlur}
        onFocus={() => (onFocus ? onFocus(id) : null)}
        onChange={(date) => handleChange(date)}
        dateFormat={DATE_FORMAT}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
      />
    </div>
  );
};
export default DateInput;