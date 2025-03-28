'use client'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

const AddressInput = () => {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.address);

  const handleChange = (field: string, value: string) => {
    console.log(field, value);
    dispatch({ type: "UPDATE_ADDRESS", payload: { field, value } });
  };
    return (
      <div className=" p-6 rounded-2xl w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-[#4F3D88] mb-4">Billing Address</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-[#4F3D88] font-medium mb-1">Billed To Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F3D88] text-black" 
              placeholder="Enter name" 
              value={address.billedToName}
              onChange={(e) => handleChange("billedToName", e.target.value)}

            />
          </div>
          
          <div>
            <label className="block text-[#4F3D88] font-medium mb-1">Address Line 1:</label>
            <input
              type="text"
              value={address.addressLine1}
              onChange={(e) => handleChange("addressLine1", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F3D88]  text-black"
              placeholder="Enter address line 1"
            />
          </div>

          <div>
            <label className="block text-[#4F3D88] font-medium mb-1">Address Line 2:</label>
            <input
              type="text"
              value={address.addressLine2}
              onChange={(e) => handleChange("addressLine2", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F3D88]  text-black"
              placeholder="Enter address line 2"
            />
          </div>

          <div>
            <label className="block text-[#4F3D88] font-medium mb-1">Address Line 3:</label>
            <input
              type="text"
              value={address.addressLine3}
              onChange={(e) => handleChange("addressLine3", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F3D88]  text-black"
              placeholder="Enter address line 3"
            />
          </div>
          <div>
            <label className="block text-[#4F3D88] font-medium mb-1">GSTIN</label>
            <input
              type="text"
              value={address.gstin}
              onChange={(e) => handleChange("gstin", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F3D88]  text-black" 
              placeholder="Enter GSTIN" 
            />
          </div>  
          <div>
            <label className="block text-[#4F3D88] font-medium mb-1">State</label>
            <input
              type="text"
              value={address.state}
              onChange={(e) => handleChange("state", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F3D88]  text-black" 
              placeholder="Enter State" 
            />
          </div>  
          <div>
            <label className="block text-[#4F3D88] font-medium mb-1">Code</label>
            <input
              type="text"
              value={address.code}
              onChange={(e) => handleChange("code", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F3D88]  text-black" 
              placeholder="Enter code"
            />
          
          </div>
        </div>
      </div>
    );
  };
  
  export default AddressInput;
  