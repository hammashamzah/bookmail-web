import React, { Component } from 'react';

import FormLinkSubmit from '../FormLinkSubmit';
import BookmarkedLinks from '../BookmarkedLinks';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <FormLinkSubmit />
                <BookmarkedLinks />
            </div>
        )
    }
}

export default Content;