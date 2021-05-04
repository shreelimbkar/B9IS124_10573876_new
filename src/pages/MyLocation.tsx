import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import CurrentLocation from "../components/CurrentLocation";

const MyLocation: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-text-center">
          <IonTitle>My Current Location</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CurrentLocation />
      </IonContent>
    </IonPage>
  );
};

export default MyLocation;
