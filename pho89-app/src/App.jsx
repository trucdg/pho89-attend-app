import "./App.css";

function App() {
  return (
    // <div class="container mx-auto">
    //   <div class="m:flex">
    //     <div>
    //       <img src="../public/phobowl.svg" alt="a bowl of pho" />
    //     </div>
    //     <div>
    //       <img src="../public/logo.svg" alt="logo" />
    //       <div>Pho 89 login</div>
    //     </div>
    //   </div>
    // </div>

    <div class="container text-center landing-page">
      <div class="row justify-content-around align-items-center">
        <div class="d-none d-md-block col-md-8 left-cont">
          <img src="../public/phobowl.svg" alt="a bowl of pho" />
        </div>
        <div class="col-md-3 right-cont">
          <div class="d-flex justify-content-center">
            <img src="../public/logo.svg" alt="logo" />
          </div>

          <div class="d-grid gap-4 col-9 mx-auto justify-content-center">
            <h1 class="h1">WELCOME</h1>
            <button class="btn" type="button">
              MANAGER
            </button>
            <button class="btn" type="button">
              EMPLOYEE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
