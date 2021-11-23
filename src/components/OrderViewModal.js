import React, { useState, useEffect } from "react";
//import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import AppUrl from "./classes/AppUrl";
import axios from "axios";

const OrderViewModal = ({
  order_id,
  order_name,
  order_email,
  order_phone,
  order_address,
  order_city,
  order_postal_code,
  order_total_items,
  order_date,
  order_invoice,
  order_subtotal,
  get_data,
}) => {
  const [datas, setDatas] = useState([]);
  //const [loader, setLoader] = useState(false);

  useEffect(() => {
    getDatas();
  }, []);

  function getDatas() {
    axios
      .get(AppUrl.base_url + "orderGetFood/" + order_invoice)
      .then(function (response) {
        if (response) {
          setDatas(response.data);
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
      <div className="modal fade" id={"orderViewModal" + order_id}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">INVOICE #{order_invoice}</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="text-black font-w400">
                    Name: {order_name}
                  </label>
                  <br />
                  <label className="text-black font-w200">
                    Phone: {order_phone}
                  </label>
                  <br />
                  <label className="text-black font-w200">
                    Email: {order_email}
                  </label>
                  <br />
                  <label className="text-black font-w200">
                    Address: {order_address}, Postal Code: {order_postal_code},
                    City: {order_city}
                  </label>
                  <br />
                  <label className="text-black font-w200">
                    Total Items: {order_total_items}
                  </label>
                  <br />
                  <label className="text-black font-w200">
                    Order Date: {order_date}
                  </label>
                  <br />
                </div>

                <div className="order_list_view_div">
                  <label className="text-black font-w400">Ordered Items</label>
                  <div className="order_list_view">
                    <table className="table">
                      <thead>
                        <tr>
                          <td>
                            <b>Food Name</b>
                          </td>
                          <td>
                            <b>Price</b>
                          </td>
                          <td>
                            <b>Quantity</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {datas.map((item) => (
                          <tr key={item.order_list_id}>
                            <td>{item.order_list_food}</td>
                            <td>{item.order_list_price}</td>
                            <td>{item.order_list_quantity}</td>
                          </tr>
                        ))}
                      </tbody>

                      <tr>
                        <td>
                          <b>Subtotal:</b>
                        </td>
                        <td>
                          <b>{order_subtotal}</b>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                {/* <div className="form-group">
                  <label className="text-black font-w500">Category Icon</label>
                  <select
                    name="cat_icon"
                    id="cat_icon"
                    className="form-control"
                  >
                    <option value="">Select an icon</option>
                    <option value="glass">
                      <i className="fas fa-glass"></i>
                    </option>
                  </select>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderViewModal;
