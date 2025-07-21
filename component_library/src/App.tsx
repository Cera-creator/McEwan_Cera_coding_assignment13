import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
// import { Dropdown } from "./components/Dropdown";
// import { HeroImage } from "./components/Hero Image";
import { Img } from "./components/Img";
import { Label } from "./components/Label";
import { RadioButton } from "./components/Radio button";
import { Table } from "./components/Table";
import { Text } from "./components/Text";

function App() {
  return (
    <div className="App">
      <h1>McEwan Cera UI Component Library</h1>

      <section>
        <h2>Button Component</h2>
        <Button label="Click me!" backgroundColor="#007BFF" />
        <Button label="Disabled Button" backgroundColor="#007BFF" disabled />
      </section>

      <section>
        <h2>Card Component</h2>
        <Card title="Sample Card" content="This is a sample card component." />
      </section>

      <section>
        <h2>Text Component</h2>
        <Text content="This is a text component" />
      </section>

      <section>
        <h2>Label Component</h2>
        <Label text="Sample Label" />
      </section>

      <section>
        <h2>Image Component</h2>
        <Img src="https://via.placeholder.com/300x200" alt="Sample Image" />
      </section>

      <section>
        <h2>Radio Button Component</h2>
        <RadioButton label="Option 1" name="test" value="option1" />
        <RadioButton label="Option 2" name="test" value="option2" />
      </section>

      <section>
        <h2>Table Component</h2>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>30</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default App;
