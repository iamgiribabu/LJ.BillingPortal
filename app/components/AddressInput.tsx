'use client'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import CloseIcon from '@mui/icons-material/Close';
import {Dialog, 
DialogTitle, 
DialogContent, 
DialogActions, 
TextField, 
Button, 
IconButton 
} from '@mui/material';
import { IAddressState } from '@/store/reducers/addressReducer';

const AddressInput = ({onCancel} : {onCancel : (toogle : boolean) => void}) => {
  const dispatch = useDispatch();
  const address : IAddressState = useSelector((state: RootState) => state.address);
  const [inputAddress, setInputAddress] = useState(address)

  const handleChange = (field: string, value: string) => {
    console.log(field, value);
    setInputAddress({...inputAddress, [field]: value});
    
  };

  const handleSubmit = () => {
    console.log("inputAddress", inputAddress);
    dispatch({ type: "ADD_ADDRESS", payload: inputAddress });
    setInputAddress({
      CompanyName: '',
      AddressLine1: '',
      AddressLine2: '',
      AddressLine3: '',
      GSTIN: '',
      State: '',
      StateCode: ''
    });
    onCancel(false);
  }
    return (
      <Dialog 
        open={true} 
        onClose={() => onCancel(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ color: '#4F3D88' }}>
          Billing Address
          <IconButton
            onClick={() => onCancel(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Billed To Name"
            value={inputAddress.CompanyName}
            onChange={(e) => handleChange("CompanyName", e.target.value)}
            margin="normal"
          />
          
          <TextField
            fullWidth
            label="Address Line 1"
            value={inputAddress.AddressLine1}
            onChange={(e) => handleChange("AddressLine1", e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Address Line 2"
            value={inputAddress.AddressLine2}
            onChange={(e) => handleChange("AddressLine2", e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Address Line 3"
            value={inputAddress.AddressLine3}
            onChange={(e) => handleChange("AddressLine3", e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="GSTIN"
            value={inputAddress.GSTIN}
            onChange={(e) => handleChange("GSTIN", e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="State"
            value={inputAddress.State}
            onChange={(e) => handleChange("State", e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Code"
            value={inputAddress.StateCode}
            onChange={(e) => handleChange("StateCode", e.target.value)}
            margin="normal"
          />
        </DialogContent>

        <DialogActions sx={{ padding: 2 }}>
          <Button 
            onClick={() => onCancel(false)}
            variant="outlined"
            sx={{ color: '#4F3D88', borderColor: '#4F3D88' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={() => handleSubmit()}
            variant="contained"
            sx={{ backgroundColor: '#4F3D88', '&:hover': { backgroundColor: '#3D2E6A' } }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  };
  
  export default AddressInput;
  