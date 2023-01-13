import { useSelector } from "react-redux";
import { Positions } from "../Interfaces";


export default function Details() {
    const { position } = useSelector((state: { position: Positions }) => state.position);
    return (
        <>
            {position.description}
        </>
    )
}