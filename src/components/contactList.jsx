import React from "react"
const ContactList = (props) => {
  return (
    props.contact.map((val, idx) => {
      let type = `type-${idx}-${props.eid}`, number = `number-${idx}-${props.eid}`;
      return (
        <tr key={val.c_index}>
          <td style={{padding:'0'}} >
            <input type="text" required onChange={(e)=>props.handleChange(props.eid,e)}  name="type" data-id={idx} id={type} className="form-control " placeholder="Type" />
          </td>
          <td style={{paddingTop:'0'}}>
            <input type="number" pattern="[5-9]{1}[0-9]{9}" onChange={(e)=>props.handleChange(props.eid,e)} required name="number" id={number} data-id={idx} className="form-control " placeholder="Number" />
          </td>
          <td style={{paddingTop:'0'}}>
            {
            idx===0?<button onClick={()=>props.add(props.eid)} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(props.eid,val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default ContactList;