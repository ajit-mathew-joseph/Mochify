import React, { useState } from "react";
import "./SignUpPage.scss";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../firebase";
import UserDetails from "../../Components/UserDetails/UserDetails";
import UserAddress from "../../Components/UserAddress/UserAddress";
import PaymentDetails from "../../Components/PaymentDetails/PaymentDetails";

const SignUpPage = (props) => {
  // const { values } = props;

  const history = useNavigate();
  const [step, setStep] = useState(1);

  const userHandler = (e) => {
    console.log(props.userInfo);
    e.preventDefault();
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(props.userInfo.email, props.userInfo.password)
      .then((u) => {})
      .catch((err) => {
        console.log(err);
      });

      history("/");
  };

  const stepForward = () => {
    setStep(step + 1);
  };

  const stepBackward = () => {
    setStep(step - 1);
  };

  return (
    <div className="signUp">
      <h3 className="signUp__title">Start your Shopping Journey!</h3>
      <form className="signUp__form" onSubmit={userHandler}>
        {step === 1 && (
          <UserDetails
            signInHandler={props.signInHandler}
            stepForward={stepForward}
            dateHandler={props.dateHandler}
            userInfo={props.userInfo}
            phoneNumberHandler={props.phoneNumberHandler}
          />
        )}

        {step === 2 && (
          <UserAddress
            signInHandler={props.signInHandler}
            stepBackward={stepBackward}
            stepForward={stepForward}
            userInfo={props.userInfo}
            countryHandler={props.countryHandler}
            regionHandler={props.regionHandler}
          />
        )}

        {step === 3 && (
          <>
            <PaymentDetails signInHandler={props.signInHandler}
            userInfo={props.userInfo}
            cardNumHandler={props.cardNumHandler}
            expirationDateHandler={props.expirationDateHandler}
            stepBackward={stepBackward}
            />
            
          </>
        )}
      </form>
    </div>
  );
};

export default SignUpPage;
