import React from "react";
import Container from "react-bootstrap/esm/Container";
import Blob2 from "../../components/Blobs/Blob2";
import Blob3 from "../../components/Blobs/Blob3";
import Blob4 from "../../components/Blobs/Blob4";
import Blobs from "../../components/Blobs/Blobs";
import MainFAQ from "../../layouts/MainFAQ/MainFAQ";
import MainNavigation from "../../layouts/MainNavigation/MainNavigation";
import MainUserData from "../../layouts/MainUserData/MainUserData";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <Container fluid={"sm"} className="main_page">
        <MainUserData />
        <MainNavigation />
        <MainFAQ />
      </Container>
      <Blobs />
      <Blob2 />
      <Blob3 />
      <Blob4 />
    </>
  );
};

export default HomePage;
