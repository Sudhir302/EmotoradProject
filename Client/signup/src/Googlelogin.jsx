import { GoogleLogin } from "@react-oauth/google";

function Googlelogin() {
    const onSuccess = (credentialResponse) => {
    console.log("Login success! Current user:", credentialResponse);
    window.location.href = "http://localhost:5174/dashboard"
  };

  const onFailure = (error) => {
    console.log("Login failed. Error:", error);
  };

  return (
    <div id="signInButton" style={{marginLeft: "35rem"}}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
      />
    </div>
  );
}

export default Googlelogin;
