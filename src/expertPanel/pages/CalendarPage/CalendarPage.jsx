import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";
import Calendar from "../../components/Calendar/Calendar";
import { useState } from "react";
import axios from "axios";
function CalendarPage() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const updateTimeSlots = async () => {
    const timeSlotData = {
      startTime: startTime,
      endTime: endTime,
    };
    try {
      const response = await axios.put(
        "http://localhost:5000/api/experts/expert-updateCalendar",
        {
          email: localStorage.getItem("email"),
          timeSlots: timeSlotData,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating time slots", error);
    }
  };
  return (
    <div className="py-4 bg-[#EAE1E1] h-screen">
      <Navbar />
      <div className="w-fit mx-auto mt-5">
        <h1 className="text-3xl font-bold w-2/3 text-center mx-auto">
          Hi Afraz, add slots to your schedule so that your clients can schedule
          meetings with you!
        </h1>
      </div>
      <div className=" mt-6 flex flex-col gap-8 ">
        <div className="mx-auto w-fit">
          <Calendar
            startTime={startTime}
            endTime={endTime}
            setEndTime={setEndTime}
            setStartTime={setStartTime}
          />
        </div>

        <button
          onClick={updateTimeSlots}
          className="mx-auto bg-black text-white rounded-full px-4 text-lg py-2 w-fit hover:bg-[#B2A1FE] hover:text-black "
        >
          Add Time-Slot
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default CalendarPage;
