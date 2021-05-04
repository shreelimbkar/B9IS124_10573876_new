import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Welcome to My Personal Insta App</strong>
      <p>This app will manage my Personal image gallery.</p>
    </div>
  );
};

export default ExploreContainer;
