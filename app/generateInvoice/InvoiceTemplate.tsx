'use client'
// import { Invoice } from '@/store/reducers/allInvoiceReducer';
// import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import Image from "next/image";
// import Image from 'next/image';
// { invoice  } : {invoice : Invoice}
const InvoiceTemplate = ({state } : {state : RootState}) => {
  const { invoice, address, services } = state;
    // const  = invoice

  return (
//  max-w-4xl mx-auto shadow-md p-8
    <div className="invoice-container  border text-black  w-[8.27in] h-[11.69in] mx-auto p-15" style={{ borderColor: "#D1D5DB" , backgroundColor : "white", fontSize: "11px", fontFamily: 'Calibri, sans-serif'}}>
      {/* Header with Logo */}
      <div className="flex justify-between items-center  pb-4 mx-5">
        <Image src="/LJ lifters.jpg" alt="LJ Lifters Logo" width={122} height={122}  crossOrigin="anonymous"/>

        <div className="w-full" style={{display : "flex", flexDirection: "column", justifyContent : "between", alignItems : "start", padding : "0px 0px 0px 20px"}}>
          <div className="text-[#4F3D88]" style={{fontFamily: 'Cinzel', fontWeight : "bold", margin : "0px", fontSize : "50px"}}>LJ LIFTERS</div>
          <div className="flex flex-col text-sm items-center text-[#002060]" style={{fontFamily: 'Calibri'}}>
            <span className="m-0 text-[12px]">Mobile cranes, Farhanas, Hydra Owner & suppliers</span>
            <span className="m-0 text-[12px]">102/ Sai Pooja Apt, Padwal nagar, Wagle Estate, Thane (W) - 400604</span>
            <span className="m-0 text-[12px]">Mob : +91 70398 71918, +91 93723 98100</span>
          </div>
          
        </div>
      </div>
      <hr style={{ borderWidth: "1px" }}></hr>
      <div className="mt-4 h-10 border-[2px] " style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
        <div className="text-2xl" style = {{ fontWeight : 'bold', color : "#4F3D88", textAlign : "center", margin : "0px", padding : "0px"}}>Invoice</div>
      </div>
      <div className="flex justify-between items-start mt-1">
        {/* Billing Details */}
        <div className=" pt-4 text-sm">
          <div className="font-bold">Details of reciever/ billed to</div>
          <div className="w-100  flex justify-between"><span className=" w-40 ">Name:</span> <span className="w-full text-left">{address.billedToName}</span></div>
          <div className="w-100  flex justify-between">
            <span className=" w-40 ">Address  :</span> 
            <span className="w-full text-left flex flex-col item-start">
              <span>{address.addressLine1} </span> 
              <span>{address.addressLine2}</span> 
              <span>{address.addressLine3}</span>
            </span>
          </div>
          <div className="w-100  flex justify-between"><span className=" w-40 ">GSTIN:</span> <span className="w-full text-left">{address.gstin}</span></div>
          <div className="w-100  flex justify-between"><span className=" w-40 ">State:</span> <span className="w-full text-left">{address.state}</span></div>
          <div className="w-100  flex justify-between"><span className=" w-40 ">Code:</span> <span className="w-full text-left">{address.code}</span></div>
        </div>

        {/* Invoice Details */}
        <div className=" mt-4 text-sm">
          <div>
            <div className="w-60 flex justify-between"><div className="w-1/2 pr-1" style = {{borderRight : "1px solid", margin : "0px", display: "flex", alignItems : "center", justifyContent : "end"}}>Invoice Number</div> <div className = "w-1/2 text-left pl-1" style={{ backgroundColor: "#E5E7EB", borderLeft : "1px solid"  , display : "flex", justifyContent : "start" , alignItems : "center"}}>{invoice.invoiceNumber}</div></div>
            <div className="w-60 flex justify-between"><div className="w-1/2 pr-1" style = {{borderRight : "1px solid", margin : "0px", display: "flex", alignItems : "center", justifyContent : "end"}}>Invoice Date</div> <div className = "w-1/2 text-left pl-1" style={{ backgroundColor: "#b7e1cd", borderLeft : "1px solid"  , display : "flex", justifyContent : "start" , alignItems : "center"}}>{invoice.invoiceDate}</div></div>
            <div className="w-60 flex justify-between"><div className="w-1/2 pr-1" style = {{borderRight : "1px solid", margin : "0px", display: "flex", alignItems : "center", justifyContent : "end"}}>Place of Supply</div> <div className = "w-1/2 text-left pl-1" style={{borderLeft : "1px solid" , display : "flex", justifyContent : "start" , alignItems : "center"}}>{invoice.placeOfSupply}</div></div>
            <div className="w-60 flex justify-between"><div className="w-1/2 pr-1" style = {{borderRight : "1px solid", margin : "0px", display: "flex", alignItems : "center", justifyContent : "end"}}>PO No</div> <div className = "w-1/2 text-left pl-1" style={{borderLeft : "1px solid" , display : "flex", justifyContent : "start" , alignItems : "center"}}>{invoice.poNo || 'NA'}</div></div>
            <div className="w-60 flex justify-between"><div className="w-1/2 pr-1" style = {{borderRight : "1px solid", margin : "0px", display: "flex", alignItems : "center", justifyContent : "end"}}>Crane Reg</div> <div className = "w-1/2 text-left pl-1" style={{borderLeft : "1px solid" , display : "flex", justifyContent : "start" , alignItems : "center"}}>{invoice.craneReg}</div></div>
          </div>
        </div>
      </div>
      
      {/* Service Entry Table */}
      <table className="w-full text-sm border" style={{marginTop: "40px"}}>
        <thead>
          <tr style={{ backgroundColor: "#dadada", height: "20px"}}>
            <th className="border-t border-l border-r font-bold" style={{ height: "20px", width: "88px" }}>Sr No</th>
            <th className="border-t border-l border-r font-bold" style={{ height: "20px", width: "264px" }}>Description</th>
            <th className="border-t border-l border-r font-bold" style={{ height: "20px" }}>HSN/SAC</th>
            <th className="border-t border-l border-r font-bold" style={{ height: "20px" }}>Qty in Shift</th>
            <th className="border-t border-l border-r font-bold" style={{ height: "20px" }}>Rate</th>
            <th className="border-t border-l border-r font-bold" style={{ height: "20px" }}>Taxable Value</th>
          </tr>
        </thead>
        <tbody>
          {services.services.map((service, index) => (
            <tr key={index} style={{ height: "20px"}}>
              <td className="border-l border-r text-center" style={{ height: "20px", width: "88px" }}>{index+1}</td>
              <td className="border-l border-r pl-1" style={{ height: "20px", width: "264px" }}>{service.description}</td>
              <td className="border-l border-r text-center" style={{ height: "20px", width: "88px" }}>{service.hsnSac}</td>
              <td className="border-l border-r text-center" style={{ height: "20px", width: "88px" }}>{service.qty}</td>
              <td className="border-l border-r text-right" style={{ height: "20px", width: "88px" }}>₹{Number(service.rate).toFixed(2)}</td>
              <td className="border-l border-r text-right" style={{ height: "20px", width: "88px" }}>₹{Number(service.taxableValue).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <div className ="total-bill-details w-full flex justify-between item-center border">
        <div className = "flex flex-col justify-between item-center text-sm w-full" >
          <div className="w -full flex justify-between item-center">
            <div className = "font-bold text-sm pl-1" style ={{width : "98.31px"}}>
              Total invoice in Words :
            </div>
            <span className="w-full text-sm">Two lakh sixty thousand forty eight rupess and forty paise</span>
          </div>
          <div className="w-full border-t font-bold">
            <div className = "GST-label flex justify-start item-center">
              <div className = " text-sm pl-1" style ={{width : "98.31px"}}>
                GST NO :
              </div>
              <span className="w-full text-sm">27AAHFL2345R1Z4</span>

            </div>
            <div className="Pan-label flex justify-start item-center">
              <div className = " text-sm pl-1" style ={{width : "98.31px"}}>
                PAN No :
              </div>
              <span className="w-full text-sm">Maharashtra</span>
            </div>
            
          </div>
          

        </div>
        
        
        <div className = "flex flex-col justify-start item-center text-sm" style ={{width : "171.72px"}}>
          <div className="flex justify-between item-center pl-1 border-l border-b">
            <span style={{width : "85px"}}>Total amount before tax</span>
            <span className="border-l font-bold text-right" style={{width : "86.45px"}}>₹220,380.00</span>
          </div>
          <div className="flex justify-between item-center pl-1 border-l border-b">
            <span style={{width : "85px"}}>CGST @ 9%</span>
            <span className="border-l  text-right" style={{width : "86.45px"}}>₹19,834.20</span>
          </div>
          <div className="flex justify-between item-center pl-1 border-l border-b">
            <span style={{width : "85px"}}>SGST @ 9%</span>
            <span className="border-l text-right" style={{width : "86.45px"}}>₹19,834.20</span>
          </div>
          <div className="flex justify-between item-center pl-1 border-l border-b">
            <span style={{width : "85px"}}>IGST @ 18%</span>
            <span className="border-l  text-right" style={{width : "86.45px"}}></span>
          </div>
          <div className="flex justify-between item-center pl-1 border-l">
            <span style={{width : "85px"}}>Net Amt after Tax</span>
            <span className="border-l font-bold text-right" style={{width : "86.45px"}}>₹260,048.40</span>
          </div>
        </div>
      </div>
      <div className="vendor-signature flex justify-between items-start mt-1 text-sm">
        <div className="bank-details">
          <span className="font-bold">Bank Details</span>
          <span className="text-sm flex" style={{marginTop : "0px", marginBottom : "0px"}}><p className="w-[88px] font-bold">Bank Name:</p> HDFC Bank</span>
          <span className="text-sm flex" style={{marginTop : "0px", marginBottom : "0px"}}><p className="w-[88px] font-bold">Branch:</p> Wagle Estate</span>
          <span className="text-sm flex" style={{marginTop : "0px", marginBottom : "0px"}}><p className="w-[88px] font-bold">A/C No:</p> 12345678901234</span>
          <span className="text-sm flex" style={{marginTop : "0px", marginBottom : "0px"}}><p className="w-[88px] font-bold">IFSC Code:</p> HDFC0001234</span>
        </div>
        <div className="signature h-[150px] flex flex-col justify-start items-end">
          <div className="flex flex-col justify-start items-end h-full">
          <span className="font-bold">Certified that the particular given above are true and correct</span>
          <span >For <b>LJ LIFTERS</b></span>
          </div>
          <span>
            <Image src="/sign_transparent.png" alt="signature" width={100} height={100} crossOrigin="anonymous"/>
          </span>
          
          <span className="text-sm flex"><p className="font-bold">Authorised Signatory</p></span>
        </div>

      </div>

      <div className="footer text-sm flex flex-col justify-center items-center mt-4">
          <span>Thank you for having service from LJ LIFTERS</span>
          <span>Please make payment within 15 days of invoice submitted.</span>
      </div>
  </div>


   
  );
};

export default InvoiceTemplate;
