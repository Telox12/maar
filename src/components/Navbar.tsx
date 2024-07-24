import styled from "styled-components";
import { Avatar } from "@mantine/core";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { showNotification } from "@mantine/notifications";
import CSS from "csstype";

function Navbar({ isAuth, setIsAuth, profile, setProfile }) {
  const navStyle: CSS.Properties = {
    position: "relative",
    width: "100%",
    textAlign: "center",
  };

  const navProfileStyle: CSS.Properties = {
    position: "absolute",
    right: "0",
    top: "0",
  };

  return (
    <div style={navStyle}>
      <h1>#todo app</h1>
      <div style={navProfileStyle}>
        <Avatar onClick={() => {}} radius="md" />
      </div>
    </div>
  );
}

export default Navbar;
