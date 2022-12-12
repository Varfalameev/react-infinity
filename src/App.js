function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
       <div className="d-flex">
       <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3>INFINITY SHOP</h3>
          <p>магазин сумок</p>
        </div>
       </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img height={18} width={18} src="/img/cart.svg" alt="cart"></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img height={18} width={18} src="/img/user.svg" alt="user"></img>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все сумки</h1>
        <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="/img/bag/1.jpg" alt="bag1" />
          <h5>MICHAEL Michael Kors</h5>
          <p>Voyager East/West Tote</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 990 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/bag/2.jpg" alt="bag2" />
          <h5>MICHAEL Michael Kors</h5>
          <p>Voyager East/West Tote</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 990 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/bag/3.jpg" alt="bag3" />
          <h5>MICHAEL Michael Kors</h5>
          <p>Voyager East/West Tote</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 990 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/bag/3.jpg" alt="bag3" />
          <h5>MICHAEL Michael Kors</h5>
          <p>Voyager East/West Tote</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 990 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
}



export default App;
