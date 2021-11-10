import React from "react";
import AddOrderSidebar from "../components/AddOrderSidebar";
import CategoryList from "../components/CategoryList";
import Chatbox from "../components/Chatbox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavHeader from "../components/NavHeader";
//import Preloader from "../components/Preloader";
import Sidebar from "../components/Sidebar";

const Category = () => {
  return (
    <>
      <div id="main-wrapper">
        <NavHeader />
        <Chatbox />
        <Header />
        <Sidebar />
        <AddOrderSidebar />
        <div className="content-body">
          {/* <!-- row --> */}

          <div className="container-fluid">
            {/* <div class="page-titles">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="true">Table</a>
                </li>
                <li class="breadcrumb-item active">
                  <a href="true">Bootstrap</a>
                </li>
              </ol>
            </div> */}
            <div class="row">
              <CategoryList />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Category;
