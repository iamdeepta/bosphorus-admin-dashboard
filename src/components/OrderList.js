import React, { useState, useEffect } from "react";
import "./css/category-list.css";
//import AddOrderSidebar from "./AddOrderSidebar";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import AppUrl from "./classes/AppUrl";
import axios from "axios";
import OrderViewModal from "./OrderViewModal";
import OrderDeliverModal from "./OrderDeliverModal";
//import CategoryDeleteModal from "./CategoryDeleteModal";

const OrderList = () => {
  //   const [cat_name, setCatName] = useState("");
  //   const [cat_icon, setCatIcon] = useState("");
  const [data, setData] = useState([]);
  //const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "orderGet")
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

  return (
    <>
      {/* <ToastContainer /> */}

      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Orders</h4>
            {/* <i className="fa fa-codiepie add_new_icon"></i> */}
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th class="width80">#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Items</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.order_id}>
                      <td>
                        <strong>{index + 1}</strong>
                      </td>
                      <td>{item.order_name}</td>
                      <td>{item.order_email}</td>
                      <td>{item.order_phone}</td>
                      <td>{item.order_address}</td>
                      <td>{item.order_total_items}</td>
                      <td>
                        {item.order_status === "0" ? (
                          <>
                            <span class="badge light badge-warning">
                              Pending
                            </span>
                          </>
                        ) : item.order_status === "1" ? (
                          <>
                            <span class="badge light badge-success">
                              Delivered
                            </span>
                          </>
                        ) : (
                          <>
                            <span class="badge light badge-danger">
                              Cancelled
                            </span>
                          </>
                        )}
                      </td>
                      <td>{item.order_date}</td>

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
                              data-target={"#orderViewModal" + item.order_id}
                            >
                              View Details
                            </a>

                            <a
                              class="dropdown-item"
                              href="true"
                              data-toggle="modal"
                              data-target={"#orderDeliverModal" + item.order_id}
                            >
                              Change Status
                            </a>

                            {/* <a
                              class="dropdown-item"
                              href="true"
                              data-toggle="modal"
                              data-target={"#orderCancelModal" + item.order_id}
                            >
                              Cancelled
                            </a> */}
                          </div>
                        </div>
                      </td>
                      <OrderViewModal
                        order_id={item.order_id}
                        order_name={item.order_name}
                        order_email={item.order_email}
                        order_phone={item.order_phone}
                        order_address={item.order_address}
                        order_city={item.order_city}
                        order_postal_code={item.order_postal_code}
                        order_total_items={item.order_total_items}
                        order_date={item.order_date}
                        order_invoice={item.order_invoice}
                        order_subtotal={item.order_subtotal}
                        get_data={getData}
                      />

                      <OrderDeliverModal
                        order_id={item.order_id}
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

export default OrderList;
