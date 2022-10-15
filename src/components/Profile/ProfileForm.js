import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import globalContext from "../../context/globalContext";
const ProfileForm = () => {
  let a = useContext(globalContext);
  const setPassword = useRef();

  function passwordHandler(e) {
    e.preventDefault();
    const enteredNewPassword = setPassword.current.value;
    console.log(setPassword);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBLcVbcEHp0WzTOEGbgtx9la83ZXePamRo",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: a.tokenId,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        console.log("ok");
      } else {
        res.json().then((data) => console.log(data));
      }
    });
  }
  return (
    <form className={classes.form} onSubmit={passwordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          name="password"
          ref={setPassword}
        />
      </div>
      <div className={classes.action}>
        <button onClick={passwordHandler}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
