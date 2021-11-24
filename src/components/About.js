import React, { useState, useEffect } from "react";
import "./css/category-list.css";
//import AddOrderSidebar from "./AddOrderSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "./classes/AppUrl";
import axios from "axios";
import AboutEditModal from "./AboutEditModal";

const About = () => {
  //   const [about_phone, setAboutPhone] = useState("");
  //   const [about_email, setAboutEmail] = useState("");
  //   const [about_location, setAboutLocation] = useState("");
  //   const [about_description, setAboutDescription] = useState("");
  //   const [about_list, setAboutList] = useState("");
  //   const [about_menu, setAboutMenu] = useState("");
  //   const [about_stuff, setAboutStuff] = useState("");
  //   const [about_customer, setAboutCustomer] = useState("");
  //   const [about_fb, setAboutFb] = useState("");
  //   const [about_insta, setAboutInsta] = useState("");
  //   const [about_twitter, setAboutTwitter] = useState("");
  //   const [about_pinterest, setAboutPinterest] = useState("");
  const [data, setData] = useState([]);
  //const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .get(AppUrl.base_url + "aboutGet")
      .then(function (response) {
        if (response) {
          setData(response.data);
          //setLoader(false);
          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   async function catAdd() {
  //     const formData = new FormData();
  //     formData.append("about_phone", about_phone);
  //     formData.append("about_email", about_email);
  //     formData.append("about_location", about_location);
  //     formData.append("about_description", about_description);
  //     formData.append("about_list", about_list);
  //     formData.append("about_menu", about_menu);
  //     formData.append("about_stuff", about_stuff);
  //     formData.append("about_customer", about_customer);
  //     formData.append("about_fb", about_fb);
  //     formData.append("about_insta", about_insta);
  //     formData.append("about_twitter", about_twitter);
  //     formData.append("about_pinterest", about_pinterest);

  //     let result = await fetch(AppUrl.base_url + "categoryAdd", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     result = await result.json();

  //     setLoader(true);

  //     if (result.success) {
  //       toast.success(result.success);
  //       setCatName("");
  //     } else {
  //       toast.error(result.error);
  //     }

  //     getData();
  //   }
  return (
    <>
      <ToastContainer />

      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">About Us</h4>
            {/* <i className="fa fa-codiepie add_new_icon"></i> */}
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>List</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Opening Hours</th>
                    <th>Menu</th>
                    <th>Staff</th>
                    <th>Customer</th>
                    <th>Fb</th>
                    <th>Instagram</th>
                    <th>Twitter</th>
                    <th>Pinterest</th>
                    <th>Delivery Charge</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.about_id}>
                      <td>{item.about_description}</td>
                      <td>{item.about_list}</td>
                      <td>{item.about_phone}</td>
                      <td>{item.about_email}</td>
                      <td>{item.about_location}</td>
                      <td>{item.about_open_hour}</td>
                      <td>{item.about_menu}</td>
                      <td>{item.about_stuff}</td>
                      <td>{item.about_customer}</td>
                      <td>{item.about_fb}</td>
                      <td>{item.about_insta}</td>
                      <td>{item.about_twitter}</td>
                      <td>{item.about_pinterest}</td>
                      <td>{item.about_delivery_charge}</td>

                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn btn-success light sharp"
                            data-toggle="dropdown"
                          >
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" cx="5" cy="12" r="2" />
                                <circle fill="#000000" cx="12" cy="12" r="2" />
                                <circle fill="#000000" cx="19" cy="12" r="2" />
                              </g>
                            </svg>
                          </button>
                          <div class="dropdown-menu">
                            <a
                              class="dropdown-item"
                              href="true"
                              data-toggle="modal"
                              data-target={"#aboutEditModal" + item.about_id}
                            >
                              Edit
                            </a>
                            {/* <a
                              class="dropdown-item"
                              href="true"
                              data-toggle="modal"
                              data-target={"#categoryDeleteModal" + item.cat_id}
                            >
                              Delete
                            </a> */}
                          </div>
                        </div>
                      </td>
                      <AboutEditModal
                        about_id={item.about_id}
                        about_description={item.about_description}
                        about_list={item.about_list}
                        about_phone={item.about_phone}
                        about_email={item.about_email}
                        about_location={item.about_location}
                        about_open_hour={item.about_open_hour}
                        about_menu={item.about_menu}
                        about_stuff={item.about_stuff}
                        about_customer={item.about_customer}
                        about_fb={item.about_fb}
                        about_insta={item.about_insta}
                        about_twitter={item.about_twitter}
                        about_pinterest={item.about_pinterest}
                        about_delivery_charge={item.about_delivery_charge}
                        get_data={getData}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
