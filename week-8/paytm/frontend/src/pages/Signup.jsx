import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Signup() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    });
    function handleClick(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/v1/user/signup", { ...data })
            .then((response) => {
                alert(response.data.msg);
                window.location.href = "/signin";
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
                    <h1 className="text-3xl  font-bold text-center">Sign Up</h1>
                    <p className="mt-2 text-gray-400 text-center">
                        Enter your information to create and account
                    </p>
                </div>
                <div className="my-4">
                    <p>First Name</p>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your First name"
                        className="border p-1 rounded w-full"
                        value={data.firstName}
                        onChange={handleChange}
                    ></input>
                    <br />
                    <p>Last Name</p>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your Last name"
                        className="border p-1 rounded w-full"
                        value={data.lastName}
                        onChange={handleChange}
                    ></input>
                    <br />
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
                        Sign Up
                    </button>
                    <p className="text-center text-bold">
                        Already have an account?
                        <Link to={"/signin"} className="underline ml-1">
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
