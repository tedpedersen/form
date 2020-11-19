// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'


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
          <Button size="sm" variant="outline-dark">Match Orgininating Document Lines</Button>
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
      <section className="row">
          <div className="col-sm">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Custom Form</Form.Label>
              <Form.Control size="sm" as="select">
                <option>EFF Vendor Bill</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          </div>
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
      </section>
    </div> 
  );
}

export default App;
