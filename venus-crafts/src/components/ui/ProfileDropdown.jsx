import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function ProfileDropdown() {
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <img
        onClick={() => setOpen(!open)}
        src="https://i.pravatar.cc/40"
        className="rounded-full cursor-pointer"
      />

      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-xl p-3 space-y-2">
          <p className="cursor-pointer hover:text-sage">My Orders</p>
          <p className="cursor-pointer hover:text-sage">Settings</p>
          <p onClick={logout} className="cursor-pointer text-red-500">
            Logout
          </p>
        </div>
      )}
    </div>
  );
}
