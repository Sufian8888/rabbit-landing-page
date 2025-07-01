export default function TimeSlots() {
  const times = [
    "06:30 PM",
    "07:15 PM",
    "08:00 PM",
    "08:45 PM",
    "09:30 PM",
    "10:15 PM",
    "11:00 PM",
  ];

  return (
    <div className="space-y-3">
      {times.map((time, index) => (
        <button
          key={index}
          className="w-3/4 border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-50"
        >
          {time}
        </button>
      ))}
    </div>
  );
}
