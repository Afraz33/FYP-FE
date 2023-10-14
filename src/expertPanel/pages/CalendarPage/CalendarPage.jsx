import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";
import Calendar from "../../components/Calendar/Calendar";
function CalendarPage() {
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
          <Calendar />
        </div>

        <button className="mx-auto bg-black text-white rounded-full px-4 text-lg py-2 w-fit hover:bg-[#B2A1FE] hover:text-black ">
          Add Time-Slot
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default CalendarPage;
