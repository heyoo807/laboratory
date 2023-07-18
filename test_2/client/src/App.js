
import './App.css';
import Customer from './components/Customer';
import React, {Component} from 'react';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'





class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res=> this.setState({customers: res}))
      .catch(err =>console.log(err))
  }

  callApi =  async () =>{
    const response = await fetch('/api/customers')
    const body = await response.json()
  return body  }
  render(){
    
    return (
      <div >
        <Paper> 
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { this.state.customers ? this.state.customers.map(c=>{ // map을 이용할때는 key라는 props를 사용해주어야 함. 
            return (
              <Customer
                key={c.id}
                id={c.id}
                img = {c.img}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}/>
            ) 
          }) : ""
  }
        </TableBody>
        </Table>
        </Paper>

      </div>
      
);
  }
  
}

export default App;