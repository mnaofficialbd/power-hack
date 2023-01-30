import axios from "axios";
import React,{useState} from "react";

const AddBillModal = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        amount: "",
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleBillAdd = event => {
        event.preventDefault();
        const url = "http://localhost:8080/api/bill-list";
        const { data: res } = axios.post(url, data);
        console.log(res.message);
    }

    return (
        <div>
            <input type="checkbox" id="bill-add-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-full max-w-xs">
                    <label htmlFor="bill-add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Add New Bill</h3>
                    <form onSubmit={handleBillAdd}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            onChange={handleChange}
                            value={data.name}
                            className="input input-bordered w-full max-w-xs mt-4"
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            value={data.email}
                            className="input input-bordered w-full max-w-xs mt-3"
                            required
                        />
                        <input
                            name="phone"
                            type="number"
                            placeholder="Phone Number"
                            onChange={handleChange}
                            value={data.phone}
                            className="input input-bordered w-full max-w-xs mt-3"
                            required
                        />
                        <input
                            name="amount"
                            type="number"
                            onChange={handleChange}
                            value={data.amount}
                            placeholder="Paid Amount"
                            className="input input-bordered w-full max-w-xs mt-3"
                            required
                        />
                        <input type="submit" value="Bill Add" className="btn w-full max-w-xs mt-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBillModal;