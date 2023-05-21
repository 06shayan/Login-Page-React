import React from 'react'
import { useState } from 'react'

function OtherInputs() {
    const [textArea, setTextArea] = useState("");
    const [selectMenu, setSelectMenu] = useState("Prefer not to tell");
    const [checked, setChecked] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        console.log('Comments: ', e.target[0].value)
        console.log('Gender: ', e.target[1].value)
        console.log('CheckBox: ', e.target[2].checked)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label style={{verticalAlign:"top"}}>Comments</label>
            <textarea value={textArea} onChange={e => setTextArea(e.target.value)} cols="30" rows="5"></textarea>
            
            <br/> <br/>

            <label>Select gender</label>
            <select value={selectMenu} onChange={e => setSelectMenu(e.target.value) } >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to tell">Prefer not to tell</option>
            </select>
            
            <br/> <br/>

            <label>Yes, I agree with the terms &nbsp;</label>
            <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)}/>

            <br/><br/>

            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default OtherInputs