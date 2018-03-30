import React, { Component } from 'react';

import {Table} from 'reactstrap';

class BookmarkedLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>Links</th>
                        <th>Date Added</th>
                        <th>Status </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="http://facebook.com">http://facebook.com</a></td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
 
export default BookmarkedLinks;