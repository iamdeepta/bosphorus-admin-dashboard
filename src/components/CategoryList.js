import React, { useState, useEffect } from "react";
import "./css/category-list.css";
//import AddOrderSidebar from "./AddOrderSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "./classes/AppUrl";
import axios from "axios";
import CategoryEditModal from "./CategoryEditModal";
import CategoryDeleteModal from "./CategoryDeleteModal";

const CategoryList = () => {
  const [cat_name, setCatName] = useState("");
  const [cat_icon, setCatIcon] = useState("");
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "categoryGet")
      .then(function (response) {
        if (response) {
          setData(response.data);
          setLoader(false);
          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function catAdd() {
    const formData = new FormData();
    formData.append("cat_name", cat_name);
    formData.append("cat_icon", cat_icon);

    let result = await fetch(AppUrl.base_url + "categoryAdd", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    setLoader(true);

    if (result.success) {
      toast.success(result.success);
      setCatName("");
    } else {
      toast.error(result.error);
    }

    getData();
  }
  return (
    <>
      <ToastContainer />
      {/* add modal */}
      <div className="modal fade" id="categoryAddModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Category</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="text-black font-w500">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={cat_name}
                    onChange={(e) => setCatName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label for="glass_icon" className="text-black font-w500">
                    Category Icon
                  </label>
                  <div className="mt-2">
                    <input
                      type="radio"
                      id="glass_icon"
                      name="cat_icon"
                      value="fa fa-glass"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="glass_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-glass"></i>
                    </label>

                    <input
                      type="radio"
                      id="coffee_icon"
                      name="cat_icon"
                      value="fa fa-coffee"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="coffee_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-coffee"></i>
                    </label>

                    <input
                      type="radio"
                      id="eercast_icon"
                      name="cat_icon"
                      value="fa fa-eercast"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="eercast_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-eercast"></i>
                    </label>

                    <input
                      type="radio"
                      id="bullseye_icon"
                      name="cat_icon"
                      value="fa fa-bullseye"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="bullseye_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-bullseye"></i>
                    </label>

                    <input
                      type="radio"
                      id="spoon_icon"
                      name="cat_icon"
                      value="fa fa-spoon"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="spoon_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-spoon"></i>
                    </label>

                    <input
                      type="radio"
                      id="cutlery_icon"
                      name="cat_icon"
                      value="fa fa-cutlery"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="cutlery_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-cutlery"></i>
                    </label>

                    <input
                      type="radio"
                      id="stack-exchange_icon"
                      name="cat_icon"
                      value="fa fa-stack-exchange"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="stack-exchange_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-stack-exchange"></i>
                    </label>

                    <input
                      type="radio"
                      id="codiepie_icon"
                      name="cat_icon"
                      value="fa fa-codiepie"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="codiepie_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-codiepie"></i>
                    </label>

                    <input
                      type="radio"
                      id="bitbucket_icon"
                      name="cat_icon"
                      value="fa fa-bitbucket"
                      className="ml-3"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="bitbucket_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-bitbucket"></i>
                    </label>

                    <input
                      type="radio"
                      id="pie-chart_icon"
                      name="cat_icon"
                      value="fa fa-pie-chart"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="pie-chart_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-pie-chart"></i>
                    </label>

                    <input
                      type="radio"
                      id="cubes_icon"
                      name="cat_icon"
                      value="fa fa-cubes"
                      className="ml-4"
                      onChange={(e) => setCatIcon(e.target.value)}
                    ></input>
                    <label
                      for="cubes_icon"
                      className="text-black font-w500 ml-1"
                    >
                      <i className="fa fa-cubes"></i>
                    </label>
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
                        onClick={() => catAdd()}
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
            <h4 class="card-title">Categories</h4>
            {/* <i className="fa fa-codiepie add_new_icon"></i> */}
            <a
              href="true"
              className="btn btn-secondary btn-rounded"
              data-toggle="modal"
              data-target="#categoryAddModal"
            >
              +Add Category
            </a>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th class="width80">#</th>
                    <th>Name</th>
                    <th>Icon</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.cat_id}>
                      <td>
                        <strong>{index + 1}</strong>
                      </td>
                      <td>{item.cat_name}</td>
                      <td>
                        <i className={item.cat_icon}></i>
                      </td>

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
                              data-target={"#categoryEditModal" + item.cat_id}
                            >
                              Edit
                            </a>
                            <a
                              class="dropdown-item"
                              href="true"
                              data-toggle="modal"
                              data-target={"#categoryDeleteModal" + item.cat_id}
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                      <CategoryEditModal
                        cat_id={item.cat_id}
                        cat_name={item.cat_name}
                        cat_icon={item.cat_icon}
                        get_data={getData}
                      />
                      <CategoryDeleteModal
                        cat_id={item.cat_id}
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

export default CategoryList;
