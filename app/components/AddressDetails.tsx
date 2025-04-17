'use-client'

import React, { useEffect, useState, useRef } from 'react'
import AddressInput from './AddressInput';
import { IAddressState } from '@/store/reducers/addressReducer';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';


const AddressDetails = () => {
  const addressAdded = useSelector((state: RootState) => state.address);
  console.log("addressAdded", addressAdded)
    const [listOfAddress, setListOfAddress] = useState<IAddressState[]>([]);
    const [address, setAddress] = useState<IAddressState>(addressAdded)
    const searchINput = useRef<HTMLInputElement>(null);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAddresses, setFilteredAddresses] = useState<IAddressState[]>([]);
    const [showAddressInput, setShowAddressInput] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/allClientAddress', { method : 'GET'})
        .then((response) => response.json())
        .then((data) => {
            setListOfAddress(data[0]);
            // dispatch({ type: "ADD_ADDRESS_LIST", payload: data })
            }
        ).catch((error) => {
            console.error('Error fetching addresses:', error);
        }
        );
      }, []);
    
      useEffect(() => {
        if(searchTerm != " "){
          const filterOutList =  listOfAddress.filter((addr: IAddressState) => addr.CompanyName.toLowerCase().includes(searchTerm))
        console.log("filterOutList", filterOutList)
        setFilteredAddresses([...filterOutList]);
        }
        
      }, [searchTerm, listOfAddress]);
    
      const handleAddressSelect = (addr: IAddressState) => {
        setAddress(addr);
        setFilteredAddresses([])
        setSearchTerm(''); // Clear the search input
      };

    
  return (
    <div className="rounded-2xl w-full mx-auto max-w-xl">
        <h2 className="text-2xl font-semibold text-[#4F3D88] mb-4">Billing Address</h2>
        {/* add search bar to filter from address and set the address useState  */}
        <div className="mb-4">
          <input
            ref={searchINput}
            placeholder="Search company name..."
            value={searchTerm}
            onChange={(e) =>{ 
              setSearchTerm(e.target.value)
            }}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F3D88] text-black'
          />
          <ul className="mt-0 max-h-40 overflow-y-auto border rounded p-2">
            {searchTerm &&
            filteredAddresses.map((addr: IAddressState) => (
              <li
          key={addr.ClientID}
          className="cursor-pointer w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F3D88] text-black"
          onClick={() => {
            handleAddressSelect(addr);
            
          }}
              >
          {addr.CompanyName}
              </li>
            ))}
          </ul>
          <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700" onClick={() => setShowAddressInput(true)}>
            + Add Address
          </button>
          {showAddressInput && <AddressInput onCancel={() => setShowAddressInput(false)} />}
        </div>
        {/* add address details here */}
        <div className="space-y-4 w-full">
          <div className="flex items-center justify-between">
            <label className="w-md block text-[#4F3D88] font-medium mb-1">Billed To Name :</label>
            <span className="text-black text-left w-full" >
                {address?.CompanyName}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="w-md block text-[#4F3D88] font-medium mb-1">Address Line 1: </label>
            <span className="text-black text-left w-full" >{address?.AddressLine1}</span>
            
          </div>

          <div className="flex items-center justify-between">
            <label className="w-md block text-[#4F3D88] font-medium mb-1">Address Line 2: </label>
            <span className="text-black text-left w-full" >{address?.AddressLine2}</span>
          </div>

          <div className="flex items-center justify-between">
            <label className="w-md block text-[#4F3D88] font-medium mb-1">Address Line 3: </label>
            <span className="text-black text-left w-full" >{address?.AddressLine3}</span>
          </div>
          <div className="flex items-center justify-between">
            <label className="w-md block text-[#4F3D88] font-medium mb-1">GSTIN : </label>
            <span className="text-black text-left w-full" >{address?.GSTIN}</span>
          </div>  
          <div className="flex items-center justify-between">
            <label className="w-md block text-[#4F3D88] font-medium mb-1">State : </label>
            <span className="text-black text-left w-full" >{address?.State}</span>
          </div>  
          <div className="flex items-center justify-between">
            <label className="w-md block text-[#4F3D88] font-medium mb-1">Code : </label>
            <span className="text-black w-full" >{address?.StateCode}</span>          
          </div>
        </div>
      </div>
  )
}

export default AddressDetails