import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BiCheck, BiX } from "react-icons/bi";
import Swal from "sweetalert2";
import { approveTransaction, getAllTransactionRequests } from "../../services/CommonServices";
import './Payment.css';
const PaymentManagement = () => {
    const [reqList, setReqList] = useState([])
    const getTranscList = () => {
        getAllTransactionRequests().then(res => {
            if (res.status === 200) {
                setReqList(res.data.data)
            }
        })
    }

    const approveRequest=(id)=>{
        const payload={
            status:1,
            id:id
        }
        console.log(payload);
        approveTransaction(payload).then(res=>{
            if(res.status===200){
                Swal.fire('',"Request approved successfully.","success")
                getTranscList()
            }
        }).catch(err=>{
            console.log(err.response.data.message)
        })
    }
    useEffect(() => {
        getTranscList()
    }, [])
    return (
        <>
            <div class="content_area">
                <section className='scn-1 bg-white p-3 rounded-2'>
                    <h4 className='light-blck heading'>Payment Management</h4>
                    <Table striped borderless hover variant='light' className='p-3 d_table mt-2 my_team_table' responsive>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Transaction Id</th>
                                <th>Amount</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reqList.length > 0 && reqList.map((transaction) =>
                                <tr>
                                    <td>{transaction.user_id}</td>
                                    <td>{transaction.transaction_id}</td>
                                    <td>{transaction.amount}</td>
                                    <td className="text-center d-flex justify-content-center">
                                        <Button className="customBtn bg-success border-0" type="button" onClick={()=>approveRequest(transaction.id)}>
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
export default PaymentManagement;