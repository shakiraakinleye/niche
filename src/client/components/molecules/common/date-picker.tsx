"use client";

import { useState, useEffect } from "react";

import { CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Input } from "../../atoms/input";

export const CalendarDatePicker = ({ field }: { field: any }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const { onChange, ...props } = field;

  useEffect(() => {
    onChange(startDate?.toDateString());
  }, [startDate, onChange]);

  return (
    <div className="relative">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<Input {...props} />}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY"
        dateFormatCalendar="MMMM"
        popperPlacement="bottom-end"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        showPopperArrow={false}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3">
        <CalendarDays className="h-5 w-5 text-gray-2300 2xl:h-6 2xl:w-6" />
      </div>
    </div>
  );
};
