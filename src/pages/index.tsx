import * as React from 'react';
import CustomComponent from '../components/CustomComponent';

export default class Index extends React.Component {

    render() {
        return (
            <div className="index">
                <p>Hello from index.tsx</p>
                <CustomComponent />
            </div>
        )
    }

}
