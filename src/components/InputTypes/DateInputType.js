import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { DATE_FORMAT } from "../../common/constants";
require("react-datepicker/dist/react-datepicker-cssmodules.css");

export const DateInput = ({
  value,
  onChange,
  onBlur,
  name,
  id,
  classes,
  onFocus,
  labelId,
}) => {
  const [selectedDate, setSelectedDate] = useState(
    value && value.type ? moment(value.value).toDate() : moment().toDate()
  );
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
        dropdownMode="select"
      />
    </div>
  );
};
export default DateInput;
