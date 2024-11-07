import Card from "./Card";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import GroupIcon from '@mui/icons-material/Group';
import AttachmentIcon from '@mui/icons-material/Attachment';
import "./Cardcollection.css";

export default function Cardcollection(){
    return(
        <div id="collection" >
            <Card icon={ <LocalAtmIcon />} text="Total Revenue" num= "$2,129,430" />
            <Card icon={ <AttachmentIcon />} text="Total Transaction" num= "1,520" />
            <Card icon={ <ThumbUpIcon />} text="Total Likes" num= "9,721" />
            <Card icon={ <GroupIcon />} text="Total Users" num= "9721" />
        </div>
    )
} 