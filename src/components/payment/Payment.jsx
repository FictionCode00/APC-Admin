import { Button, Table } from "react-bootstrap";
import { BiCheck, BiX } from "react-icons/bi";
import './Payment.css';
const PaymentManagement = () => {
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
                            <tr>
                                <td>Akshay</td>
                                <td>ABDJBD234BFG32</td>
                                <td>1400</td>
                                <td className="text-center d-flex justify-content-center">
                                    <Button className="customBtn bg-success border-0" type="button">
                                        <BiCheck />
                                    </Button>
                                    <Button className="customBtn ms-2 border-0" type="button">
                                        <BiX />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </div>
        </>
    )
}
export default PaymentManagement;