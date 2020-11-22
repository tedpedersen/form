// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

function App() {
  return (
    <div className="container-fluid main">
      <header className="row">
        <div className="col">
          <DropdownButton as={ButtonGroup} title="Save" size="sm" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
          <Button size="sm" variant="outline-dark">Reset</Button>
          <Button size="sm"  variant="outline-dark">Cancel</Button>
          <span>|</span>
          <Button size="sm" variant="outline-dark">Recalc</Button>
          <Button size="sm" variant="outline-dark">Match Originating Document Lines</Button>
          <Button size="sm" variant="outline-dark">Hide PDF</Button>
          <span>|</span>
          <DropdownButton variant="secondary" as={ButtonGroup} title="Actions" size="sm" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </div>
      </header>
      <div className="row">
        <div className="col">
          <hr />
          <h6>Primary Information</h6>
        </div>
      </div>
      <Form name="vendorForm">
      <section className="row">
          <div className="col-sm">
            <Form.Group >
              <Form.Label>Custom Form</Form.Label>
              <Form.Control size="sm" as="select" id="vendor">
                <option value="1">EFF Vendor Bill</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group >
              <Form.Label>Reference Number</Form.Label>
              <Form.Control size="sm" id="refId" readOnly placeholder="To be generated" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Vendor *</Form.Label>
              <Form.Control size="sm" as="select" id="vendor2">
                <option value="1">UBL Kententest BV</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control size="sm" id="amount" placeholder="0.00" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Available Vendor Credit</Form.Label>
              <Form.Control size="sm" id="credit" readOnly placeholder="0.00" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Control size="sm" id="currency" readOnly placeholder="EUR" />
            </Form.Group>
          </div>
          <div className="col-sm">
            <Form.Group>
              <Form.Label>Exchange Rate *</Form.Label>
              <Form.Control size="sm" id="exchange" placeholder="1.00" />
            </Form.Group>
            <Form.Group>
              <Form.Label>VAT Registration</Form.Label>
              <Form.Control size="sm" readOnly id="vat" placeholder="N12389345" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tax</Form.Label>
              <Form.Control size="sm" id="tax" placeholder="1.00" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Disc Amount</Form.Label>
              <Form.Control size="sm" id="discamount" readOnly placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Disc date</Form.Label>
              <Form.Control size="sm" id="discdate" readOnly placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Payment Held</Form.Label>
              <Form.Check id="check" aria-label="option 1" />
            </Form.Group>
          </div>
          <div className="col-sm">
            <Form.Group>
              <Form.Label>Due Date</Form.Label>
              <Form.Control size="sm" id="duedate" placeholder="13/6/2017" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control size="sm" id="date" placeholder="13/6/2017" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Posting Period *</Form.Label>
              <Form.Control size="sm" as="select" id="posting">
                <option value="1">June 17</option>
                <option value="2">June 30</option>
                <option value="3">July 15</option>
                <option value="4">July 30</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Memo</Form.Label>
              <Form.Control size="sm" id="memo" placeholder="Enter memo" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Approval Status</Form.Label>
              <Form.Control size="sm" as="select" id="approval">
                <option value="1">Pending Approval</option>
                <option value="2">Approved</option>
                <option value="3">Not Approved</option>
              </Form.Control>
            </Form.Group>
            <Form.Group >
              <Form.Label>Next Approver</Form.Label>
              <Form.Control size="sm" as="select" id="approver">
                <option value="1">- </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
          </div>
        </section>
      </Form>
      <hr />
      <section className="row">
        <div className="col">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item #</th>
              <th className="d-none d-lg-table-cell">Vendor Name</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Rate</th>
              <th className="d-none d-lg-table-cell">Inventory Detail</th>
              <th className="d-none d-lg-table-cell">Amount</th>
              <th className="d-none d-lg-table-cell">Tax Code</th>
              <th>Tax Rate</th>
              <th>Units</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className="d-none d-lg-table-cell"></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="d-none d-lg-table-cell"></td>
              <td className="d-none d-lg-table-cell"></td>
              <td className="d-none d-lg-table-cell"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        </div>
      </section>
    </div> 
  );
}


export default App;
