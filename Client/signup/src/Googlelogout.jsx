import { googleLogout } from "@react-oauth/google";

function Googlelogout() {
  const handleLogout = () => {
    googleLogout();
    console.log("Logged out successfully");
  };

  return (
    <button onClick={handleLogout} style={{marginLeft: "35rem"}}>
      Logout
    </button>
  );
}

export default Googlelogout;
