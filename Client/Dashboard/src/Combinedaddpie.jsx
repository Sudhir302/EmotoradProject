import Addprofile from "./Addprofile";
import Piechart from "./Piechart";
import "./Combinedaddpie.css"

export default function Combinedaddpie(){
    return(
        <div id="combine">
            <Piechart />
            <Addprofile />
        </div>
    )
}