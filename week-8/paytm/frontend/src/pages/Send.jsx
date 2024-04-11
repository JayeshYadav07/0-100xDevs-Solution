import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import Cookies from "js-cookie";
import { useState } from "react";

export default function Send() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const name = queryParams.get("name");
    const userId = queryParams.get("id");

    const [amount, setAmount] = useState(0);
    function handleClick() {
        axios
            .post(
                "http://localhost:8080/api/v1/account/transfer",
                {
                    to: userId,
                    amount: amount,
                },
                {
                    headers: {
                        Authorization: "Bearer " + Cookies.get("token"),
                    },
                }
            )
            .then((response) => {
                alert(response.data.msg);
                window.location.href = "/dashboard";
            })
            .catch((error) => {
                alert(error.response.data.msg);
            });
    }
    return (
        <div className="h-screen w-screen bg-gray-400 flex justify-center items-center">
            <div className="w-1/4 border-4 mt-10 rounded bg-white p-5  leading-loose">
                <h1 className="text-4xl my-3 font-bold text-blue-500 flex items-center justify-between ">
                    <p>Amount</p>
                    <Link to={"/dashboard"}>
                        <IoArrowBackCircleOutline />
                    </Link>
                </h1>
                <p className="text-sm">
                    sending money to <span className="font-bold">{name}</span>
                </p>
                <p className="text-xs text-gray-500">@userId : {userId}</p>
                <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="p-4 text-center outline-none w-full text-5xl my-4 "
                />
                <button
                    onClick={handleClick}
                    className="border p-1 rounded w-full mt-3 bg-black text-white"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
