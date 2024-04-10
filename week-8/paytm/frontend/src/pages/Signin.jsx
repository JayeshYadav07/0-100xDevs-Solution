import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Signin() {
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    function handleClick(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/v1/user/signin", { ...data })
            .then((response) => {
                alert(response.data.msg);
                Cookies.set("token", response.data.token, { expires: 7 });
                window.location.href = "/dashboard";
            })
            .catch((error) => {
                alert(error.response.data.msg);
            });
    }
    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <div>
            <form className=" w-1/4 m-auto p-5 leading-loose border-4 mt-10 rounded">
                <div>
                    <h1 className="text-3xl  font-bold text-center">Sign In</h1>
                    <p className="mt-2 text-gray-400 text-center">
                        Enter your information to login your account
                    </p>
                </div>
                <div className="my-4">
                    <p>Email</p>
                    <input
                        type="email"
                        name="username"
                        placeholder="Enter your Email"
                        className="border p-1 rounded w-full"
                        value={data.username}
                        onChange={handleChange}
                    ></input>
                    <br />
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="border p-1 rounded w-full"
                        value={data.password}
                        onChange={handleChange}
                    ></input>
                    <button
                        onClick={handleClick}
                        className="border p-1 rounded w-full mt-3 bg-black text-white"
                    >
                        Sign In
                    </button>
                    <p className="text-center text-bold">
                        If not have an account?
                        <Link to={"/signup"} className="underline ml-1">
                            Sign up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
