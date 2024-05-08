import axios from "axios";

const localUrl = "http://localhost:5000/";
const currentUrl = localUrl;

{
  /* TODO: FIGURE OUT WAY TO IMPLEMENT THIS FUNCTIONALITY
          TO MY APPLICATION AS I HAVE REGISTRATION ON THE
          SAME ROUTE AS LOGIN  */
}

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post(`${currentUrl}user/signin`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          // check for specific error
          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          } else if (message.toLowerCase().includes("email")) {
            setFieldError("email", message);
          }
        } else if (data.status === "SUCCESS") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  {
                    /* TODO: ADD ROUTE PAGE TO THIS*/
                  }
                  history.push("/");
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        }

        //complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios.post(`${currentUrl}user/signup`);
  };
};
