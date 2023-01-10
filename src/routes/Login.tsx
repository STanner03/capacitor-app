import {
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "ionicons/icons";

function Login() {
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    await present({ message: "Loading..." });

    setTimeout(() => {
      dismiss();
      alert({
        header: "Invalid credentials",
        message: "There is no user with that name and password combination.",
        buttons: [{ text: "OK" }],
      });
    }, 1500);
    navigate("/app/dashboard");
  };

  return (
    <IonCard>
      <IonCardContent>
        <form onSubmit={onSubmit}>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>

          <div className="ion-margin-top">
            <IonButton expand="full" type="submit" color="secondary">
              <IonIcon icon={logIn} slot="start" />
              Login
            </IonButton>
          </div>
        </form>
      </IonCardContent>
    </IonCard>
  );
}

export default Login;
