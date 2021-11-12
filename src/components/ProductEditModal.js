import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "./classes/AppUrl";
//import axios from "axios";

const ProductEditModal = ({
  product_id,
  product_name,
  product_detail,
  product_price,
  product_cat_id,
  get_data,
  get_data_cat_list,
}) => {
  const [product_name_edit, setProductNameEdit] = useState(product_name);
  const [product_detail_edit, setProductDetailEdit] = useState(product_detail);
  const [product_price_edit, setProductPriceEdit] = useState(product_price);
  const [product_cat_id_edit, setProductCatIdEdit] = useState(product_cat_id);

  const [loader, setLoader] = useState(false);

  async function productUpdate(id) {
    setLoader(true);
    const formData = new FormData();
    formData.append("product_name", product_name_edit);
    formData.append("product_detail", product_detail_edit);
    formData.append("product_price", product_price_edit);
    formData.append("product_cat_id", product_cat_id_edit);

    let result = await fetch(AppUrl.base_url + "productUpdate/" + id, {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setLoader(false);
    } else {
      toast.error(result.error);
      setLoader(false);
    }

    get_data();

    let blur_bg = document.getElementById("productEditModal" + id);
    blur_bg.click();
  }
  return (
    <>
      <div className="modal fade" id={"productEditModal" + product_id}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
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
                    value={product_name_edit}
                    onChange={(e) => setProductNameEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Product Detail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={product_detail_edit}
                    onChange={(e) => setProductDetailEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    value={product_price_edit}
                    onChange={(e) => setProductPriceEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Category</label>
                  <select
                    name="cat_icon"
                    id="cat_icon"
                    className="form-control"
                    value={product_cat_id_edit}
                    onChange={(e) => setProductCatIdEdit(e.target.value)}
                  >
                    {/* <option value="">Select a category</option> */}
                    {get_data_cat_list.map((item) => (
                      <option value={item.cat_id} key={item.cat_id}>
                        {item.cat_name}
                      </option>
                    ))}
                  </select>
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
                        onClick={() => productUpdate(product_id)}
                      >
                        Update
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEditModal;
