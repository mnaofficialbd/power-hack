import React from 'react';

const DeleteBillModal = ({_id}) => {

    const handleConfirm = () => {
        fetch(`https://${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      };

    return (
        <div>
            <input type="checkbox" id="bill-delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-full max-w-xs">
                    <h3 className="text-lg font-bold">Delete Bill</h3>
                    <div className="modal-action">
                        <label htmlFor="bill-delete-modal" className="btn hover:bg-red-600 border-0" onClick={handleConfirm}>Confirm</label>
                        <label htmlFor="bill-delete-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBillModal;