import React from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../Components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Sign Up / Log In</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}
