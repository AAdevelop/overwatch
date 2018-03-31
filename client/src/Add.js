import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Add extends Component {
    render() {
        return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid id='form-subcomponent-shorthand-input-first-name' label='Tracking URL' placeholder='Tracking URL' />
                <Form.Input fluid id='form-subcomponent-shorthand-input-last-name' label='Price Under' placeholder='"$100"' />
            </Form.Group>
        </Form>
        )
    }
}
export default Add;