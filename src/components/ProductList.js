import React, { useState, useEffect } from "react";
import "./css/category-list.css";
//import AddOrderSidebar from "./AddOrderSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "./classes/AppUrl";
import axios from "axios";
import ProductEditModal from "./ProductEditModal";
import ProductDeleteModal from "./ProductDeleteModal";
import ProductPopularModal from "./ProductPopularModal";
import ProductImageEditModal from "./ProductImageEditModal";

const ProductList = () => {
  const [product_name, setProductName] = useState("");
  const [product_detail, setProductDetail] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_cat_id, setProductCatId] = useState("");
  const [product_image, setProductImage] = useState("");
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
    getData1();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "categoryGet")
      .then(function (response) {
        if (response) {
          setData(response.data);

          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getData1() {
    axios
      .get(AppUrl.base_url + "productGet")
      .then(function (response) {
        if (response) {
          setData1(response.data);
          setLoader(false);
          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function productAdd() {
    setLoader(true);
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_detail", product_detail);
    formData.append("product_price", product_price);
    formData.append("product_cat_id", product_cat_id);
    formData.append("product_image", product_image);

    let result = await fetch(AppUrl.base_url + "productAdd", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setProductName("");
      setProductDetail("");
      setProductPrice("");
      //   setProductCatId("");
      setProductImage("");
      setLoader(false);
    } else {
      toast.error(result.error);
      setLoader(false);
    }

    getData1();
  }
  return (
    <>
      <ToastContainer />
      {/* add modal */}
      <div className="modal fade" id="productAddModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Product</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="text-black font-w500">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={product_name}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Product Detail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={product_detail}
                    onChange={(e) => setProductDetail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    value={product_price}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Product Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setProductImage(e.target.files[0])}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Category</label>
                  <select
                    name="cat_icon"
                    id="cat_icon"
                    className="form-control"
                    onChange={(e) => setProductCatId(e.target.value)}
                  >
                    <option value="">Select a category</option>
                    {data.map((item) => (
                      <option value={item.cat_id} key={item.cat_id}>
                        {item.cat_name}
                      </option>
                    ))}
                  </select>
                </div>
                {loader === true ? (
                  <>
                    <div class="spinner-border"></div>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => productAdd()}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Products</h4>
            {/* <i className="fa fa-codiepie add_new_icon"></i> */}
            <a
              href="true"
              className="btn btn-secondary btn-rounded"
              data-toggle="modal"
              data-target="#productAddModal"
            >
              +Add Product
            </a>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th class="width20">#</th>
                    <th>Name</th>
                    <th>Detail</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Popular</th>
                    <th>Category</th>
                    <th>Created</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data1.map((item, index) => (
                    <tr key={item.product_id}>
                      <td>
                        <strong>{index + 1}</strong>
                      </td>
                      <td>{item.product_name}</td>
                      <td>{item.product_detail}</td>
                      <td>{item.product_price} TK</td>
                      <td>
                        <img
                          className="product_list_image"
                          src={AppUrl.image_url_backend + item.product_image}
                          alt={item.product_name}
                          data-toggle="modal"
                          data-target={
                            "#productImageEditModal" + item.product_id
                          }
                        />
                      </td>
                      <td>
                        {item.product_popular === "1" ? (
                          <span class="badge light badge-success">Yes</span>
                        ) : (
                          <span class="badge light badge-danger">No</span>
                        )}
                      </td>
                      <td>{item.cat_name}</td>
                      <td>{item.product_date}</td>

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
                              data-target={
                                "#productEditModal" + item.product_id
                              }
                            >
                              Edit
                            </a>
                            <a
                              class="dropdown-item"
                              href="true"
                              data-toggle="modal"
                              data-target={
                                "#productPopularModal" + item.product_id
                              }
                            >
                              Make Popular
                            </a>
                            <a
                              class="dropdown-item"
                              href="true"
                              data-toggle="modal"
                              data-target={
                                "#productDeleteModal" + item.product_id
                              }
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                      <ProductEditModal
                        product_id={item.product_id}
                        product_name={item.product_name}
                        product_detail={item.product_detail}
                        product_price={item.product_price}
                        product_cat_id={item.product_cat_id}
                        get_data={getData1}
                        get_data_cat_list={data}
                      />
                      <ProductDeleteModal
                        product_id={item.product_id}
                        get_data={getData1}
                      />
                      <ProductPopularModal
                        product_id={item.product_id}
                        get_data={getData1}
                      />
                      <ProductImageEditModal
                        product_id={item.product_id}
                        product_image={item.product_image}
                        get_data={getData1}
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

export default ProductList;
