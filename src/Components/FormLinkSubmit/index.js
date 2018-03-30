import React, { Component } from 'react';
import {Form, Input, Button} from 'reactstrap';

class FormLinkSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Form className="form-inline justify-content-center">
                <Input className="form-control mr-sm-2" type="search" placeholder="Input your link here">
                </Input>
                <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
 
export default FormLinkSubmit;