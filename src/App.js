import "./App.css";
// import Dashboard from "./pages/Dashboard";
// import LoginPage from "./pages/LoginPage";
import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import Preloader from "./components/Preloader";
//import Category from "./pages/Category";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Category = lazy(() => import("./pages/Category"));
const Product = lazy(() => import("./pages/Product"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Profile = lazy(() => import("./pages/Profile"));
const Inbox = lazy(() => import("./pages/Inbox"));
const Review = lazy(() => import("./pages/Review"));
const Order = lazy(() => import("./pages/Order"));
const Reservation = lazy(() => import("./pages/Reservation"));

function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Switch>
          {JSON.parse(localStorage.getItem("admin-info")) === "Login" ? (
            <>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/about" component={Profile} />
              <Route exact path="/inbox" component={Inbox} />
              <Route exact path="/review" component={Review} />
              <Route exact path="/order" component={Order} />
              <Route exact path="/reservation" component={Reservation} />
            </>
          ) : (
            <Route exact path="/" component={LoginPage} />
          )}
          {/* <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Switch>
        {/* <Dashboard />
        <LoginPage /> */}
      </Suspense>
    </>
  );
}

export default App;
