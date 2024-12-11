import { Link } from "react-router-dom";
import corsair from '../assets/CorsairK95.jpg';
import razerblack from '../assets/RazerBlackWidowV4Pro.jpg'
import hyperx from '../assets/HyperXAlloyOriginsCore.jpg';
import annepro from '../assets/AnnePro2.jpg';
import Keychronk10 from '../assets/KeychronK10.jpg';
import keychronk3 from '../assets/KeychronQ3.jpg';
import logiergo from '../assets/LogitechErgoK860.png';
import logiCraft from '../assets/LogitechCraft.jpg';
import roccat from '../assets/RoccatVulcanPro.jpg';
import steel from '../assets/SteelSeriesApex7.jpg';

const products = [
    {
        id: 1,
        name: 'Corsair K95 RGB Platinum',
        image: corsair,
        description: 'An advanced gaming keyboard with customizable RGB lighting, macro keys, and a durable aluminum frame for long-lasting performance.',
        materials: 'Aluminum frame',
        keySwitchType: 'Cherry MX Speed',
        keycaps: 'ABS keycaps',
        connectionType: 'Wired USB',
        lighting: 'RGB per-key lighting',
        additionalFeatures: ['6 programmable macro keys', 'Detachable wrist rest', 'Dedicated media controls'],
        reviews: [
            { text: "The RGB lighting is stunning and customizable!", author: "Jake" },
            { text: "Great for gaming and productivity.", author: "Maya" },
            { text: "Feels premium and sturdy.", author: "Ella" }
        ]
    },
    {
        id: 2,
        name: 'Razer BlackWidow V4 Pro',
        image: razerblack,
        description: 'Built for competitive gamers, this keyboard features responsive mechanical switches and a magnetic wrist rest for added comfort.',
        materials: 'Plastic and metal',
        keySwitchType: 'Razer Green Switches',
        keycaps: 'Doubleshot ABS keycaps',
        connectionType: 'Wired USB-C',
        lighting: 'Chroma RGB',
        additionalFeatures: ['Magnetic wrist rest', 'Onboard memory profiles', 'Dedicated media controls'],
        reviews: [
            { text: "Perfect for intense gaming sessions!", author: "Lucas" },
            { text: "The wrist rest is a game changer.", author: "Sophie" },
            { text: "Switches feel smooth and tactile.", author: "Ethan" }
        ]
    },
    {
        id: 3,
        name: 'Keychron K10',
        image: Keychronk10,
        description: 'A wireless mechanical keyboard designed for professionals, offering both Mac and Windows compatibility.',
        materials: 'Plastic frame',
        keySwitchType: 'Gateron Brown',
        keycaps: 'PBT keycaps',
        connectionType: 'Wireless and Wired',
        lighting: 'White backlight',
        additionalFeatures: ['Compatible with Mac and Windows', 'Bluetooth 5.1', 'Hot-swappable switches'],
        reviews: [
            { text: "Works seamlessly with my MacBook.", author: "Sarah" },
            { text: "Battery life is incredible!", author: "Daniel" },
            { text: "Compact yet powerful.", author: "Emma" }
        ]
    },
    {
        id: 4,
        name: 'SteelSeries Apex 7',
        image: steel,
        description: 'A versatile keyboard with OLED smart display, customizable keys, and dynamic RGB effects.',
        materials: 'Aircraft-grade aluminum alloy',
        keySwitchType: 'SteelSeries Red',
        keycaps: 'ABS keycaps',
        connectionType: 'Wired USB',
        lighting: 'RGB per-key lighting',
        additionalFeatures: ['OLED smart display', 'Durable mechanical switches', 'Dynamic RGB lighting'],
        reviews: [
            { text: "The OLED screen is a neat addition.", author: "Ryan" },
            { text: "Durable and stylish design.", author: "Emily" },
            { text: "RGB effects are mesmerizing.", author: "Zoe" }
        ]
    },
    {
        id: 5,
        name: 'Logitech Craft',
        image: logiCraft,
        description: 'A keyboard for creators, featuring an innovative input dial for precise adjustments in design and editing tools.',
        materials: 'Aluminum top case',
        keySwitchType: 'Scissor switches',
        keycaps: 'ABS keycaps',
        connectionType: 'Wireless USB and Bluetooth',
        lighting: 'White backlighting',
        additionalFeatures: ['Creative input dial', 'Compatible with Windows and macOS', 'Rechargeable battery'],
        reviews: [
            { text: "The input dial is incredibly useful for Photoshop.", author: "Ava" },
            { text: "Typing feels smooth and quiet.", author: "Noah" },
            { text: "Sleek and professional.", author: "Liam" }
        ]
    },
    {
        id: 6,
        name: 'HyperX Alloy Origins Core',
        image: hyperx,
        description: 'A compact TKL keyboard with HyperX switches designed for responsiveness and durability.',
        materials: 'Aircraft-grade aluminum',
        keySwitchType: 'HyperX Red',
        keycaps: 'PBT keycaps',
        connectionType: 'Wired USB-C',
        lighting: 'RGB backlighting',
        additionalFeatures: ['Compact TKL design', 'Onboard memory', 'Durable mechanical switches'],
        reviews: [
            { text: "Switches feel snappy and precise.", author: "Olivia" },
            { text: "Compact and easy to carry.", author: "James" },
            { text: "Great value for the price.", author: "Isabella" }
        ]
    },
    {
        id: 7,
        name: 'Keychron Q3',
        image: keychronk3,
        description: 'A high-end mechanical keyboard with a gasket mount design, customizable keycaps, and hot-swappable switches.',
        materials: 'CNC aluminum body',
        keySwitchType: 'Gateron Phantom',
        keycaps: 'Double-shot PBT',
        connectionType: 'Wired USB-C',
        lighting: 'RGB lighting',
        additionalFeatures: ['Hot-swappable sockets', 'Gasket-mounted design', 'QMK/VIA support'],
        reviews: [
            { text: "Build quality is unmatched.", author: "Henry" },
            { text: "Hot-swappable switches make it versatile.", author: "Mila" },
            { text: "Feels luxurious to type on.", author: "Sophia" }
        ]
    },
    {
        id: 8,
        name: 'Roccat Vulcan Pro',
        image: roccat,
        description: 'An ultra-thin keyboard with optical switches for fast and responsive inputs, perfect for competitive gaming.',
        materials: 'Aluminum top plate',
        keySwitchType: 'Titan Optical Switches',
        keycaps: 'Low-profile ABS',
        connectionType: 'Wired USB',
        lighting: 'AIMO RGB lighting',
        additionalFeatures: ['Optical actuation', 'Ultra-thin design', 'Customizable RGB effects'],
        reviews: [
            { text: "Super fast response time!", author: "William" },
            { text: "Sleek and futuristic design.", author: "Charlotte" },
            { text: "Perfect for FPS games.", author: "Benjamin" }
        ]
    },
    {
        id: 9,
        name: 'Anne Pro 2',
        image: annepro,
        description: 'A compact 60% keyboard ideal for minimalists, featuring Bluetooth connectivity and RGB lighting.',
        materials: 'Plastic frame',
        keySwitchType: 'Gateron Blue',
        keycaps: 'PBT keycaps',
        connectionType: 'Wireless and Wired',
        lighting: 'RGB per-key lighting',
        additionalFeatures: ['Compact 60% layout', 'Bluetooth 4.0', 'Programmable keys'],
        reviews: [
            { text: "Compact and easy to customize.", author: "Chloe" },
            { text: "Great for small desks.", author: "Alexander" },
            { text: "Highly portable.", author: "Amelia" }
        ]
    },
    {
        id: 10,
        name: 'Logitech Ergo K860',
        image: logiergo,
        description: 'An ergonomic keyboard with a curved design to reduce wrist strain, ideal for long typing sessions.',
        materials: 'Plastic frame',
        keySwitchType: 'Membrane switches',
        keycaps: 'ABS keycaps',
        connectionType: 'Wireless USB and Bluetooth',
        lighting: 'No backlighting',
        additionalFeatures: ['Curved ergonomic design', 'Split keyframe', 'Padded wrist rest'],
        reviews: [
            { text: "My wrists feel so much better now!", author: "Harper" },
            { text: "Comfortable and easy to adjust.", author: "Jack" },
            { text: "Typing has never been so relaxing.", author: "Luna"}
        ]
    }
];


export default function Products() {
    return (
        <div className="productsdiv">
            <h1>Our Products</h1>
            <ul className="products-grid">
                {products.map((product) => (
                    <li key={product.id} className="product-card">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image"
                        />
                        <h2 className="product-title">{product.name}</h2>
                        <Link 
                            to={`/products/${product.id}`} 
                            state={product} 
                            className="product-link"
                        >
                            View Product
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
