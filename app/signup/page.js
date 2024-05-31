"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Link from "next/link";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",  
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      const post = await axios.post("http://127.0.0.1:8000/post", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      if (post.status === 200) {
        setSubmitted(true);
      }
      console.log("Response from backend:", post.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: [fieldValue],
    }));
  };
  if(submitted == true){
    return(
        <div>
            <h1 className={styles.successText}>Success!</h1>
            <h6 className={styles.successText2}>now i have ur data lol.</h6>
            <Link href="/">
                <button className={styles.mainMenuButton}>
                    Main Menu
                </button>
            </Link>
        </div>
    );
  }
  else{
    return (
        <div className={styles.formDiv}>
          <div className={styles.formTitle}>
            <h1>Sign Up</h1>
            <p>idk why, but sign yourself so that i have your data.</p>
          </div>
          <form onSubmit={submitData} className={styles.form}>
            <div className={styles.dataForm}>
              <label>Username :</label>
              <input type="text" name="name" onChange={handleInput} />
            </div>
            <div className={styles.dataForm}>
              <label>Email :</label>
              <input type="email" name="email" onChange={handleInput} />
            </div>
            <div className={styles.dataForm}>
              <label>Password :</label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                onChange={handleInput}
              />
            </div>
            <button onClick={submitData} className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      );
  }
}
