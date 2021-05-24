import React from "react";
const ViewData = (props) => {
    return (
    <div className="row">
    <div className="col-sm-12">
        <div className="col-sm-6 mx-auto" >
        <div className="card">
            <div className="card-header text-center"> Data </div>
            <div className="card-body">
            {
                props.employee.map((val, idx) => {
                                                return (
                                                    <div key={val.e_index}>

                                                        <div className="row">
                                                            <dl class="row">
                                                                <dt class="col-sm-3">Employee</dt>
                                                                <dd class="col-sm-9">#{idx + 1}</dd>
                                                                <dt class="col-sm-3">NAME</dt>
                                                                <dd class="col-sm-9">{val.name}</dd>
                                                                <dt class="col-sm-3">Designation</dt>
                                                                <dd class="col-sm-9">{val.designation}</dd>
                                                                <dt class="col-sm-3">Contact</dt>
                                                                <dd class="col-sm-9">{val.contact.map((v, i) => {
                                                                    return (<p key={v.c_index} style={{ marginBottom: '0' }}>{v.type} - {v.number}</p>)
                                                                })}</dd>
                                                                <dt class="col-sm-3">Skills</dt>
                                                                <dd class="col-sm-9">{val.skills.map((v, i) => {
                                                                    return (<span key={v.s_index}>{i === 0 ? (
                                                                        <span>{v.skills} </span>
                                                                    ) : (
                                                                        <span> , {v.skills} </span>
                                                                    )}</span>)
                                                                })}</dd>
                                                            </dl>
                                                        </div>
                                                        <hr></hr>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-sm-2"></div>
                                </div>
                            </div>
                            </div>
                            <div class="row" style={{padding:'10px'}} >
                        <div class="col text-center" >
                            <button className="btn btn-primary text-center"  onClick={()=>props.downloadFile()}>Download </button>
                        </div>
                    </div>                          
                            </div>
    )}

export default ViewData;