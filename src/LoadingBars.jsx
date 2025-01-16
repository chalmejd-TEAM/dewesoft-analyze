import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

function PreLoader1() {

  return (
    <>
        <ReactLoading
          type={"bars"}
          color={"#CD4A00"}
          height={100}
          width={100}
        />
     
    </>
  );
}
function App() {
  
  return (
    <div className="App">
      <PreLoader1 />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <App />
);