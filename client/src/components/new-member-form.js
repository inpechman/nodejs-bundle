import React, {Component} from 'react';

class NewMemberForm extends Component {
    render() {
        return (
            <div>
                <form action="/"><input type="text"/><input type="text"/><input type="text"/>
                    <button type={"button"}>send data</button>
                </form>
            </div>
        );
    }
}


export default NewMemberForm;
