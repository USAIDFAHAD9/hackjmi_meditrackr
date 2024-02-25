import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import MarkerClusterGroup from "react-leaflet-cluster";
import AreaSelect from "./AreaSelect";

const Map = () => {
  const [text, setText] = useState("");
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [markers, setMarkers] = useState([]);
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const options = {
        method: "POST",
        url: "https://google-api31.p.rapidapi.com/map",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "dc66c7ea2emsha6c7a2e618149d4p17da80jsn5c1e1cd8cb27",
          "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
        },
        data: {
          text: text,
          place: place ? place : "",
          street: "",
          city: "",
          country: country,
          state: state,
          postalcode: postalCode,
          latitude: "",
          longitude: "",
          radius: "",
        },
      };
      const response = await axios.request(options);
      const result = response.data;
      console.log(result);
      if (Array.isArray(response.data.result)) {
        const fetchedMarkers = response.data.result.map((location) => ({
          geocode: [location.latitude, location.longitude],
          popUp: location.name, // Adjust the property according to your API response
        }));
        setMarkers(fetchedMarkers);
      } else {
        console.log("Response data result is not an array.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
  });

  const center = [28.5600712, 77.279409];
  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-between mt-4">
        <div className="mb-4">
          <label htmlFor="country" className="block">
            Country Name:{" "}
          </label>
          <input
            value={country}
            type="text"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="place" className="block">
            Place Name:{" "}
          </label>
          <input
            value={place}
            type="text"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="text" className="block">
            Text:{" "}
          </label>
          <input
            value={text}
            type="text"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block">
            Postal Code:{" "}
          </label>
          <input
            value={postalCode == null ? "" : postalCode}
            type="text"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block">
            State:{" "}
          </label>
          <input
            value={state}
            type="text"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>

      <MapContainer center={[21, 78]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AreaSelect />
        <LayerGroup>
          <Circle
            center={center}
            pathOptions={{ fillColor: "red" }}
            radius={2500}
          />
          <Circle
            center={center}
            pathOptions={{ fillColor: "red" }}
            radius={100}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              pathOptions={{ color: "green", fillColor: "green" }}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
        <MarkerClusterGroup>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>
                <h2>{marker.popUp}</h2>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default Map;