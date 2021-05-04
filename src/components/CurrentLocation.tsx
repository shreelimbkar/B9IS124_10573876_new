import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import { Plugins } from "@capacitor/core";
// const { Geolocation } = Plugins;
import GoogleMapReact from "google-map-react";
import "./currentLocation.css";

const AnyReactComponent = () => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-80%, -100%)",
    }}
  >
    <div className="pointer"></div>
  </div>
);

const CurrentLocation: React.FC = (props: any) => {
  const center = {
    lat: 53.3513487,
    lng: 77.6192336,
  };
  return (
    <>
      <IonContent>
        <IonTitle>location Google map</IonTitle>
        <div className="GEoMap">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB4fp1LfSB43gAJDsbcFQrMRFK1RaY2o6Y",
            }}
            defaultCenter={center}
            defaultZoom={16}
          >
            <AnyReactComponent />
          </GoogleMapReact>
        </div>
      </IonContent>
    </>
  );
};

export default CurrentLocation;
