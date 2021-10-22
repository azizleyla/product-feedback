import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import data from "./data";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RoadMap from "./Pages/RoadMap";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Modal from "./Pages/Modal";
import FeedbackDetails from "./Pages/FeedbackDetails";
import AuthContext from "./contexts/authContext";
import DataContext from "./contexts/DataContext";

const App = () => {
  // const [feedbacks, setFeedbacks] = useState(data.productRequests);
  const [active, setActive] = useState("All");
  const store = useContext(AuthContext);
  const dataStore = useContext(DataContext);

  // const increaseVote = (id) => {
  //   const newFeedbacks = feedbacks.map((feedback) => {
  //     console.log(id);
  //     console.log(feedback.id);
  //     if (feedback.id === id) {
  //       return {
  //         ...feedback,
  //         upvotes: feedback.upvotes + 1,
  //         isThisUserUpvoted: true,
  //       };
  //     } else {
  //       return feedback;
  //     }
  //   });
  //   setFeedbacks(newFeedbacks);
  // };

  // const filterItems = (category) => {
  //   setActive(category);
  //   if (category === "All") {
  //     return setFeedbacks(data.productRequests);
  //   }
  //   const filteredFeedbacks = data.productRequests.filter(
  //     (item) => item.category === category
  //   );

  //   return setFeedbacks(filteredFeedbacks);
  // };
  // const sortRequests = (e) => {
  //   console.log(e.target.value)
  //   if (e.target.value === "Most Upvotes") {
  //     const sortedByUpvotes = [...data.productRequests].sort((a, b) => b.upvotes - a.upvotes);
  //     console.log(sortedByUpvotes)
  //     return setFeedbacks(sortedByUpvotes);

  //   } else if (e.target.value === "Least Upvotes") {
  //     const sortedByUpvotes = [...data.productRequests].sort((a, b) => a.upvotes - b.upvotes);

  //     return setFeedbacks(sortedByUpvotes);
  //   } else if (e.target.value === "Most Comments") {
  //     const sortedByComments = [...data.productRequests].sort(
  //       (a, b) =>
  //         (b.comments?.length ? b.comments.length : 0) -
  //         (a.comments?.length ? a.comments?.length : 0)
  //     );
  //     setFeedbacks(sortedByComments);
  //   } else if (e.target.value === "Least Comments") {
  //     console.log(data.productRequests)
  //     const sortedByComments = [...data.productRequests].sort(
  //       (a, b) =>
  //         (a.comments?.length ? a.comments.length : 0) -
  //         (b.comments?.length ? b.comments.length : 0)
  //     );
  //     return setFeedbacks(sortedByComments);
  //   }
  // };

  return (
    <BrowserRouter>
      <Switch>
        {store.isLoggedIn ? (
          <>
            <Route path="/roadmap">
              <RoadMap feedbacks={dataStore.requests} />
            </Route>
            <Route path="/" exact>
              <Home
                feedbacks={dataStore.requests}
                // sortRequests={sortRequests}
                // increaseVote={increaseVote}
                active={active}
                filterItems={dataStore.requests}
              />
            </Route>
            <Route path="/newfeedback" exact>
              <Modal />
            </Route>
            <Route path="/feedbacks/:feedbackId" exact>
              <FeedbackDetails />
            </Route>
          </>
        ) : (
          <>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
