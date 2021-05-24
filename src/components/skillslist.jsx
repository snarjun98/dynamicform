import React from "react"
const SkillsList = (props) => {
  return (
    props.skills.map((val, idx) => {
      let skills = `skills-${idx}`;
      return (
        <tr key={val.s_index}>
          <td style={{padding:'0'}}>
            <input type="text" required name="skills" data-id={idx} onChange={(e)=>props.handleChange(props.eid,e)} id={skills} className="form-control" placeholder="Enter Skills" />
          </td>
          <td style={{paddingTop:'0'}} >
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
export default SkillsList;