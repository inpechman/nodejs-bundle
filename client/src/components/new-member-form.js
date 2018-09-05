import React, {Component} from 'react';
import {connect} from "react-redux";
import {postNewMember} from "../actions/actions";
import {API_URL} from "../envirement";

class NewMemberForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                firstName: '',
                lastName: '',
                phone: ''
            }
        }
    }

    changeHandler = (e) => {
        const formData = {...this.state.formData};
        formData[e.target.name] = e.target.value;
        this.setState({formData})
    };

    render() {
        return (
            <div>
                <form action="/" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.dispatch(postNewMember(API_URL + '/member', {...this.state.formData}))
                }}>
                    <input type="text" name={"firstName"} value={this.state.formData.firstName}
                           onChange={this.changeHandler}/>
                    <input type="text" name={"lastName"} value={this.state.formData.lastName}
                           onChange={this.changeHandler}/>
                    <input type="text" name={"phone"} value={this.state.formData.phone} onChange={this.changeHandler}/>
                    <button>send data</button>
                </form>
            </div>
        );
    }
}


export default connect(null)(NewMemberForm);
