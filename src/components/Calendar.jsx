export default function Calendar() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
      <div className="flex gap-2 text-sm text-gray-600 mb-2 justify-between max-w-sm">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-6">
        {/* Example days */}
        {Array.from({ length: 31 }, (_, i) => (
          <button
            key={i}
            className={`w-10 h-10 rounded-full ${
              i === 0 ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
