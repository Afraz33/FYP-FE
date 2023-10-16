import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const onOk = (value) => {
  console.log("onOk: ", value);
};
export default function Calendar({
  startTime,
  endTime,
  setEndTime,
  setStartTime,
}) {
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString[0]);
    setStartTime(dateString[0]);
    setEndTime(dateString[1]);
  };
  return (
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
}
