import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showAllBooks} from '../../app-redux/app-actions';
import { Grid,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router';

// import './App.css';

class ViewBooks extends Component {

  constructor(props)
  {
    super(props);
    this.props.getAllBooks();
  }

  DisplayTableData(allBooks)
  {
    return allBooks.map((data)=>{
      if(data.available)
      {
        return(<Row key={data.id} className="show-grid">
          <Col md={2} className="tableCell tableData"><span className="glyphicon glyphicon-barcode"></span> {data.id}</Col>
          <Col md={4} className="tableCell tableData">{data.name}</Col>
          <Col md={3} className="tableCell tableData">{data.author}</Col>
          <Col md={2} className="tableCell tableData"><Link to={'/viewBook/'+data.id} >View Book Info</Link></Col>
        </Row>);
      }
    });
  }

  render() {
    return(<div>
      <h2 className="pageHeader">Library Inventory</h2>
      <Grid>
        <Row className="show-grid">
          <Col md={2} className="tableCell tableHead"><h5>ISBN ID</h5></Col>
          <Col md={4} className="tableCell tableHead"><h5>Book Name</h5></Col>
          <Col md={3} className="tableCell tableHead"><h5>Written By</h5></Col>
          <Col md={2} className="tableCell tableHead"><h5>Actions</h5></Col>
        </Row>
        {this.DisplayTableData(this.props.allBooks)}
      </Grid>
    </div>)

  }
}

function mapStateToProps(state,ownProps)
{
  return {allBooks:state.books}
}

function mapDispatchToProps(dispatch)
{
  return {
    getAllBooks:()=>{dispatch(showAllBooks())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBooks);
