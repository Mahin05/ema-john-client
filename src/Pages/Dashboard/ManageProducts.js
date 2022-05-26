import React, { useEffect, useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageProducts = () => {
    const[deletingTools,setDeleteingTools] = useState(null);
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://infinite-island-68376.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            const url = `https://infinite-island-68376.herokuapp.com/tool/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = tools.filter(tool => tool._id !== id)
                    setTools(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className="text-3xl">Manage Products</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{tool.name}</td>
                                    <td>
                                        {/* <label onClick={setDeleteingTools(tool._id)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label> */}
                                        <button onClick={() => handleDelete(tool._id)} class="btn btn-xs">Delete</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* {deletingTools && <DeleteConfirmModal></DeleteConfirmModal>} */}
        </div>
    );
};

export default ManageProducts;