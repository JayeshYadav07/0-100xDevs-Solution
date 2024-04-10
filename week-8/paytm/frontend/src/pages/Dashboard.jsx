import Cookies from "js-cookie";
export default function Dashboard() {
    if (Cookies.get("token"));
    return <div>Dashboard</div>;
}
