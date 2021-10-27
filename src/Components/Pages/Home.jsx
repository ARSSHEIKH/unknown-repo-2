import { useHistory } from "react-router";

export default function Home() {

    const history = useHistory();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.mode !== "resetPassword") alert("Email is verified")
    return (
        <></>
    )
}