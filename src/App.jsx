import BookingDetails from "./components/BookingDetails";
import Calendar from "./components/Calendar";
import TimeSlots from "./components/TimeSlots";

function App() {
  return (
    <>
      <div className="h-screen bg-diagonal-gradient ">
        <div className="flex item-center justify-center">
          <div className="p-9">
            <img src="\image.png" className="h-28 ml-10" alt="logo" />
            <button className="text-white font-stretch-expanded p-4 bg-[#091f38] border-[#091f38] rounded-md cursor-pointer">
              Schedule Your Consultation
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-white text-center pb-6">
          <p className="text-5xl font-semibold pt-1">
            We'll Help You Add Minimum
          </p>
          <p className="text-5xl font-semibold text-black pt-1">
            Additional $1M in ARR
          </p>
          <p className="text-2xl mt-2 text-black pt-1">
            Important: to get most out of this call watch the thesis video ahead
            of our call
          </p>
        </div>
      </div>
      <div className="h-screen bg-white flex justify-center items-center">
        <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden">
          <BookingDetails />
          <div className="w-full pb-3 flex flex-row justify-around">
            <Calendar />
            <TimeSlots />
          </div>
        </div>
      </div>
      <div className="flex item-center justify-center">
        <p className="h-20">Recent Case Studies</p>
      </div>
    </>
  );
}

export default App;
