import React from 'react';
import EmployeeList from '../components/employeeList'
import ViewData from '../components/viewData'

class Form extends React.Component {
    state = {
        employee: [{
            e_index: Math.random(),
            name: '',
            designation: '',
            contact: [{ c_index: Math.random(), type: '', number: '' }],
            skills: [{ s_index: Math.random(), skills: '' }],
            dateOfBirth: '',
        }],
        viewData: 0
    }
    handleChange = (i,e) => {
            if (["type", "number"].includes(e.target.name)  ) {
                let contact = [...this.state.employee[i].contact]
                contact[e.target.dataset.id][e.target.name] = e.target.value;
                console.log(e.target.dataset.id,e.target.name)
            }
            if (["skills"].includes(e.target.name)) {
                let skills = [...this.state.employee[i].skills]
                skills[e.target.dataset.id][e.target.name] = e.target.value;
            }
        
        if (["name", "designation", "dateOfBirth"].includes(e.target.name)) {
            let employee = [...this.state.employee]
            employee[e.target.dataset.id][e.target.name] = e.target.value;
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewEmployee = () => {
        this.setState((prevState) => ({
            employee: [...prevState.employee, {
                e_index: Math.random(), name: '', designation: '', contact: [{ c_index: Math.random(), type: '', number: '' }],
                skills: [{ s_index: Math.random(), skills: '' }],
                dateOfBirth: '',
            }]
        }));
    }
    deleteNewEmployee = (record) => {
        this.setState((prevState) => ({
            employee: this.state.employee.filter((sindex) => record !== sindex)
        }
        ))
    }

    addNewConactRow = (eindex) => {
        if (this.state.employee[eindex].contact.length < 4) {
            this.setState((prevState) => ({
                employee: [
                    ...prevState.employee.slice(0, eindex),
                    {
                        ...prevState.employee[eindex],
                        contact: [...prevState.employee[eindex].contact, { c_index: Math.random(), type: '', number: '' }]
                    },
                    ...prevState.employee.slice(eindex + 1)
                ]
            }
            ));
        }
        else {

            alert("Maximum number Of contacts Reached")
        }

    }

    addNewSkillsRow = (eindex) => {
        this.setState((prevState) => ({
            employee: [
                ...prevState.employee.slice(0, eindex),
                {
                    ...prevState.employee[eindex],
                    skills: [...prevState.employee[eindex].skills, { s_index: Math.random(), skills: "" }],
                },
                ...prevState.employee.slice(eindex + 1)
            ]
        }
        ));
    }

    deteteContactRow = (eindex, index) => {
        if (eindex === 0) {
            this.setState((prevState) => ({
                employee: [
                    {
                        ...prevState.employee[eindex],
                        contact: this.state.employee[eindex].contact.filter((sindex) => index !== sindex),
                    },
                    ...prevState.employee.slice(eindex + 1)
                ]
            }));
        } else if (eindex >= 1) {
            this.setState((prevState) => ({
                employee: [
                    ...prevState.employee.slice(0, eindex),
                    {
                        ...prevState.employee[eindex],
                        contact: this.state.employee[eindex].contact.filter((sindex) => index !== sindex),
                    },
                    ...prevState.employee.slice(eindex + 1)
                ]
            }
            ));
        }
    }
    deteteSkillsRow = (eindex, index) => {
        if (eindex === 0) {
            this.setState((prevState) => ({
                employee: [
                    {
                        ...prevState.employee[eindex],
                        skills: this.state.employee[eindex].skills.filter((sindex) => index !== sindex),
                    },
                    ...prevState.employee.slice(eindex + 1)
                ]
            }));
        } else if (eindex >= 1) {
            this.setState((prevState) => ({
                employee: [
                    ...prevState.employee.slice(0, eindex),
                    {
                        ...prevState.employee[eindex],
                        skills: this.state.employee[eindex].skills.filter((sindex) => index !== sindex),
                    },
                    ...prevState.employee.slice(eindex + 1)
                ]
            }
            ));
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(() => ({
            viewData: 1
        }));
    }
    downloadFile = async () => {
        const edata = this.state.employee.slice(0, this.state.employee.length);
        for (let index = 0; index < edata.length; index++) {
            delete edata[index].e_index;
            for (let j = 0; j < edata[index].contact.length; j++) {
                delete edata[index].contact[j].c_index;
            }
            for (let k = 0; k < edata[index].skills.length; k++) {
                delete edata[index].skills[k].s_index;
            }
        }
        const fileName = "Employee Deatils";
        const json = JSON.stringify(edata);
        const blob = new Blob([json], { type: 'application/json' });
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        this.setState((e) => ({
            employee: [{
                e_index: Math.random(),
                name: '',
                designation: '',
                contact: [{ c_index: Math.random(), type: '', number: '' }],
                skills: [{ s_index: Math.random(), skills: '' }],
                dateOfBirth: '',
            }],
            viewData: 0
        }))
        document.body.removeChild(link);
    }

    render() {
        return (
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <EmployeeList handleChange={this.handleChange.bind(this)}  deleteNewEmployee={this.deleteNewEmployee.bind(this)} employee={this.state.employee} clickOnContactDelete={this.deteteContactRow.bind(this)} addNewConactRow={this.addNewConactRow} addNewSkillsRow={this.addNewSkillsRow} clickOnSkillsDelete={this.deteteSkillsRow} />
                {    (this.state.viewData === 1)?(
                    <div></div>
                ):(
                    <div class="container" style={{padding:'10px'}}>
                    <div class="row">
                        <div class="col text-center">
                            <button type="submit" className="btn btn-primary text-center">View Data</button>
                        </div>
                    </div>
                </div>
                )}
                </form>
                <div class="container" style={{padding:'10px'}} >
                    <div class="row">
                        <div class="col text-center">
                            <button onClick={() => this.addNewEmployee()} className="btn btn-primary text-center">Add Employee</button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        (this.state.viewData === 1) ? (
                            <ViewData employee={this.state.employee} downloadFile={this.downloadFile} />
                        ) : (
                            <div />
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Form;