import React from 'react';
import './App.css';
import officeImg from './office.jpg';

function App() {
  // 1. Heading element created with JSX
  const element = "Office Space , Rent at Affordable Price";

  // 2. JSX attribute element to display the image of the office space
  const jsxatt = (
    <img
      src={officeImg}
      width="25%"
      height="25%"
      alt="Office Space"
      className="office-img"
    />
  );

  // 3. Single Office object to display details like Name, Rent, Address
  const ItemName = {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai'
  };

  // 4. List of Office objects to loop through and display more data
  const officeList = [
    { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
    { Name: 'FastOffice', Rent: 70000, Address: 'Bangalore' },
    { Name: 'SmartSpace', Rent: 55000, Address: 'Hyderabad' },
    { Name: 'CoWork', Rent: 65000, Address: 'Mumbai' }
  ];

  return (
    <div className="App">
      <header className="app-header">
        {/* Render Heading Element */}
        <h1>{element}</h1>
      </header>

      <main className="container">
        {/* Render Image Attribute Element */}
        <div className="image-section">
          {jsxatt}
        </div>

        {/* Render Single Office Details Object */}
        <section className="card single-office">
          <h2>Featured Office Details</h2>
          <p>
            <strong>Name: </strong> {ItemName.Name}
          </p>
          <p>
            <strong>Rent: </strong>
            {/* Inline CSS: Red if <= 60000, Green if > 60000 */}
            <span
              style={{
                color: ItemName.Rent <= 60000 ? 'red' : 'green',
                fontWeight: 'bold'
              }}
            >
              Rs. {ItemName.Rent}
            </span>
          </p>
          <p>
            <strong>Address: </strong> {ItemName.Address}
          </p>
        </section>

        {/* Render List of Office Objects */}
        <section className="card office-list-section">
          <h2>Available Office Spaces</h2>
          <div className="office-grid">
            {officeList.map((item, index) => (
              <div key={index} className="office-card">
                <h3>{item.Name}</h3>
                <p>
                  <strong>Rent: </strong>
                  {/* Inline CSS: Red if <= 60000, Green if > 60000 */}
                  <span
                    style={{
                      color: item.Rent <= 60000 ? 'red' : 'green',
                      fontWeight: 'bold'
                    }}
                  >
                    Rs. {item.Rent}
                  </span>
                </p>
                <p>
                  <strong>Address: </strong> {item.Address}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
