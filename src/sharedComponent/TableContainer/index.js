import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import profile from '../../../src/images/3.jpg';
import { Avatar, Typography } from '@mui/material';
import _ from 'lodash';




export default function DataGridDemo() {
    const columns = [
        {
            field: 'customer',
            headerName: 'Customer',
            width: 220,
            editable: true,
            renderCell: (params) => (<div style={{
                display: 'flex', gap: 4,
                alignItems: 'center'
            }}>

                {!_.isEqual(params?.row?.customer, null) ?
                <>
                
                <Avatar sx={{ bgcolor: '#FF007F2' }}>{params?.row?.customer?.charAt(0)}</Avatar>
<Typography variant='body1' >{ params?.row?.customer}</Typography>
                </>
                    : '-'}  </div>
            )





        },
        {
            field: 'orderNo',
            headerName: 'Order No',
            width: 150,
            editable: true,

        },

        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 150,

            renderCell: (params) => (params.row.status === 'Delivered' ? <Typography style={{
                borderRadius: '12px',
                color: '#00ff00',
                background: ' #00ff0020',
                textAlign: 'center',
                fontSize: '12px',
                fontFamily: 'Poppins',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                height: '4vh',
                margin: '12px',
                fontWeight: '14px',
            }} >{params?.row?.status}</Typography> : (
                <Typography style={{
                    borderRadius: '12px',
                    color: '#FF0000',
                    background: '#FF000020',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: '12px',
                    fontFamily: 'Poppins',
                    display: 'flex',
                    justifyContent: 'center',
                    height: '4vh',
                    margin: '12px',
                    fontWeight: '14px',
                }} >{params?.row?.status}</Typography>
            )),
        }
    ];

    const rows = [
        { id: 1, amount: `${'$125.54'}`, customer: 'Jon', orderNo: 143444, image: { profile }, status: 'Delivered' },
        { id: 2, amount: `${'$128.54'}`, customer: 'Cersei', orderNo: 312215, image: { profile }, status: 'Delivered' },
        { id: 3, amount: `${'$155.54'}`, customer: 'Jaime', orderNo: 317890, image: { profile }, status: 'Pending' },
        { id: 4, amount: `${'$165.54'}`, customer: 'Arya', orderNo: 175431, image: { profile }, status: 'Cancelled' },
        { id: 5, amount: `${'$155.54'}`, customer: 'Daenerys', orderNo: 474888, image: { profile }, status: 'Delivered' },
        { id: 6, amount: `${'$135.54'}`, customer: null, orderNo: 234567, image: { profile }, status: 'Delivered' },
    ];

    return (
        <Box sx={{ height: 400, width: '100%'  }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                disableColumnMenu
            />
        </Box>
    );
}