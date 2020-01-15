import React, { Component } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Students extends Component {
  state = {
    students: [],
    newStudent : {
      id: '',
      firstname: '',
      lastname: '',
      country: ''
    },
    editStudent : {
      id: '',
      firstname: '',
      lastname: '',
      country: ''
    },
    newStudentModal: false,
    editStudentModal: false
  }

  toggleNewStudentModal() {
    // console.log(this.state.newStudentModal);
  this.setState({
      newStudentModal: ! this.state.newStudentModal
    });

  }

  toggleEditStudentModal() {
  this.setState({
    editStudentModal: ! this.state.editStudentModal
    });

  }

  componentWillMount() {
    axios.get('http://localhost:3000/students').then((response) => {
      this.setState({
        students: response.data
      })
    });


  }

  updateStudent() {
    let {firstname, lastname, country} = this.state.editStudent;

    axios.put('http://localhost:3000/updateStudent/' + this.state.editStudent.id, {
      firstname, lastname, country
    }).then((response) =>{
      console.log(response.data)
    });
  }

  addStudent(){
    axios.post('http://localhost:3000/addStudent', this.state.newStudent).then((response) => {
      console.log(response.data)
      let {students} = this.state;
      
      console.log(students);
      
    });
  }

  editStudent(id,firstname,lastname,country) {

    this.setState({
      editStudent: {id,firstname,lastname,country},
      editStudentModal: ! this.state.editStudentModal
    });
  }


  render() {
    let students = this.state.students.map((student) => {
      return (
        <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.firstname}</td>
        <td>{student.lastname}</td> 
        <td>{student.country}</td>
        <td>
          <Button color="success" size="sm" className="mr-2" onClick={this.editStudent.bind(this, student.id,student.firstname,student.lastname,student.country)}>edit</Button>
          <Button color="danger" size="sm">del</Button>
        </td>
      </tr>
      )
    })
    return (
      <div className="App container">
        <Button color="primary" onClick={this.toggleNewStudentModal.bind(this)}>Add Student</Button>

        <Modal isOpen={this.state.newStudentModal} toggle={this.toggleNewStudentModal.bind(this)} >
          <ModalHeader toggle={this.toggleNewStudentModal.bind(this)}>Add Student</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="firstname">firstname</Label>
            <Input id="firstname" value={this.state.newStudent.firstname} onChange={(e) => {
              let { newStudent } = this.state
              newStudent.firstname = e.target.value;

              this.setState({newStudent})

            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="lastname">lastname</Label>
            <Input id="lastname" value={this.state.newStudent.lastname} onChange={(e) => {
              let { newStudent } = this.state
              newStudent.lastname = e.target.value;

              this.setState({newStudent})

            }} />
          </FormGroup>
          <FormGroup>
            <Label for="country">country</Label>
            <Input id="country" value={this.state.newStudent.country} onChange={(e) => {
              let { newStudent } = this.state
              newStudent.country = e.target.value;

              this.setState({newStudent})

            }} />
          </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addStudent.bind(this)}>Add Student</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewStudentModal.bind(this)}>Cancel</Button>
          </ModalFooter>
          </Modal>
          
        {/* Edit Modal */}
        <Modal isOpen={this.state.editStudentModal} toggle={this.toggleEditStudentModal.bind(this)} >
          <ModalHeader toggle={this.toggleEditStudentModal.bind(this)}>Update Student</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="firstname">firstname</Label>
            <Input id="firstname" value={this.state.editStudent.firstname} onChange={(e) => {
              let { editStudent } = this.state
              editStudent.firstname = e.target.value;

              this.setState({editStudent})

            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="lastname">lastname</Label>
            <Input id="lastname" value={this.state.editStudent.lastname} onChange={(e) => {
              let { editStudent } = this.state
              editStudent.lastname = e.target.value;

              this.setState({editStudent})

            }} />
          </FormGroup>
          <FormGroup>
            <Label for="country">country</Label>
            <Input id="country" value={this.state.editStudent.country} onChange={(e) => {
              let { editStudent } = this.state
              editStudent.country = e.target.value;

              this.setState({editStudent})

            }} />
          </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateStudent.bind(this)}>Update Student</Button>{' '}
            <Button color="secondary" onClick={this.toggleEditStudentModal.bind(this)}>Cancel</Button>
          </ModalFooter>
          </Modal>



        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students}
          </tbody>
        </Table>
      </div>
    );
  }

}

export default Students;