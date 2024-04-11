import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";

export default function Dashboard() {
    let [balance, setBalance] = useState(0);
    let [users, setUsers] = useState([]);
    let [filter, setFilter] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/account/balance", {
                headers: {
                    Authorization: "Bearer " + Cookies.get("token"),
                },
            })
            .then((response) => {
                setBalance(parseInt(response.data.balance));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [balance]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/v1/user/bulk?filter=${filter}`, {
                headers: {
                    Authorization: "Bearer " + Cookies.get("token"),
                },
            })
            .then((response) => {
                setUsers(response.data.user);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [filter]);

    if (!Cookies.get("token")) {
        alert("Login first");
        window.location.href = "/signin";
        return;
    }
    return (
        <div className="p-4">
            <div className="flex justify-between items-center my-4">
                <h1 className="text-2xl font-bold">Payments Apps</h1>
                <div className="flex gap-2 items-center">
                    <p className="text-xl font-bold ">
                        Hello, {Cookies.get("firstName")}
                    </p>
                    <p
                        onClick={() => {
                            if (!confirm("Are u sure!")) {
                                return;
                            }
                            Cookies.remove("token");
                            window.location.href = "/signin";
                        }}
                        className="rounded-full bg-gray-200 text-blue-800 py-3 px-3 cursor-pointer"
                    >
                        <FiLogOut />
                    </p>
                </div>
            </div>
            <hr />
            <div className="text-xl font-bold my-4">
                <span>Your Balance : </span>
                <span>{balance}</span>
            </div>
            <div className="my-4">
                <h1 className="text-xl font-bold">Users</h1>
                <input
                    type="text"
                    placeholder="Search users..."
                    className="border-2 border-gray-300 p-1 rounded w-full my-4"
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                    }}
                />
                <div className="userList">
                    {users.map((user) => {
                        return (
                            <div
                                className="user-item flex justify-between items-center"
                                key={user._id}
                            >
                                <div className="flex gap-2 items-center">
                                    <p className="rounded-full bg-gray-300 py-1.5 px-3">
                                        {user.firstName[0]}
                                    </p>
                                    <p className="text-xl font-bold ml-3">
                                        {user.firstName + " " + user.lastName}
                                    </p>
                                </div>
                                <Link
                                    to={`/send?name=${
                                        user.firstName + " " + user.lastName
                                    }&id=${user._id}`}
                                    className="border p-2 rounded mt-3 bg-black text-white"
                                >
                                    Send Money
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
