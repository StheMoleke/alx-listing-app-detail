import { useState, useEffect } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalNights, setTotalNights] = useState(0);

  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
      setTotalNights(diff > 0 ? diff : 0);
    } else {
      setTotalNights(0);
    }
  }, [checkIn, checkOut]);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20">
      <h3 className="text-2xl font-semibold">${price} / night</h3>

      <div className="mt-6">
        <label htmlFor="check-in" className="block font-medium mb-1">Check-in</label>
        <input
          id="check-in"
          type="date"
          className="w-full border p-2 rounded"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="check-out" className="block font-medium mb-1">Check-out</label>
        <input
          id="check-out"
          type="date"
          className="w-full border p-2 rounded"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn}  // ensure check-out is not before check-in
        />
      </div>

      <div className="mt-6 text-lg font-semibold">
        Total payment: ${totalNights * price}
      </div>

      <button
        disabled={totalNights <= 0}
        className={`mt-6 w-full py-3 rounded text-white font-semibold
          ${totalNights > 0 ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
