import BookingDetails from "./components/BookingDetails";
import Calendar from "./components/Calendar";
import TimeSlots from "./components/TimeSlots";
import FAQSection from "./components/FaqSection";
function App() {
  return (
    <>
      <div className="h-screen bg-diagonal-gradient font-sans ">
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
      <div className="bg-[#25c0f9] py-16 mb-20 px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          Recent Case Studies
        </h2>

        <div className="flex flex-col gap-10 items-center">
          {[
            {
              logo: "/casestudy.avif",
              title: "Beamly.ai",
              client: "FRANK",
              before: "$12,000MRR",
              after: "$35,000MRR",
              timeline: "70 days",
              summary:
                "Worked with Frankly to scale Beamly from $12K to $35K MRR by rebuilding their outbound system, refining their offer positioning, and tightening their sales process.",
              note: "Focused on driving higher-quality demos, increasing close rates, and building predictable pipeline month-over-month.",
            },
            {
              logo: "/casestudy.avif",
              title: "NovaCRM",
              client: "LISA",
              before: "$4,500 MRR",
              after: "$15,000 MRR",
              timeline: "50 days",
              summary:
                "Helped NovaCRM revamp their user onboarding and reduce churn using personalized email automation.",
            },
            {
              logo: "/casestudy.avif",
              title: "HealthEdge",
              client: "TOM",
              before: "$7,000 MRR",
              after: "$21,000 MRR",
              timeline: "60 days",
              summary:
                "Built a new landing page and optimized mobile UI, increasing signups by 180%.",
            },
            {
              logo: "/casestudy.avif",
              title: "TutorX",
              client: "SANDY",
              before: "$3,200 MRR",
              after: "$11,500 MRR",
              timeline: "45 days",
              summary:
                "Launched paid campaigns and improved site performance for better retention.",
            },
            {
              logo: "/casestudy.avif",
              title: "QuickDesk",
              client: "RAHUL",
              before: "$5,000 MRR",
              after: "$13,000 MRR",
              timeline: "30 days",
              summary:
                "Created an automated sales funnel with lead scoring & conversion tracking.",
            },
            {
              logo: "/casestudy.avif",
              title: "FitCo",
              client: "JENNY",
              before: "$6,200 MRR",
              after: "$17,800 MRR",
              timeline: "40 days",
              summary:
                "Redesigned the mobile experience, resulting in a 60% increase in app engagement.",
            },
            // Add more case studies below as needed
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#25c0f9] to-[#25c0f9] rounded-2xl border-2 border-white p-6 w-full max-w-5xl flex flex-col md:flex-row gap-6"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <span className="bg-blue-900 text-white text-xs font-semibold px-4 py-1 rounded-md w-fit">
                  {item.client}
                </span>

                <h3 className="text-2xl text-white font-semibold">
                  {item.title}
                </h3>

                <div className="text-sm text-white">
                  <p>
                    <strong>BEFORE:</strong> {item.before}
                  </p>
                  <p>
                    <strong>AFTER:</strong> {item.after}
                  </p>
                  <p>
                    <strong>Timeline:</strong> {item.timeline}
                  </p>
                </div>

                <div className="text-sm text-white mt-2">{item.summary}</div>
                <div className="text-sm text-white">{item.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <p className="font-semibold text-4xl">Your Questions, Answered</p>
        <p className="pt-3">
          Explore the essentials of our growth acceleration
          framework,optimization approach and the
        </p>
        <p>benefits of partnering with SaasLaunch</p>
        <FAQSection />
      </div>
    </>
  );
}

export default App;
