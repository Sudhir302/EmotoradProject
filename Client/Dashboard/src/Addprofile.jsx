import React, { useState } from "react";
import "./Addprofile.css";
import AddIcon from '@mui/icons-material/Add';

function Addprofile() {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);



  return (
    <div>
      <div id="add" onClick={openForm}>
        <div id="addIcon">
          <AddIcon />
        </div>
        <p>Add Profile</p>
      </div>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Add Profile</h2>
            <form>
              <label>
                Name:
                <input type="text" name="name" required placeholder="Enter Name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" id="email" placeholder="Enter @email" />
              </label>
              <label>
                Phone:
                <input type="tel" name="Phone" required placeholder="Phone" />
              </label>
              <div className="form-buttons">
                <button type="button" onClick={closeForm} style={{backgroundColor: "red"}} >Cancel</button>
                <button type="submit" style={{backgroundColor: "rgb(91, 178, 91)"}} >Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Addprofile;
