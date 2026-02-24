import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">

      {open && (
        <div className="bg-white shadow-xl p-4 rounded-xl mb-3">
          Hi 👋 How can we help?
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-sage text-white w-14 h-14 rounded-full"
      >
        💬
      </button>

    </div>
  );
}
