import React, { Component } from 'react';
import axios from 'axios';

class StudentListItem extends Component {

    state = {
        student: {}
    }

    componentDidMount(){
        axios.get("http://localhost:8080/web/student/" + this.props.id)
            .then((res)=>{
                const student = res.data;
                this.setState({student});
            })
    }


    render(){
       return(
           <div className="StudentListItem">
            <header className="StudentListItem-header">
                <h2 className="StudentListItem-title">Student<span>&#39;</span>s id: {this.state.student.id}</h2>
                <ul className="StudentListItem-ul">Name: {this.state.student.name}</ul>
                <ul className="StudentListItem-ul">Passport number: {this.state.student.passportNumber}</ul>
            </header>
        </div>
       )
    }

}

export default StudentListItem;