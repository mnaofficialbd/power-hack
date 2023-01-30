import React from 'react';

const UpdateBillModal = () => {
    return (
        <div>
             <input type="checkbox" id="bill-update-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-full max-w-xs">
                    <label htmlFor="bill-update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Update Bill</h3>

                </div>
            </div>
        </div>
    );
};

export default UpdateBillModal;