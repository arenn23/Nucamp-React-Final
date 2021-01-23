import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  }
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(50%)",
      }}
    >
      <Card>
        <CardImg src={item[0].image} alt={item.name} />
        <CardBody>
          <CardTitle>{item[0].name}</CardTitle>
          <CardText>{item[0].description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md m-1">
          <RenderCard
            item={props.campsite}
            isLoading={props.campsitesLoading}
            errMess={props.campsitesErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promotionsLoading}
            errMess={props.promotionsErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard
            item={props.partner}
            isLoading={props.partnersLoading}
            errMess={props.partnersErrMess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
