import { useEffect } from "react"
import { getWithdrawRequests } from "../../services/CommonServices"
import { useState } from "react"
import { Button, Table, Toast } from "react-bootstrap"
import { BiCheck, BiX } from "react-icons/bi"
import TronWeb from 'tronweb'; 

const WithdrawManagement=()=>{

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

    const onHandleWithdraw=async(data)=>{
         try{
            let tronWeb1 = new TronWeb({
                fullHost: "https://api.trongrid.io",
                solidityNode:"https://api.trongrid.io",
                eventServer: "https://api.trongrid.io",
                privateKey:"a9dd75fdfc07da3626812d96546f9684ecafc525aa1eafd55d2c55136acca4df"
               
              });

              const contract = await tronWeb1.contract().at(TA9KzpuyxiAFzBwfh8SK2ygo6SLCXdqifU);
      
              const amountWithDecimals = data.amount * Math.pow(10, 6);
        
              const transaction = await contract.transfer(data.toAddress, amountWithDecimals).send({
                shouldPollResponse: true,
                feeLimit: 1e8, // Set the maximum amount of TRX to spend on transaction fees
              });
              if(transaction){
                Toast.success("Amount Transfer Success");
              }
              
              return transaction;

         }catch(e){
            Toast.error("Amount Transfer Failed ")
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
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reqList.length > 0 && reqList.map((transaction) =>
                                <tr>
                                    <td>{transaction.fullname}</td>
                                    <td>{transaction.address}</td>
                                    <td>{transaction.amount}</td>
                                    <td className="text-center d-flex justify-content-center">
                                        <Button className="customBtn bg-success border-0" type="button" onClick={()=>{
                                            let data={
                                                name:transaction.fullname,
                                                address:transaction.address,
                                                amount:transaction.amount
                                            }
                                            onHandleWithdraw(data)
                                        }}>
                                            <BiCheck />
                                        </Button>
                                        <Button className="customBtn ms-2 border-0" type="button">
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