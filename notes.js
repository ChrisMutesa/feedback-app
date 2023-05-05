import React from 'react';

function App() {
  const title = 'Blog Post';
  const body = 'This is the blog post';
  const comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
  ];

  const loading = false;
  const showComments = true;
  const commentBlock = (
    <div className="comments">
      <h3>Comments({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  if (loading) return <h1>Loading...</h1>;

  // return React.createElement('div',{className:'container'}, React.createElement('h1',{},'My appli'))

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && commentBlock}
    </div>
  );
}

export default App;
