import React from 'react';
import './mainStyle.css';
import {Button} from 'react-bootstrap';

export const Main = () =>
  <div className="container-fluid">
    <Button bsStyle="primary" type="submit">Submit</Button>
  </div>;

export default Main;
