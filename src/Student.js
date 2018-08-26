import React, { Component } from 'react';
import axios from 'axios';

class Student extends Component{
    state = {
        student: []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/web/students')
            .then(res => {
                const.student = res.data;
                this.setState({ student })
                })
    }

    render(){
        return (
            <div name="student">
                <header className="student-header">
                    <h1 className="student-title">Student list</h1>
                </header>
                <ul>
                    {this.state.student.map(student => <li>{student.name} - {student.passportNumber}</li>)}
                </ul>
            </div>
        );
    }
}

export default Student;