import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/posts';
import PostLoadingComponent from './components/postLoading';
import axiosInstance from './axios';

function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;


// // import logo from './logo.svg';
// // import './App.css';
// import React, {useEffect, useState} from 'react';
// import './App.css';
// import Posts from './components/posts';
// import PostLoadingComponent from './components/postLoading';


// function App() {
//   const PostLoading = PostLoadingComponent(Posts);
//   const [appState, setAppState] = useState({  
//     loading: false,
//     posts: null,
//   });
//   useEffect(() => {
//     setAppState({ loading: true });
//     const apiUrl = `http://127.0.0.1:8000/api/`;
//     fetch(apiUrl)
//       .then((data) => data.json())
//       .then((posts) => {
//         setAppState({ loading: false, posts: posts });
//       });
//   }, [setAppState]);
//   return (
//     <div className='App'>
//       <h1>Latest Posts</h1>
//       <PostLoading isLoading={appState.loading} posts={appState.posts} />
//     </div>
//   )
// }

// export default App;



// class connectionExample extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://127.0.0.1:8000/api';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
//   render() {
//     return <div>Example connection</div>;
//   }
// }

// export default connectionExample;

// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Hello there.<br />How do you do?</p>
//     </>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       {/* <Header /> */}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
