import alertify from "alertifyjs";
import axios from "axios";
// import Swal from "sweetalert2";

let url = "https://localhost:5001/admin/api/Accounts";

export const signIn = (creds, push) => {
  return (dispatch) => {
    axios
      .post(`${url}/login`, creds)
      .then(({ data: { token, userRoleName } }) => {
        if(userRoleName?.toLowerCase() !== "admin") {
          throw new Error("is not access")
        }
        localStorage.setItem("token", token);
        dispatch({
          type: "SIGN_IN",
          token: token,
        });
        alertify.success("Welcome Admin");
      })
      .then(() => {
        push("/dashboard");
      })
      .catch((error) => {
        console.log("error", error);
        alertify.error("You cant enter here. GET OUT");
      });
  };
};
