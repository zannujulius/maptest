import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import axios from "axios";

function App() {
  // const { ref } = usePlacesWidget({
  //   apiKey: "AIzaSyAVnLSLsA6Ou-ggXilNcBk23HctCcsciZA",
  //   onPlaceSelected: (place, inputRef, autocomplete) => console.log(place),
  //   libraries: ["places", "address"],
  // });
  const [address, setaddress] = useState("");
  const fetchAddress = async (item) => {
    try {
      let res = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=bada&types=geocode&key=AIzaSyAVnLSLsA6Ou-ggXilNcBk23HctCcsciZA`
      );
      console.log(res.data, "/////");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        // await fetchAddress();
        console.log(process.env.REACT_APP_GOOGLEMAP_API);
      } catch (err) {
        console.log(err.message);
      }
    })();
    return () => {};
  }, []);

  return (
    <div className="container-fluid ">
      <div className="row d-flex align-items-center justify-content-center vh-100 vw-100">
        <div className="col-12">
          <div
            className="bg-white border border-primary"
            style={{
              height: 200,
            }}
          >
            {/* <input ref={ref} style={{}} className="form-control" /> */}
            <label>Custom function.</label>

            {/* <Autocomplete
              apiKey={"AIzaSyAVnLSLsA6Ou-ggXilNcBk23HctCcsciZA"}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
              libraries={["places"]}
            /> */}

            <button className="btn btn-small bg-primary" onClick={fetchAddress}>
              {" "}
              Get location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
