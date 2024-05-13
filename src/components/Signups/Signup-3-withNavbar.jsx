import React from "react";
import styles from "./signup3.module.scss";
import Signup3 from "../../assets/signup-3.svg";
import { Link } from "react-router-dom";
const SignupComponent3 = () => {

  return (
    <div className={styles.mainContainer}>
    <div className={styles.imageContainer}>
        <img src={Signup3} alt="" />
      </div>
      <div className={styles.formContainer}>
        <div>
          <div className={styles.heading}>
            <h1>Sign Up</h1>
            <span>
              Already have an account?{" "}
              <Link to="signup1" className={styles.loginLink}>
                Log in
              </Link>
            </span>
          </div>
          <form className={styles.signupform}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <span className={styles.checkbox}>
              <input type="checkbox" />
              <span>
                Agree to our Terms of use and Privacy Policy
              </span>
            </span>
            <span className={styles.checkbox}>
              <input type="checkbox" />
              <span>
                Subscribe to our monthly newsletter
              </span>
            </span>
            <div className={styles.Policy}>
              By creating an account, you agree to the Terms of use and Privacy
              policy
            </div>
            <div className={styles.Submit}>
              <input type="submit" name="" value="Sign Up" id="" />
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default SignupComponent3;
