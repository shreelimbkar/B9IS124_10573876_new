import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              <IonButton href="/dashboard">Browse Gallery</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="auto">
              <IonButton href="/mylocation">Get My Current Location</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
