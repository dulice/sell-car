import {
  TbDeviceMobileCharging,
  TbEngine,
  TbInfoTriangle,
  TbTrendingUp,
} from "react-icons/tb";

const specifications = [
  { icon: TbDeviceMobileCharging, title: "Fuel Consumption", text: "12.3" },
  { icon: TbEngine, title: "Engine", text: "3.4L H6 DOHC 24-valve" },
  { icon: TbTrendingUp, title: "Power", text: "350 hp @ 7400 rpm" },
  { icon: TbInfoTriangle, title: "Warranty", text: "80000/km, 48/Months" },
];

const mechanism = [
  { category: 'DriveTrain', value: 'Rear-wheel drive' },
  { category: 'Engine.Name', value: '3.4L H6 DOHC 24-valve' },
  { category: 'Stability Control', value: 'Yes' },
  { category: 'Traction Control', value: 'Yes' },
  { category: 'Transmission', value: '7-speed manual transmission' },
];

const dimensions = [
  { dimension: 'Cargo Capacity', value: '145 L' },
  { dimension: 'Curb Weight', value: '1400 kg' },
  { dimension: 'Fuel Tank Capacity', value: '64 L' },
  { dimension: 'Gross Vehicle Weight', value: '1795 kg' },
  { dimension: 'Height', value: '1303 mm' },
  { dimension: 'Length', value: '4491 mm' },
  { dimension: 'Maximum Cargo Capacity', value: '341 L' },
  { dimension: 'Wheelbase', value: '2450 mm' },
  { dimension: 'Width', value: '1808 mm' }
];

const carColors = [
  { color: 'bg-black', hex: '#000000'},
  { color: 'bg-green-700', hex: '#0e9c26'},
  { color: 'bg-red-700', hex: '#ff0000'},
  { color: 'bg-blue-900', hex: '#0000ff'},
]

export { specifications, mechanism, dimensions, carColors}
