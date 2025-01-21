import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { api } from "../../../services/api"
import { options } from './orderStatus';


import { FilterOption, Filter } from './style'


export function Orders() {
    const [orders, setOrders] = useState([])//BACKUP
    const [filteredOrders, setFilteredOrder] = useState([])//value in display
    const [row, setRows] = useState([])
    const [activeStatus, setActiveStatus] = useState(0)

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get("orders")

            setOrders(data)
            setFilteredOrder(data)
            console.log(data)

        }

        loadOrders()
    }, [])

    React.useEffect(() => {
        const newRows = filteredOrders.map(item => createData(item))
        setRows(newRows)
    }, [filteredOrders])


    function createData(order) {
        return {
            name: order?.user.name,
            orderID: order._id,
            date: order.createdAt,
            status: order.status,
            products: order.products,
        };
    }

    function handleStatus(status){
        if(status.id == 0 ){
            setFilteredOrder(orders)
        }
        else{
            const newOrders = orders.filter(item => item.status === status.value)
            setFilteredOrder(newOrders)
        }

        setActiveStatus(status.id)
    }


    useEffect(() => {
        if(activeStatus === 0){
            setFilteredOrder(orders)
        }
        else{
            const StatusIndex = options.findIndex(item => item.id === activeStatus)

            const newFilteredOrders = orders.filter(item => item.status === options[StatusIndex].value)


            setFilteredOrder(newFilteredOrders)
        }
    }, [orders])


    return (
        <>
            <Filter>
                {options.map(status => (
                    <FilterOption 
                    key={status.id}
                    onClick={() => handleStatus(status)}
                    $isActiveStatus={activeStatus == status.id}>
                        {status.label}
                    </FilterOption>
                ))}
            </Filter>
            <TableContainer component={Paper} >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedidos</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data do Pedido</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.map((row) => (
                            <Row
                                key={row.orderID}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}