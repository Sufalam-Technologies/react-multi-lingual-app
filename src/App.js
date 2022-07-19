import { Card, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Card>
          <Card.Body className="m-5">
            <Row >
              <FormattedMessage id="ourmission" defaultMessage="Our Mission!" />
            </Row>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
