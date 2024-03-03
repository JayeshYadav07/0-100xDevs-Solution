# Code

```jsx
/* eslint-disable react/prop-types */
import { useCallback, useState, memo } from "react";
import { GoAlertFill } from "react-icons/go";

const URL = "https://api.github.com/users/";
export default function App() {
	const [username, setUsername] = useState("");
	const [userDetails, setUserDetails] = useState(null);
	const [loading, setLoading] = useState(true);

	// store the username
	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	//fetch details of user
	const fetchUserData = useCallback(() => {
		setLoading(true);
		let url = `${URL}${username}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setUserDetails(data);
			});
	}, [username]);

	return (
		<div>
			<div className="flex justify-center p-10">
				<input
					type="text"
					placeholder="Enter number of words"
					className="w-96 p-2 mr-2 border rounded"
					value={username}
					onChange={handleChange}
				/>
				<button
					onClick={() => fetchUserData()}
					className="border bg-black text-white rounded p-2"
				>
					Search
				</button>
			</div>
			<div>
				{loading ? (
					<div className="animate-spin rounded-full m-auto h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
				) : (
					<ShowDetail userDetails={userDetails} />
				)}
			</div>
		</div>
	);
}

// components
const ShowDetail = memo(function ShowDetail({ userDetails }) {
	return (
		<div>
			{userDetails ? (
				!userDetails.message ? (
					<ShowUser userDetails={userDetails} />
				) : (
					<ShowAlert />
				)
			) : null}
		</div>
	);
});

const ShowUser = memo(function ShowUser({ userDetails }) {
	return (
		<div className="w-80 h-96 border rounded-md m-auto mt-10 leading-relaxed shadow-xl">
			<div className="h-40 bg-cyan-200"></div>
			<div className="relative -top-12 text-center">
				<div className="flex justify-center">
					<img
						className="h-24 w-24 p-1 border-2 rounded-full bg-white"
						src={userDetails.avatar_url}
						alt="user-icon"
					/>
				</div>
				<div className="m-2">
					<b className="text-xl b">{userDetails.login}</b>
					<p>{userDetails.location}</p>
				</div>
				<hr />
				<div className="flex justify-around p-4">
					<div>
						<b>Followers</b>
						<p>{userDetails.followers}</p>
					</div>
					<div>
						<b>Following</b>
						<p>{userDetails.following}</p>
					</div>
					<div>
						<b>Repo</b>
						<p>{userDetails.public_repos}</p>
					</div>
				</div>
			</div>
		</div>
	);
});

const ShowAlert = memo(function ShowAlert() {
	return (
		<h1 className="flex items-center justify-center gap-2 text-red-800">
			Not found
			<GoAlertFill />
		</h1>
	);
});
```

## Output :
