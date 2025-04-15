import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const CallReview = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [customerInfo, setCustomerInfo] = useState([]);
  const [transcript, setTranscript] = useState("");
  const [remarks, setRemarks] = useState("");

  const years = Array.from({ length: 2025 - 2000 }, (_, i) => 1999 + i);

  const handleCustomerInfoChange = (option) => {
    setCustomerInfo((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {/* CALL DETAILS */}
        <h2 className="text-lg font-semibold mb-2">CALL DETAILS</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* phone call input */}
          <input
            className="border p-2 rounded w-full"
            placeholder="Incoming Phone No:"
          />
          {/* call duration input */}
          <input
            className="border p-2 rounded w-full"
            placeholder="Call Duration (mins):"
          />
          {/* date time picker  */}
          <input className="border p-2 rounded w-full" placeholder="Date:" />
          <input className="border p-2 rounded w-full" placeholder="Time:" />
          {/* call Recording link input */}
          <input
            className="border p-2 rounded w-full"
            placeholder="Call Recording Link:"
          />
          {/* agent id input */}
          <input
            className="border p-2 rounded w-full"
            placeholder="Agent ID:"
          />
        </div>

        {/* CURRENT VEHICLE */}
        <h2 className="text-lg font-semibold mb-2">CURRENT VEHICLE</h2>
        {/* select make */}
        <select
          className="border p-2 rounded w-full mb-2"
          onChange={(e) => {
            setSelectedMake(e.target.value);
            setSelectedModel("");
          }}
        >
          <option value="">Select Make</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>

        {/* select modal */}
        <select
          className="border p-2 rounded w-full mb-4"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          disabled={!selectedMake}
        >
          <option value="">Select Model</option>
          {selectedMake &&
            modelsByMake[selectedMake]?.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
        </select>

        {/* select year */}
        <select
          className="border p-2 rounded w-full mb-2"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option>Select Year</option>
          {[...Array(25)].map((_, i) => (
            <option key={i} value={2000 + i}>
              {2000 + i}
            </option>
          ))}
        </select>

        {/* ISSUE FORM */}
        <h2 className="text-lg font-semibold mb-2">ISSUE FORM</h2>
        <input
          className="border p-2 rounded w-full mb-2"
          placeholder="Client Name:"
        />
        <select className="border p-2 rounded w-full mb-2">
          <option>Agent ask vehicle info</option>
        </select>
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Did agent ask customer info:
          </label>
          <div className="flex gap-4">
            {["Name", "Email", "Phone", "N/A"].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={customerInfo.includes(option)}
                  onChange={() => handleCustomerInfoChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Audio Player */}
        <div className="mb-4">
          <label className="font-semibold">Audio Player</label>
          <audio controls className="w-full">
            <source src="/path/to/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Transcript */}
        <div className="mb-4 p-4 border rounded bg-gray-50">
          <label className="font-semibold">Transcript</label>
          <textarea
            className="border p-2 rounded w-full mt-2 h-32"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
          />
        </div>

        {/* Remarks */}
        <div className="mb-4 p-4 border rounded bg-gray-50">
          <label className="font-semibold">Remarks</label>
          <textarea
            className="border p-2 rounded w-full mt-2 h-32"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>
        {/* CALL ENDING */}
        <h2 className="text-lg font-semibold mb-2">CALL ENDING</h2>
        <select className="border p-2 rounded w-full mb-2">
          <option>Select Call Ending Status</option>
        </select>

        {/* ALERTS */}
        <h2 className="text-lg font-semibold mb-2">ALERTS</h2>
        <select className="border p-2 rounded w-full mb-4">
          <option>Select Alert Type</option>
        </select>
      </div>
    </div>
  );
};

export default CallReview;

const makes = [
  "Toyota",
  "Honda",
  "Ford",
  "BMW",
  "Mercedes",
  "Mitsubishi",
  "Volvo",
  "Volkswagen",
  "Audi",
  "Mazda",
  "Chevrolet",
  "Cadillac",
  "Nissan",
  "Kia",
  "Subaru",
  "Lexus",
  "Land Rover",
  "Peugeot",
  "Skoda",
  "Fiat",
  "Citroën",
  "Acura",
  "Buick",
  "Chrysler",
  "Dodge",
  "Genesis",
  "GMC",
  "Hummer",
  "Infiniti",
  "Isuzu",
  "Jaguar",
  "Jeep",
  "Lincoln",
  "Mercury",
  "Mini",
  "Pontiac",
  "Ram",
  "Saturn",
  "Smart",
];
const modelsByMake = {
  Toyota: [
    "Corolla",
    "Camry",
    "RAV4",
    "Prius",
    "Sienna",
    "GR86",
    "Fortuner",
    "Revo",
  ],
  Honda: [
    "Civic",
    "Accord",
    "CR-V",
    "Amaze",
    "HR-V",
    "Insight",
    "Vezel",
    "Airwave",
    "Acty",
  ],
  Ford: [
    "Focus",
    "Mustang",
    "Explorer",
    "Mach-e",
    "Aerostar",
    "Fiesta",
    "Aspire",
    "Focus",
    "Model T",
    "Super Duty",
  ],
  BMW: [
    "X1",
    "X3",
    "X4",
    "X5",
    "M2",
    "M3",
    "M4",
    "M5",
    "M8",
    "I3",
    "I4",
    "I5",
    "I8",
  ],
  Mercedes: [
    "C-Class",
    "E-Class",
    "S-Class",
    "Gle",
    "Glb",
    "Eqb",
    "Eqa",
    "B-class",
    "Coupe",
  ],
  Mitsubishi: [
    "Mirage",
    "Xpander",
    "L200",
    "Galant",
    "Lancer",
    "Triton",
    "Outlander",
    "PHEV",
    "Attrage",
    "L300",
  ],
  Volvo: [
    "xc40",
    "s60",
    "s90",
    "xc90",
    "Ex30",
    "Ex90",
    "V60",
    "P1800",
    "V60",
    "C30",
  ],
  Volkswagen: [
    "Golf R",
    "Eos",
    "Ameo",
    "Taos",
    "Virtus",
    "T-cross",
    "Taigun",
    "Beetle",
    "Tiguan",
    "Jetta",
  ],
  Audi: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q5", "Q7", "R8"],
  Mazda: [
    "CX3",
    "CX5",
    "CX-8",
    "CX-30",
    "CX-50",
    "CX-60",
    "CX-90",
    "Mazda2",
    "CX7",
    "CX-80",
  ],
  Chevrolet: [
    "Cruze",
    "Camaro",
    "Tahoe",
    "Colorado",
    "Trax",
    "Volt",
    "Traverse",
    "Malibu",
    "Impala",
    "Silverado",
  ],
  Cadillac: [
    "CT4",
    "CT5-V",
    "CT6",
    "XT4",
    "XT6",
    "CTS",
    "STS",
    "BLS",
    "ELR",
    "DTS",
  ],
  Nissan: [
    "Altima",
    "Maxima",
    "Sentra",
    "Pathfinder",
    "Rogue",
    "Murano",
    "GT-R",
    "370Z",
    "Juke",
  ],
  Kia: [
    "Sportage",
    "Seltos",
    "Sonet",
    "Carnival",
    "Sorento",
    "Stinger",
    "Telluride",
    "K5",
  ],
  Subaru: [
    "Impreza",
    "Legacy",
    "Outback",
    "Forester",
    "Crosstrek",
    "BRZ",
    "Ascent",
    "WRX",
  ],
  Lexus: ["IS", "ES", "GS", "LS", "RX", "NX", "UX", "GX", "LX"],
  LandRover: ["Defender", "Discovery", "Evoque", "Velar", "Range Rover"],
  Peugeot: ["208", "308", "508", "2008", "3008", "5008"],
  Skoda: ["Octavia", "Superb", "Kodiaq", "Kamiq", "Karoq"],
  Fiat: ["500", "Panda", "Tipo", "Doblo", "Punto"],
  Citroën: ["C3", "C4", "C5", "Berlingo", "Ami"],
  Acura: [
    "MDX",
    "RDX",
    "TLX",
    "Integra",
    "TLX S",
    "MDX Type S",
    "Integra Type S",
    "RL",
    "CSX",
    "TL",
    "TSX",
    "RLX",
    "TSX Wagon",
    "ILX",
    "NSX",
    "ZDX",
  ],
  Buick: [
    "Avenir",
    "Enclave",
    "LaCrosse",
    "Regal",
    "Verano",
    "Encore",
    "Envision",
    "Cascada",
    "Encore GX",
    "Envision Plus",
    "Envista",
  ],
  Chrysler: [
    "Aspen",
    "Sebring",
    "300",
    "PT Cruiser",
    "Pacifica",
    "Crossfire",
    "200",
    "Voyager",
  ],
  Dodge: [
    "Caliber",
    "Charger",
    "Magnum",
    "Viper",
    "Avenger",
    "Challenger",
    "Journey",
    "Dart",
    "Neon",
    "Hornet",
  ],
  Genesis: ["G70", "G80", "G90", "GV70", "GV80"],
  GMC: ["Acadia", "Terrain", "Yukon", "Yukon XL", "Canyon", "Sierra", "Savana"],
  Hummer: ["H2", "H3"],
  Infiniti: [
    "G35",
    "G37",
    "G25",
    "M35",
    "M45",
    "M37",
    "M56",
    "Q50",
    "Q60",
    "Q70",
    "EX35",
    "EX37",
    "FX35",
    "FX37",
    "FX50",
    "QX50",
    "QX55",
    "QX60",
    "QX70",
    "QX80",
  ],
  Isuzu: ["Ascender", "i-Series", "D-Max", "MU-7", "MU-X", "Panther"],
  Jaguar: ["X-Type", "S-Type", "XF", "XJ", "XE", "F-Pace", "E-Pace"],
  Jeep: [
    "Wrangler",
    "Wrangler Unlimited",
    "Grand Cherokee",
    "Cherokee",
    "Compass",
    "Patriot",
    "Renegade",
    "Liberty",
    "Commander",
    "Gladiator",
    "Wagoneer",
    "Grand Wagoneer",
  ],
  Lincoln: [
    "MKZ",
    "MKX",
    "MKS",
    "MKT",
    "MKC",
    "Nautilus",
    "Corsair",
    "Aviator",
    "Navigator",
    "Town Car",
    "Mark LT",
  ],
  Mercury: ["Montego", "Milan", "Mariner", "Mountaineer", "Grand Marquis"],
  Mini: [
    "Hatch (Hardtop)",
    "Convertible",
    "Clubman",
    "Countryman",
    "Paceman",
    "Aceman",
  ],
  Pontiac: ["G3", "G5", "G6", "Torrent", "Montana SV6", "Vibe"],
  Ram: [
    "1500",
    "2500",
    "3500",
    "4500",
    "5500",
    "ProMaster",
    "ProMaster City",
    "700",
    "1000",
    "Rampage",
  ],
  Saturn: ["Aura", "Outlook", "Relay", "Vue"],
  Smart: ["Fortwo", "Fortwo Cabrio", "Forfour"],
};
