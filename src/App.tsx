import React from "react";
import { Outlet } from "react-router-dom";
import "./theme/variables.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/core.css";
import { setupIonicReact, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

setupIonicReact();

function App() {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Shane's App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Outlet />
    </>
    // <div
    //   style={{
    //     margin: "0 1rem 0 1rem",
    //     paddingTop: "env(safe-area-inset-top)",
    //   }}
    // >
    //   <h1>Shane's App</h1>
    //   <Outlet></Outlet>
    // </div>
  );
}

export default App;
