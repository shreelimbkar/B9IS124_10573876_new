import {
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-text-center">
          <IonButtons slot="start">
            <IonBackButton text="Back" icon={arrowBackOutline} />
          </IonButtons>
          <IonTitle>My Personal Insta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle>Welcome to My Personal Insra App</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
