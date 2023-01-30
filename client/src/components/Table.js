import { useState } from "react";
import AddBillModal from "./AddBillModal";
import DeleteBillModal from "./DeleteBillModal";
import UpdateBillModal from "./UpdateBillModal";

const Table = () => {
    const [bills, setBills] = useState();

    const url = `https://billing-list`
    fetch(url)
        .then((res) => res.json())
        .then((data) => setBills(data));

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="border bg-green-500 my-4 rounded flex justify-between w-10/12 mx-auto  px-7 py-2">
                    <div className="flex items-center">
                        <h2 className="font-semibold text-2xl">Billings</h2>
                        <input type="text" placeholder="Search" className="input input-bordered mx-3 w-full max-w-xs" />
                    </div>
                    <div className="">
                        <AddBillModal />
                        <label htmlFor="bill-add-modal" className="btn">Add New Bill</label>
                    </div>
                </div>

                <table className="table table-compact text-center  w-10/12 mx-auto">
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>23r434g6b758b</td>
                            <td>Md. Nurul Azam</td>
                            <td>mna@gmail.com</td>
                            <td>12345678910</td>
                            <td>23400</td>
                            <td className="flex justify-center">
                                <div className="mx-2">
                                    <UpdateBillModal />
                                    <label htmlFor="bill-update-modal" className="btn btn-outline btn-success btn-xs">Edit</label>
                                </div>
                                <div className="mx-2">
                                    <DeleteBillModal />
                                    <label htmlFor="bill-delete-modal" className="btn btn-outline btn-error btn-xs">Delete</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>23r434g6b758b</td>
                            <td>Md. Nurul Azam</td>
                            <td>mna@gmail.com</td>
                            <td>12345678910</td>
                            <td>23400</td>
                            <td><button>Edit / Delete</button></td>
                        </tr>
                        <tr>
                            <td>23r434g6b758b</td>
                            <td>Md. Nurul Azam</td>
                            <td>mna@gmail.com</td>
                            <td>12345678910</td>
                            <td>23400</td>
                            <td><button>Edit / Delete</button></td>
                        </tr>
                        <tr>
                            <td>23r434g6b758b</td>
                            <td>Md. Nurul Azam</td>
                            <td>mna@gmail.com</td>
                            <td>12345678910</td>
                            <td>23400</td>
                            <td><button>Edit / Delete</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;