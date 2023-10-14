import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString[0]);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};
const Calendar = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      showTime={{
        format: "HH:mm",
      }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
);
export default Calendar;
