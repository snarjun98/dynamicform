import React from "react";
import ContactList from './contactList';
import SkillsList from './skillslist';
let newDate = new Date();
const EmployeeList = (props) => {
    return (
        props.employee.map((val, idx) => {
            let name = `name-${idx}`, designation = `designation-${idx}`,dateOfBirth = `dateOfBirth-${idx}`;
            return (
                <div key={val.e_index}>
                        <div className="row" style={{ marginTop: 20 }}>
                            <div className="col-sm-8 mx-auto">
                                <div className="card">
                                <div>{ idx===0?(
                                    <div className="card-header"> Employee {idx+1}</div>
                                ):(
                                    <div className="card-header"> Employee {idx+1} <span style={{float:'right',marginTop:'-8px'}}><button className="btn btn-danger" onClick={(() => props.deleteNewEmployee(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button></span></div>
                                )
                                }
                                    </div>
                                    <div className="form-group row" style={{padding:'10px'}} >
                                    <label htmlFor={name} className="col-sm-2 col-form-label">Name<span style={{color:"red"}}>*</span></label>
                                    <div className="col-sm-4">
                                    <input type="text" name="name" onChange={(e) => props.handleChange(idx, e)} required data-id={idx} id={name} className="form-control" placeholder="Enter Name" />
                                    </div>
                                    </div>
                                    <div className="form-group row" style={{padding:'10px'}} >
                                    <label htmlFor={designation}  className="col-sm-2 col-form-label">Designation<span style={{color:"red"}}>*</span></label>
                                    <div className="col-sm-4">
                                    <input type="text" name="designation" onChange={(e) => props.handleChange(idx, e)} required data-id={idx} id={designation}  className="form-control" placeholder="Enter Designation"></input>
                                    </div>
                                    </div>
                                    <div className="form-group row" style={{padding:'10px'}} >
                                    <label className="col-sm-2 col-form-label">Contact<span style={{color:"red"}}>*</span></label>
                                    <div className="col-sm-8">
                                    <table className="table" style={{marginBottom:'0'}} >
                                    <tbody style={{borderBottom:'1px solid white'}} >
                                    <ContactList add={props.addNewConactRow} handleChange={props.handleChange} delete={props.clickOnContactDelete} eid={idx} contact={props.employee[idx].contact} />
                                    </tbody>
                                    </table> 
                                    </div>
                                    </div>
                                    <div className="form-group row" style={{padding:'10px'}} >
                                    <label className="col-sm-2 col-form-label">Skills<span style={{color:"red"}}>*</span></label>
                                    <div className="col-sm-4">
                                    <table className="table" style={{marginBottom:'0'}} >
                                    <tbody style={{borderBottom:'1px solid white'}} >
                                    <SkillsList add={props.addNewSkillsRow} handleChange={props.handleChange} delete={props.clickOnSkillsDelete} eid={idx} skills={props.employee[idx].skills}  />
                                    </tbody>
                                    </table> 
                                    </div>
                                    </div>
                                    <div className="form-group row" style={{padding:'10px'}} >
                                    <label htmlFor={dateOfBirth}  className="col-sm-2 col-form-label">Date Of Birth</label>
                                    <div className="col-sm-4">
                                    <input type="date" name="dateOfBirth" onChange={(e)=>props.handleChange(idx,e)} data-id={idx} id={dateOfBirth} max={newDate} className="form-control"></input>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                </div>
            )
        })
    )
}
export default EmployeeList;