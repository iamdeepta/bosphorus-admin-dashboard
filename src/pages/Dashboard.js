import React from "react";
import AddOrderSidebar from "../components/AddOrderSidebar";
import Chatbox from "../components/Chatbox";
import ContentBody from "../components/ContentBody";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavHeader from "../components/NavHeader";
//import Preloader from "../components/Preloader";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      {/* <Preloader /> */}
      <div id="main-wrapper">
        <NavHeader />
        <Chatbox />
        <Header />
        <Sidebar />
        <AddOrderSidebar />
        <ContentBody />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
