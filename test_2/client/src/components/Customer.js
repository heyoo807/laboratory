import React from 'react';
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component{
    render(){
        return(
            <div>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} width='64' height = '64' alt='test'/></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                    <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCell>
                </TableRow>
            </div>
        )
        
    }
}




export default Customer;