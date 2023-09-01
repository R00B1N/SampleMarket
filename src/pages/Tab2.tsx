import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard color={'danger'}>
          <img alt="Silhouette of mountains" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" />
          <IonCardHeader>
            <IonCardTitle>Sample Product1</IonCardTitle>
            <IonCardSubtitle>Sold by anonymous</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>This is a product example my friend. I'm learning React JS.</IonCardContent>
          <IonCardContent>
            <IonButton onClick={sayhello}>Buy</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard color={'danger'}>
          <img alt="Silhouette of mountains" src="https://webobjects2.cdw.com/is/image/CDW/6348537?wid=784&hei=477&resMode=bilin&fit=fit,1" />
          <IonCardHeader>
            <IonCardTitle>Sample Product2</IonCardTitle>
            <IonCardSubtitle>Sold by anonymous</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={sayhello}>Buy</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard color={'danger'}>
          <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
          <IonCardHeader>
            <IonCardTitle>Sample Product3</IonCardTitle>
            <IonCardSubtitle>Sold by anonymous</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>This is a product example my friend. I'm learning React JS.</IonCardContent>
          <IonCardContent>
            <IonButton onClick={sayhello}>Buy</IonButton>
          </IonCardContent>
        </IonCard>
        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};


function sayhello() {
  alert("Hello!");
}


export default Tab2;
