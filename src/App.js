import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
// import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';

import { FeedbackProvider } from './context/FeedbackContext';

// import FeedbackData from './data/FeedbackData';

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();

  //   setFeedback([newFeedback, ...feedback]);
  // };

  // const deleteFeedback = (id) => {
  //   if (window.confirm('Are you sure you want to delete this?')) {
  //     {
  //       setFeedback(feedback.filter((item) => item.id !== id));
  //     }
  //   }
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm 
                  // handleAdd={addFeedback} 
                  />
                  <FeedbackStats />
                  <FeedbackList
                    // feedback={feedback}
                    // handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />

            <Route path="/post/*" element={<Post />} />
          </Routes>

          <>
            <NavLink to={'/'} activeClassName="active">
              Home
            </NavLink>
            <NavLink to={'/post'} activeClassName="active">
              Post
            </NavLink>
          </>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

/*
Button.jsx props
Rating selected checked selected 1
Rating<label htmlFor="num1">5</label>
onClick, onChange, onSubmit
*/
