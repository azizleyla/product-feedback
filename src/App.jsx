import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RoadMap from "./pages/RoadMap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Modal from "./pages/Modal";
import FeedbackDetails from "./pages/FeedbackDetails";
import DataContext from "./contexts/dataContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/slices/authSlice";
const App = () => {
  // const [feedbacks, setFeedbacks] = useState(data.productRequests);
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  const dataStore = useContext(DataContext);
  const authState = useSelector((state) => state.auth);
  console.log(authState);
  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (!userString) return;
    const user = JSON.parse(userString);
    dispatch(
      loginUser({
        user: user.user,
        token: user.token,
      }),
    );
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        {authState.user.token ? (
          <>
            <Route path="/roadmap">
              <RoadMap feedbacks={dataStore.requests} />
            </Route>
            <Route path="/" exact>
              <Home
                feedbacks={dataStore.reducerState.requests}
                // sortRequests={sortRequests}
                // increaseVote={increaseVote}
                active={active}
                filterItems={dataStore.reducerState.requests}
              />
            </Route>
            <Route path="/newfeedback" exact>
              <Modal />
            </Route>
            <Route path="/feedbacks/:feedbackId" exact>
              <FeedbackDetails />
            </Route>
            <Redirect to="/" />
          </>
        ) : (
          <>
            <Route path="/login">
              <Login />
            </Route>
            <Redirect to="/login" />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
