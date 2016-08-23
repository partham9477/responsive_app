var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var Pagination = require('react-bootstrap').Pagination;
var Pager = require('react-bootstrap').Pager;
var tableInstance = require('react-bootstrap').tableInstance;
var Table = require('react-bootstrap').Table;


var Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    NavDropdown = ReactBootstrap.NavDropdown,
    MenuItem = ReactBootstrap.MenuItem;

var Employee = [{name: "Jeff Chidwack",
                 age: 36,
                 shoesize: 8,
                title:"CEO"},
               {name: "Chod Jeffers",
                 age: 23,
                 shoesize: 6,
               title:"Tea Boy"},
               {name: "Charlie Todpole",
                 age: 42,
             shoesize: 9,
                title:"Accountant"}];

var AccountApplication = React.createClass({

    render: function(){
        return(
          <div>
            <HeaderClass />
           <EmployeeTable />
            <PagerShow />
           </div>
        );
    }

});

var HeaderClass = React.createClass({

    render: function(){
        return(
            <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Lloyds Bank</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Business</NavItem>
        <NavItem eventKey={2} href="#">Product</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Internet Banking</MenuItem>
          <MenuItem eventKey={3.2}>Mobile Banking</MenuItem>
          <MenuItem eventKey={3.3}>Other Product </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Online Chat</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Help and Others</NavItem>
        <NavItem eventKey={2} href="#">Sign-In</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        )
    }

});

var PagerShow = React.createClass({
   render: function(){
   return(
   <Pager>
   <Pager.Item previous href="#">Previous</Pager.Item>
   <Pager.Item    next  href="#">Next </Pager.Item>
 </Pager>

   );
}

});



 var EmployeeTable = React.createClass({
    render: function(){

      return(
          <div>
          <h2>Employee Details</h2>
          <div  className="table-responsive tablesaw tablesaw-stack" data-tablesaw-mode="stack">

             <BootstrapTable data={Employee} striped={true} hover={true} search={true} >

               <TableHeaderColumn dataField="name" isKey={true}>Name </TableHeaderColumn>
               <TableHeaderColumn dataField="age">Age</TableHeaderColumn>
               <TableHeaderColumn dataField="shoesize" >Shoe Size</TableHeaderColumn>
               <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
             </BootstrapTable>
          </div>
          </div>

            );
        },

    });



ReactDOM.render(<AccountApplication/>,document.getElementById('app'));
