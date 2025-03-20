import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet"; // Import LatLngTuple type
import "leaflet/dist/leaflet.css";


const position: LatLngTuple = [-36.8509, 174.7849]; // Explicitly typed as LatLngTuple

const MapContact = () => {
  return (
    <section className="bg-[var(--light-gray)] py-20 px-4 text-center md:text-left">
      <div className="max-w-6xl mx-auto gap-10 md:grid md:grid-cols-2 items-start">
        <div>
          <div>
            <h2 className="font-bold text-xl text-[var(--text-black)]">HOW TO FIND US IN PARNELL</h2>
            <p className="text-[var(--text-black)]">
              The Covisory offices are located at Apt 301, 6-8 Heather Street,
              Parnell. We are just in front of the Quest Serviced Apartments.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-xl text-[var(--text-black)]">PARKING - PARNELL</h2>
            <p className="text-[var(--text-black)]">
              In addition to Pay by Plate parking along Parnell Road and
              surrounding streets, there are a number of Car Park facilities
              available along Parnell Road, Heather Street, The Strand,
              Shipwright Lane and Carlaw Park.
            </p>
          </div>
        </div>
        <div>
          <MapContainer
            center={position}
            zoom={15}
            style={{ width: "100%", height: "600px", zIndex:1 }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>PO Box 137215, Parnell, Auckland 1151, New Zealand</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapContact;
