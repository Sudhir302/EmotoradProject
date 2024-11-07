import "./Board.css";

function Board(){
    return(
        <div id="container">
            <h2>Board.</h2>
            <div id="links">
                <a href="#">Dashboard</a>
                <a href="#">Trancsaction</a>
                <a href="#">Schedules</a>
                <a href="#">Users</a>
                <a href="#">Settings</a>
            </div>
            <div id="contacts">
                <a href="#">Help</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
}

export default Board;