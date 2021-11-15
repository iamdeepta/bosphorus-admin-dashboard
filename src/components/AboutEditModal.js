import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "./classes/AppUrl";
//import axios from "axios";

const AboutEditModal = ({
  about_id,
  about_description,
  about_list,
  about_phone,
  about_email,
  about_location,
  about_menu,
  about_stuff,
  about_customer,
  about_fb,
  about_insta,
  about_twitter,
  about_pinterest,
  get_data,
}) => {
  const [about_phone_edit, setAboutPhoneEdit] = useState(about_phone);
  const [about_email_edit, setAboutEmailEdit] = useState(about_email);
  const [about_location_edit, setAboutLocationEdit] = useState(about_location);
  const [about_description_edit, setAboutDescriptionEdit] =
    useState(about_description);
  const [about_list_edit, setAboutListEdit] = useState(about_list);
  const [about_menu_edit, setAboutMenuEdit] = useState(about_menu);
  const [about_stuff_edit, setAboutStuffEdit] = useState(about_stuff);
  const [about_customer_edit, setAboutCustomerEdit] = useState(about_customer);
  const [about_fb_edit, setAboutFbEdit] = useState(about_fb);
  const [about_insta_edit, setAboutInstaEdit] = useState(about_insta);
  const [about_twitter_edit, setAboutTwitterEdit] = useState(about_twitter);
  const [about_pinterest_edit, setAboutPinterestEdit] =
    useState(about_pinterest);
  const [loader, setLoader] = useState(false);

  async function aboutUpdate(id) {
    setLoader(true);
    const formData = new FormData();
    formData.append("about_phone", about_phone_edit);
    formData.append("about_email", about_email_edit);
    formData.append("about_location", about_location_edit);
    formData.append("about_description", about_description_edit);
    formData.append("about_list", about_list_edit);
    formData.append("about_menu", about_menu_edit);
    formData.append("about_stuff", about_stuff_edit);
    formData.append("about_customer", about_customer_edit);
    formData.append("about_fb", about_fb_edit);
    formData.append("about_insta", about_insta_edit);
    formData.append("about_twitter", about_twitter_edit);
    formData.append("about_pinterest", about_pinterest_edit);

    let result = await fetch(AppUrl.base_url + "aboutUpdate/" + id, {
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

    let blur_bg = document.getElementById("aboutEditModal" + id);
    blur_bg.click();
  }
  return (
    <>
      <div className="modal fade" id={"aboutEditModal" + about_id}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="text-black font-w500">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    // value={about_description_edit}
                    onChange={(e) => setAboutDescriptionEdit(e.target.value)}
                    rows="5"
                  >
                    {about_description_edit}
                  </textarea>
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">
                    List (use comma to separate)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_list_edit}
                    onChange={(e) => setAboutListEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_phone_edit}
                    onChange={(e) => setAboutPhoneEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_email_edit}
                    onChange={(e) => setAboutEmailEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_location_edit}
                    onChange={(e) => setAboutLocationEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Menu</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_menu_edit}
                    onChange={(e) => setAboutMenuEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Staff</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_stuff_edit}
                    onChange={(e) => setAboutStuffEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Customer</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_customer_edit}
                    onChange={(e) => setAboutCustomerEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">FB</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_fb_edit}
                    onChange={(e) => setAboutFbEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Instagram</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_insta_edit}
                    onChange={(e) => setAboutInstaEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Twitter</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_twitter_edit}
                    onChange={(e) => setAboutTwitterEdit(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="text-black font-w500">Pinterest</label>
                  <input
                    type="text"
                    className="form-control"
                    value={about_pinterest_edit}
                    onChange={(e) => setAboutPinterestEdit(e.target.value)}
                  />
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
                        onClick={() => aboutUpdate(about_id)}
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

export default AboutEditModal;
