import { useEffect } from "react"
import { getWithdrawRequests } from "../../services/CommonServices"
import { useState } from "react"
import { Button, Table } from "react-bootstrap"
import { BiCheck, BiX } from "react-icons/bi"

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
                                        <Button className="customBtn bg-success border-0" type="button" >
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