import React, {Component} from 'react';
import {connect} from "react-redux";
import {fillDataFromAjax, types} from "../actions/actions";
import {API_URL} from "../client-envirement";


const Member = (props) => {
    return (
        <tr>
            <td key={"id"}>{props.member.id}</td>
            <td key={"f-name"}>{props.member.firstName}</td>
            <td key={"l-name"}>{props.member.lastName}</td>
            <td key={"phone"}>{props.member.phone}</td>
        </tr>
    );
};

class ShowAllMembers extends Component {
    data = [
        {
            "id": "1",
            "firstName": "Josefa",
            "lastName": "Cruickshank",
            "phone": "202-801-5661"
        },
        {
            "id": "2",
            "firstName": "Margie",
            "lastName": "Hilpert",
            "phone": "1-560-221-9737 x235"
        },
        {
            "id": "3",
            "firstName": "Cara",
            "lastName": "O'Keefe",
            "phone": "1-210-991-2572 x957"
        }
    ];

    componentDidMount() {
        this.props.dispatch(fillDataFromAjax(API_URL + 'member'))
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th key={"id"}>id</th>
                        <th key={"f-name"}>first name</th>
                        <th key={"l-name"}>last name</th>
                        <th key={"phone"}>phone number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{this.data.map((member, i) => <Member member={member} key={member.id}/>)}*/}
                    {this.props.members.map((member, i) => <Member member={member} key={member.id}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default connect((state)=>({members: state.members}))(ShowAllMembers);