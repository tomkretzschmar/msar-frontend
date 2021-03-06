import React from 'react'
import _ from 'lodash'
import {
    Segment,
  } from 'semantic-ui-react'
import FooterComponent from './components/FooterComponent'
import MenuComponent from './components/MenuComponent'
import UploadComponent from './components/UploadComponent'

export default class UploadPage extends React.Component {

    render() {

        return (
            <div id='page'>
                <Segment vertical className='segmentUpload'>
                    <MenuComponent activeItem='upload'/>

                    <UploadComponent/>

                </Segment>

                <FooterComponent />
            </div>
        );
    }
}