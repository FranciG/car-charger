import React, { Component, Fragment  } from 'react';
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
import RegisterModal from './auth/RegisterModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import battery from '../battery.png';
import ecar from '../ecar.png';

var imgStyle = {
  maxWidth: "50px",
};

class AppNavbar extends Component {

    state = {
        isOpen:false
     } 
     static propTypes = {
      auth: PropTypes.object.isRequired
    };
//Switching isOpen to their opposite state.
     toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
        }

        render() {
//If is authenticated, will show username

const { isAuthenticated, user } = this.props.auth;
//Links for authenticated users
const authLinks = (
  <Fragment>
    <NavItem>
      <span className='navbar-text mr-3'>
        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
      </span>
    </NavItem>
    <NavItem>
      <Logout />
    </NavItem>
  </Fragment>
);
//Accessible links for guests
const guestLinks = (
  <Fragment>
    <NavItem>
      <RegisterModal />
    </NavItem>
    <NavItem>
      <LoginModal />
    </NavItem>
  </Fragment>
);

            return (
            <div>
                <Navbar color="info" dark expand="sm" className="mb-5">

                <Container>
                <Media>
      
      <Media style={imgStyle} object src={ecar} alt="battery" />
    </Media> 
            <NavbarBrand  href='/'>Charge-a-car </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
             
              {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
         
        
          <Media>
      
        <Media style={imgStyle} object src={battery} alt="battery" />
      </Media>
                </Navbar>
            </div>
            );
        } 

    }
    const mapStateToProps = state => ({
      auth: state.auth
    });
    
    export default connect(
      mapStateToProps,
      null
    )(AppNavbar);