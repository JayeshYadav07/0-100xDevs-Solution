const imgUrl =
	"https://imgs.search.brave.com/7JUtjn0Hk55oTUTiYS5LXkVbJ4tSAPlQkWiUYQD8Afc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9p/bnRlcm5ldC0td2Vi/L2FsaWJhYmEtY2xv/dWQtY2xhc3NpYy1j/b25zb2xlLWljb24v/dXNlci0xMjUucG5n";
export default function Card() {
	return (
		<div className="w-80 h-96 border rounded-md m-auto mt-10 leading-relaxed">
			<div className="h-40 bg-cyan-200"></div>
			<div className="relative -top-12 text-center">
				<div className="flex justify-center">
					<img
						className="h-24 w-24 p-1 border-2 rounded-full bg-white"
						src={imgUrl}
						alt="user-icon"
					/>
				</div>
				<div className="m-2">
					<b className="text-xl b">Jayesh Yadav</b>
					<p>Mumbai</p>
				</div>
				<hr />
				<div className="flex justify-around p-4">
					<div>
						<b>Followers</b>
						<p>11k</p>
					</div>
					<div>
						<b>Following</b>
						<p>400</p>
					</div>
					<div>
						<b>like</b>
						<p>70k</p>
					</div>
				</div>
			</div>
		</div>
	);
}
