import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

  
  

class ItemList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount(){
        this.props.getItems();
    }



render () {
    //The state comes from redux, accessed from this.props.item. We pull items from it
    const { items} = this.props.item;
    return(
<Container>
   
    <ListGroup>
        <TransitionGroup className="Item-List">
            {items.map(({_id, name})=> (
                <CSSTransition key={_id} timeout={500}>
                    <ListGroupItem>
                        {this.props.isAuthenticated ? 
                            <Button
                        className="btn"
                        color="primary"
                        size="sm"
                        onClick={()=>{ alert('Function not implemented'); }}
                        >
                            Type 2
                        </Button>
                        
                        
                        : 
                        <Button
                        className="btn"
                        color="secondary" size="sm" disabled 
                        style={{ marginRight: '1rem' }}
                        onClick={()=>{ alert('Function not implemented'); }}
                        >
                        
                           Type 2
                        </Button>
                        }
                        {this.props.isAuthenticated ? 
                            <Button
                            className="btn"
                        color="success"
                        size="sm"
                        onClick={()=>{ alert('Function not implemented'); }}
                        >
                            Fast CSS
                        </Button>
                        
                        
                        : 
                        <Button
                        className="btn"
                        color="secondary" size="sm" disabled 
                        style={{ marginRight: '1rem' }}
                        onClick={()=>{ alert('Function not implemented'); }}
                        >
                        
                           Fast CSS
                        </Button>
                        }
                       
                        {name}
                    </ListGroupItem>
                </CSSTransition>
            ))}
        </TransitionGroup>
    </ListGroup>
</Container>
    );
}


}


const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
    
  });
export default connect(mapStateToProps, {getItems}) (ItemList);