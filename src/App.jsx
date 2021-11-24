import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RoadMap from "./pages/RoadMap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FeedbackDetails from "./pages/FeedbackDetails";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/slices/authSlice";
import EditFeedback from "./pages/EditFeedback";
import NewFeedback from "./components/product-details/comments/NewFeedback";
import { loadFeedbacksStart } from "./redux/slices/feedbackSlice";

const App = () => {
  const [active] = useState("All");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const feedbackState = useSelector((state) => state.feedback2);

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

  useEffect(() => {
    dispatch(loadFeedbacksStart());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        {authState.user.token ? (
          <>
            <Route path="/roadmap">
              <RoadMap feedbacks={feedbackState.feedbacks} />
            </Route>
            <Route path="/edit">
              <EditFeedback />
            </Route>
            <Route path="/" exact>
              <Home
                feedbacks={feedbackState.feedbacks}
                // sortRequests={sortRequests}
                // increaseVote={increaseVote}
                active={active}
                filterItems={feedbackState.feedbacks}
              />
            </Route>
            <Route path="/newfeedback" exact>
              <NewFeedback />
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
