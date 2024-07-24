import { useState } from "react";
import styled from "styled-components";
import { Tabs } from "@mantine/core";

import TabLayout from "./components/TabLayout";
import TodoItems from "./components/TodoItems";
import Navbar from "./components/Navbar";
import CSS from "csstype";

const containerStyle: CSS.Properties = { padding: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [profile, setProfile] = useState({});

  console.log({ isAuth, profile });

  return (
    <div style={containerStyle}>
      <Navbar
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        profile={profile}
        setProfile={setProfile}
      />
      <Tabs tabPadding="xl" sx={{ marginTop: "2rem" }}>
        <Tabs.Tab label="All" sx={{ padding: "20px 75px" }}>
          <TabLayout uid={profile.uid}>
            <TodoItems show="all" uid={profile.uid} />
          </TabLayout>
        </Tabs.Tab>
        <Tabs.Tab label="Active" sx={{ padding: "20px 75px" }}>
          <TabLayout uid={profile.uid}>
            <TodoItems show="active" uid={profile.uid} />
          </TabLayout>
        </Tabs.Tab>
        <Tabs.Tab label="Completed" sx={{ padding: "20px 75px" }}>
          <TabLayout uid={profile.uid}>
            <TodoItems show="completed" uid={profile.uid} />
          </TabLayout>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default App;
