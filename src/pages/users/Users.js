import './Users.css';
import { DataGrid } from '@mui/x-data-grid';
import { Rows } from '../../data';
import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
function Users() {
    const [userData, setUserData] = useState(Rows)
    const deletHandler = (userId) => {
        setUserData(userData.filter((item) => item.id != userId))
    }
    const StatusIcon = ({ type }) => {
        return <CircleIcon className={'statusIcon' + type} />
    }
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 50,
        },
        {
            field: "Name",
            headerName: "Name",
            width: 400,
            renderCell: (params) => {
                return (
                    <div className='userName'>
                        <img src={params.row.image} className="userImage" />
                        <span>{params.row.name}</span>
                    </div>

                )
            }
        },
        {
            field: "age",
            headerName: "age",
            width: 150,
        },
        {
            field: "status",
            headerName: "status",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='status'>
                        <StatusIcon type={params.row.status} />
                        <span>{params.row.status}</span>

                    </div>
                )
            }
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='action'>
                        <Link to={`/users/${params.row.id}`}>
                            <button className='actionButton'>Edit</button>
                        </Link>

                        <DeleteIcon className='actionIcon'
                            onClick={() => deletHandler(params.row.id)} />
                    </div>
                )
            }
        },
    ]
    return (
        <div className="users">

            <DataGrid
                rows={userData}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
            />


        </div>
    );
}

export default Users;
<>
</>