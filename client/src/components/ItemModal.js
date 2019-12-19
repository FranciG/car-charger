import React, { Component } from 'react';

//This is a container(component hooked to redux)
//This is done so show a nicer form

import { connect } from 'react-redux';
//remove this

import PropTypes from 'prop-types';
import ecar from '../ecar.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Media,
  Container
} from 'reactstrap';
var imgStyle = {
  maxWidth: "100px",
};

class ItemModal extends Component {
  
      static propTypes = {
        isAuthenticated: PropTypes.bool
      };

    

   
//Button only shows up if logged in
      render() {
        return (
          <div>
          {this.props.isAuthenticated ? (
            
            <h4 className='mb-3 ml-4'>Please select the type of charger</h4>
        ) : (
          <h4 className='mb-3 ml-4'>You are not logged in. Chargers disabled.</h4>
        )}
  



              



              </div>
        );
      }
      
}
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
  });
export default connect(mapStateToProps,
    )(ItemModal);