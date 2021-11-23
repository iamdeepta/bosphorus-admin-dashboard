import React from "react";
//import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li>
              <a className="ai-icon" href="/" ariaExpanded="false">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </a>
              {/* <ul ariaExpanded="false">
                <li>
                  <a href="index.html">Dashboard</a>
                </li>
                <li>
                  <a href="orders.html">Orders</a>
                </li>
                <li>
                  <a href="order-id.html">Order ID</a>
                </li>
                <li>
                  <a href="general-customers.html">General Customers</a>
                </li>
                <li>
                  <a href="analytics.html">Analytics</a>
                </li>
                <li>
                  <a href="reviews.html">Reviews</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a href="/category" className="ai-icon" ariaExpanded="false">
                <i className="flaticon-381-settings-2"></i>
                <span className="nav-text">Categories</span>
              </a>
            </li>
            <li>
              <a href="/product" className="ai-icon" ariaExpanded="false">
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">Products</span>
              </a>
            </li>
            <li>
              <a href="/order" className="ai-icon" ariaExpanded="false">
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text">Orders</span>
              </a>
            </li>
            <li>
              <a href="/reservation" className="ai-icon" ariaExpanded="false">
                <i className="flaticon-381-layer-1"></i>
                <span className="nav-text">Reservation</span>
              </a>
            </li>
            <li>
              <a href="/gallery" className="ai-icon" ariaExpanded="false">
                <i className="flaticon-381-television"></i>
                <span className="nav-text">Gallery</span>
              </a>
            </li>
            <li>
              <a href="/review" className="ai-icon" ariaExpanded="false">
                <i className="flaticon-381-internet"></i>
                <span className="nav-text">Reviews</span>
              </a>
            </li>
            {/* <li>
              <a className="has-arrow ai-icon" href="true" ariaExpanded="false">
                <i className="flaticon-381-television"></i>
                <span className="nav-text">Apps</span>
              </a>
              <ul ariaExpanded="false">
                <li>
                  <a href="app-profile.html">Profile</a>
                </li>
                <li>
                  <a href="post-details.html">Post Details</a>
                </li>
                <li>
                  <a className="has-arrow" href="true" ariaExpanded="false">
                    Email
                  </a>
                  <ul ariaExpanded="false">
                    <li>
                      <a href="email-compose.html">Compose</a>
                    </li>
                    <li>
                      <a href="email-inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="email-read.html">Read</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="app-calender.html">Calendar</a>
                </li>
                <li>
                  <a className="has-arrow" href="true" ariaExpanded="false">
                    Shop
                  </a>
                  <ul ariaExpanded="false">
                    <li>
                      <a href="ecom-product-grid.html">Product Grid</a>
                    </li>
                    <li>
                      <a href="ecom-product-list.html">Product List</a>
                    </li>
                    <li>
                      <a href="ecom-product-detail.html">Product Details</a>
                    </li>
                    <li>
                      <a href="ecom-product-order.html">Order</a>
                    </li>
                    <li>
                      <a href="ecom-checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="ecom-invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="ecom-customers.html">Customers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a className="has-arrow ai-icon" href="true" ariaExpanded="false">
                <i className="flaticon-381-controls-3"></i>
                <span className="nav-text">Charts</span>
              </a>
              <ul ariaExpanded="false">
                <li>
                  <a href="chart-flot.html">Flot</a>
                </li>
                <li>
                  <a href="chart-morris.html">Morris</a>
                </li>
                <li>
                  <a href="chart-chartjs.html">Chartjs</a>
                </li>
                <li>
                  <a href="chart-chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="chart-sparkline.html">Sparkline</a>
                </li>
                <li>
                  <a href="chart-peity.html">Peity</a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a className="has-arrow ai-icon" href="true" ariaExpanded="false">
                <i className="flaticon-381-internet"></i>
                <span className="nav-text">Bootstrap</span>
              </a>
              <ul ariaExpanded="false">
                <li>
                  <a href="ui-accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="ui-alert.html">Alert</a>
                </li>
                <li>
                  <a href="ui-badge.html">Badge</a>
                </li>
                <li>
                  <a href="ui-button.html">Button</a>
                </li>
                <li>
                  <a href="ui-modal.html">Modal</a>
                </li>
                <li>
                  <a href="ui-button-group.html">Button Group</a>
                </li>
                <li>
                  <a href="ui-list-group.html">List Group</a>
                </li>
                <li>
                  <a href="ui-media-object.html">Media Object</a>
                </li>
                <li>
                  <a href="ui-card.html">Cards</a>
                </li>
                <li>
                  <a href="ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="ui-dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="ui-popover.html">Popover</a>
                </li>
                <li>
                  <a href="ui-progressbar.html">Progressbar</a>
                </li>
                <li>
                  <a href="ui-tab.html">Tab</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-pagination.html">Pagination</a>
                </li>
                <li>
                  <a href="ui-grid.html">Grid</a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a className="has-arrow ai-icon" href="true" ariaExpanded="false">
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">Plugins</span>
              </a>
              <ul ariaExpanded="false">
                <li>
                  <a href="uc-select2.html">Select 2</a>
                </li>
                <li>
                  <a href="uc-nestable.html">Nestedable</a>
                </li>
                <li>
                  <a href="uc-noui-slider.html">Noui Slider</a>
                </li>
                <li>
                  <a href="uc-sweetalert.html">Sweet Alert</a>
                </li>
                <li>
                  <a href="uc-toastr.html">Toastr</a>
                </li>
                <li>
                  <a href="map-jqvmap.html">Jqv Map</a>
                </li>
                <li>
                  <a href="uc-lightgallery.html">Lightgallery</a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a
                href="widget-basic.html"
                className="ai-icon"
                ariaExpanded="false"
              >
                <i className="flaticon-381-settings-2"></i>
                <span className="nav-text">Widget</span>
              </a>
            </li> */}
            {/* <li>
              <a className="has-arrow ai-icon" href="true" ariaExpanded="false">
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text">Forms</span>
              </a>
              <ul ariaExpanded="false">
                <li>
                  <a href="form-element.html">Form Elements</a>
                </li>
                <li>
                  <a href="form-wizard.html">Wizard</a>
                </li>
                <li>
                  <a href="form-editor-summernote.html">Summernote</a>
                </li>
                <li>
                  <a href="form-pickers.html">Pickers</a>
                </li>
                <li>
                  <a href="form-validation-jquery.html">Jquery Validate</a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a className="has-arrow ai-icon" href="true" ariaExpanded="false">
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Table</span>
              </a>
              <ul ariaExpanded="false">
                <li>
                  <a href="table-bootstrap-basic.html">Bootstrap</a>
                </li>
                <li>
                  <a href="table-datatable-basic.html">Datatable</a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a className="has-arrow ai-icon" href="true" ariaExpanded="false">
                <i className="flaticon-381-layer-1"></i>
                <span className="nav-text">Pages</span>
              </a>
              <ul ariaExpanded="false">
                <li>
                  <a href="page-register.html">Register</a>
                </li>
                <li>
                  <a href="page-login.html">Login</a>
                </li>
                <li>
                  <a className="has-arrow" href="true" ariaExpanded="false">
                    Error
                  </a>
                  <ul ariaExpanded="false">
                    <li>
                      <a href="page-error-400.html">Error 400</a>
                    </li>
                    <li>
                      <a href="page-error-403.html">Error 403</a>
                    </li>
                    <li>
                      <a href="page-error-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="page-error-500.html">Error 500</a>
                    </li>
                    <li>
                      <a href="page-error-503.html">Error 503</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="page-lock-screen.html">Lock Screen</a>
                </li>
              </ul>
            </li> */}
          </ul>
          {/* <div className="add-menu-sidebar">
            <img src="images/food-serving.png" alt="" />
            <p className="mb-3">Organize your menus through button bellow</p>
            <span className="fs-12 d-block mb-3">
              Lorem ipsum dolor sit amet
            </span>
            <a
              href="true"
              className="btn btn-secondary btn-rounded"
              data-toggle="modal"
              data-target="#addOrderModalside"
            >
              +Add Menus
            </a>
          </div> */}
          <div className="copyright">
            <p>
              <strong>Bosphorus Restaurant Admin Dashboard</strong> © 2021 All
              Rights Reserved
            </p>
            <p>
              Made with <span className="heart"></span> by Designhub
              Technologies
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
