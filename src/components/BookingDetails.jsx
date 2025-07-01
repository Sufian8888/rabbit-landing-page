export default function BookingDetails() {
  return (
    <div className="w-full md:w-1/3 p-6 bg-[#25c0f9] text-white">
      <img
        src="/image.png"
        alt="SaaS Logo"
        className="w-20 h-20 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">Consultation Call</h2>
      <p className="text-sm mt-2 mb-4">🕒 45 Mins</p>
      <p className="text-sm mb-6">
        Book a 45 minute free consultation call with us. By the end of the call,
        we’ll craft a personalized gameplan to help you acquire 100+ new SaaS
        users.
      </p>
    </div>
  );
}
