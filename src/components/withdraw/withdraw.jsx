import { useEffect } from "react"
import { getWithdrawRequests, updateWithdrawRequest } from "../../services/CommonServices"
import { useState } from "react"
import { Button, Table, Toast } from "react-bootstrap"
import { BiCheck, BiX } from "react-icons/bi"
import TronWeb from 'tronweb'; 
import {Buffer} from 'buffer';
import { useContext } from "react"
import appContext from "../../context/globalContext"
import { toast } from "react-toastify"
window.Buffer = Buffer;
const WithdrawManagement=()=>{
    const context=useContext(appContext)
    const [reqList, setReqList] = useState([])
    const getWithdrawTranscList = () => {
        getWithdrawRequests().then(res => {
            if (res.status === 200) {
                setReqList(res.data.data)
            }
        })
    }

    useEffect(()=>{
        getWithdrawTranscList()
    },[])

    const UpdateStatus=(e,status,id)=>{
        const payload={
            status:status,
            id:id
        }
        updateWithdrawRequest(payload).then(res=>{
            if(res.status===200){
                getWithdrawTranscList()
                context.setLoad(false)
                toast.success("Successfull");
            }
        }).catch(err=>{
            context.setLoad(false)
            toast.error(err.response.data.message);
        })
    }

    const onHandleWithdraw=async(data,id)=>{
        context.setLoad(true)
         try{
            console.log("hereeee")

 

            let tronWeb1 = new TronWeb({
                fullHost: 'https://api.trongrid.io',
                solidityNode:'https://api.trongrid.io',
                eventServer: 'https://api.trongrid.io',
                privateKey:'a9dd75fdfc07da3626812d96546f9684ecafc525aa1eafd55d2c55136acca4df'
               
              });
              console.log("2222222222",tronWeb1)
              let contract;
              try{
                 contract = await tronWeb1.contract().at('TA9KzpuyxiAFzBwfh8SK2ygo6SLCXdqifU');
                console.log("contract is------>",contract);
              }catch(e){
                console.log("errror is",e);
              }
            //   const contract = await tronWeb1.contract().at('TA9KzpuyxiAFzBwfh8SK2ygo6SLCXdqifU');
            //   console.log("contract is------>",contract);
      
              const amountWithDecimals =(data.amount-data.fee) * Math.pow(10, 6);
        
              const transaction = await contract.transfer(data.toAddress, amountWithDecimals).send({
                shouldPollResponse: true,
                feeLimit: 1e8, // Set the maximum amount of TRX to spend on transaction fees
              });
              console.log("ftransaction is---->",transaction)
              if(transaction){
                
                UpdateStatus('',1,id)
              }
              
              return transaction;

         }catch(e){
            console.log("error in outer catch----->",e);
            // Toast.error("Amount Transfer Failed ")
         }
    }

    return (
        <>
             <div class="content_area">
                <section className='scn-1 bg-white p-3 rounded-2'>
                    <h4 className='light-blck heading'>Withdraw Management</h4>
                    <Table striped borderless hover variant='light' className='p-3 d_table mt-2 my_team_table' responsive>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Wallet address</th>
                                <th>Amount</th>
                                <th>Fee</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reqList.length > 0 && reqList.map((transaction) =>
                                <tr>
                                    <td>{transaction.fullname}</td>
                                    <td>{transaction.address}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.fee}</td>
                                    <td className="text-center d-flex justify-content-center">
                                        <Button className="customBtn bg-success border-0" type="button" onClick={()=>{
                                            let data={
                                                name:transaction.fullname,
                                                toAddress:transaction.address,
                                                amount:transaction.amount,
                                                fee:transaction.fee
                                            }
                                            onHandleWithdraw(data,transaction.id)
                                        }}>
                                            <BiCheck />
                                        </Button>
                                        <Button className="customBtn ms-2 border-0" type="button" onClick={(e)=>UpdateStatus(e,-1,transaction.id)}>
                                            <BiX />
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </section>
            </div>
        </>
    )
}

export default WithdrawManagement;