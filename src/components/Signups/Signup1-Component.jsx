import React from "react";
import styles from "./signup1.module.scss";
import Signup1right from "../../assets/Signup1right.svg";
import { Link } from "react-router-dom";
const Signup1Component = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <div>
          <div className={styles.heading}>
            <h1>Welcome to Design Community</h1>
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
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <span className={styles.checkbox}>
              <input type="checkbox" />
              <span>
                I want to receive emails about the product, feature updates,
                events, and marketing promotions.
              </span>
            </span>
            <div className={styles.Policy}>
              By creating an account, you agree to the Terms of use and Privacy
              policy
            </div>
            <div className={styles.Submit}>
              <input type="submit" name="" value="Create an account" id="" />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={Signup1right} alt="" />
      </div>
    </div>
  );
};

export default Signup1Component;
