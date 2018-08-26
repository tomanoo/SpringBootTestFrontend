import React, { Component } from 'react';
import axios from 'axios';
import StudentListItem from "./StudentListItem";
import REACT_APP_API_URL from './.env';

class StudentList extends Component {

    state = {
        student: []
    }

    componentDidMount(){
        //axios.get(process.env.REACT_APP_API_URL + "students")
        // dodać plik .env i nie używać hard url (dopisać do zmiennej środowiskowej)
        axios.get("http://localhost:8080/web/students")
            .then((res)=>{
                const student = res.data;
                this.setState({student});
            })
    }


    render(){
        return(
            <div className="StudentList">
                <header className="StudentList-header">
                    <h1 className="StudentListItem">student</h1>
                </header>
                {this.state.student.map(student => <StudentListItem id={student.id}/>)}
            </div>
        )
    }

}

export default StudentList;