import { Link } from "react-router-dom";
import annepro from '../assets/Anne.jpg';
import corsair from '../assets/Cor.jpg';
import hyperx from '../assets/HyperX.jpg';
import Keychronk10 from '../assets/KeyK10.jpg';
import keychronk3 from '../assets/KeychronQ3.jpg';
import logiCraft from '../assets/LogiCraft.jpg';
import logiergo from '../assets/LogiK860.png';
import razerblack from '../assets/Razer.jpg'
import roccat from '../assets/Roccat.jpg';
import steel from '../assets/Steel.jpg';

const products = [
    {
        id: 1,
        name: 'Corsair K95 RGB Platinum',
        image: corsair,
        description: 'An advanced gaming keyboard with customizable RGB lighting, macro keys, and a durable aluminum frame for long-lasting performance.',
        manualDescription: 'To set up, connect the keyboard using the USB cable, install Corsair iCUE software for customization, and configure macro keys via the software.',
        materials: 'Aluminum frame',
        keySwitchType: 'Cherry MX Speed',
        keycaps: 'ABS keycaps',
        connectionType: 'Wired USB',
        lighting: 'RGB per-key lighting',
        additionalFeatures: ['6 programmable macro keys', 'Detachable wrist rest', 'Dedicated media controls'],
        reviews: [
            { text: "The RGB lighting is stunning and customizable!", author: "Jeremy Moses Ebreo" },
            { text: "Great for gaming and productivity.", author: "Kristal Marcelo" },
            { text: "Feels premium and sturdy.", author: "Cherrie Almazan" }
        ]
    },
    {
        id: 2,
        name: 'Razer BlackWidow V4 Pro',
        image: razerblack,
        description: 'Built for competitive gamers, this keyboard features responsive mechanical switches and a magnetic wrist rest for added comfort.',
        manualDescription: 'Plug in the USB-C cable, install Razer Synapse for customization, and adjust lighting and macros via the software.',
        materials: 'Plastic and metal',
        keySwitchType: 'Razer Green Switches',
        keycaps: 'Doubleshot ABS keycaps',
        connectionType: 'Wired USB-C',
        lighting: 'Chroma RGB',
        additionalFeatures: ['Magnetic wrist rest', 'Onboard memory profiles', 'Dedicated media controls'],
        reviews: [
            { text: "Perfect for intense gaming sessions", author: "Sabrina Carpenter" },
            { text: "The wrist rest is a amazing", author: "Alice in wonderland" },
            { text: "Switches feel smooth", author: "daniel" }
        ]
    },
    {
        id: 3,
        name: 'Keychron K10',
        image: Keychronk10,
        description: 'A wireless mechanical keyboard designed for professionals, offering both Mac and Windows compatibility.',
        manualDescription: 'To set up, connect via Bluetooth or USB cable, toggle between Mac and Windows modes using the side switch, and customize keys with the Keychron software.',
        materials: 'Plastic frame',
        keySwitchType: 'Gateron Brown',
        keycaps: 'PBT keycaps',
        connectionType: 'Wireless and Wired',
        lighting: 'White backlight',
        additionalFeatures: ['Compatible with Mac and Windows', 'Bluetooth 5.1', 'Hot-swappable switches'],
        reviews: [
            { text: "Works great with my MacBook.", author: "mmmmmmmmmmmlovely" },
            { text: "Battery life lasts long", author: "reya" },
            { text: "Compact but powerful.", author: "Emma" }
        ]
    },
    {
        id: 4,
        name: 'SteelSeries Apex 7',
        image: steel,
        description: 'A versatile keyboard with OLED smart display, customizable keys, and dynamic RGB effects.',
        manualDescription: 'To set up, connect via USB, install SteelSeries Engine software to customize lighting and macros, and configure the OLED display for personalized functions.',
        materials: 'Aircraft-grade aluminum alloy',
        keySwitchType: 'SteelSeries Red',
        keycaps: 'ABS keycaps',
        connectionType: 'Wired USB',
        lighting: 'RGB per-key lighting',
        additionalFeatures: ['OLED smart display', 'Durable mechanical switches', 'Dynamic RGB lighting'],
        reviews: [
            { text: "The OLED screen is a neat addition.", author: "Ryan" },
            { text: "Durable and stylish design.", author: "ventilador" },
            { text: "RGB effects are beautiful.", author: "Zoe noefe" }
        ]
    },
    {
        id: 5,
        name: 'Logitech Craft',
        image: logiCraft,
        description: 'A keyboard for creators, featuring an innovative input dial for precise adjustments in design and editing tools.',
        manualDescription: 'To set up, connect via Bluetooth or USB receiver, install Logitech Options software, and customize the input dial for creative applications.',
        materials: 'Aluminum top case',
        keySwitchType: 'Scissor switches',
        keycaps: 'ABS keycaps',
        connectionType: 'Wireless USB and Bluetooth',
        lighting: 'White backlighting',
        additionalFeatures: ['Creative input dial', 'Compatible with Windows and macOS', 'Rechargeable battery'],
        reviews: [
            { text: "The input dial is incredibly useful for Photoshop", author: "Ave maria" },
            { text: "Typing is smooth and quiet", author: "detective conan" },
            { text: "professional", author: "Liam" }
        ]
    },
    {
        id: 6,
        name: 'HyperX Alloy Origins Core',
        image: hyperx,
        description: 'A compact TKL keyboard with HyperX switches designed for responsiveness and durability.',
        manualDescription: 'To set up, connect via USB-C, install HyperX NGENUITY software for lighting and macro customization, and save profiles to onboard memory.',
        materials: 'Aircraft-grade aluminum',
        keySwitchType: 'HyperX Red',
        keycaps: 'PBT keycaps',
        connectionType: 'Wired USB-C',
        lighting: 'RGB backlighting',
        additionalFeatures: ['Compact TKL design', 'Onboard memory', 'Durable mechanical switches'],
        reviews: [
            { text: "Switches feel snappy and precise.", author: "Olivia Rodrigo" },
            { text: "Compact and easy to carry.", author: "James" },
            { text: "Great value for the price.", author: "Isabella" }
        ]
    },
    {
        id: 7,
        name: 'Keychron Q3',
        image: keychronk3,
        description: 'A high-end mechanical keyboard with a gasket mount design, customizable keycaps, and hot-swappable switches.',
        manualDescription: 'To set up, connect via USB-C, use QMK/VIA software for key mapping and lighting customization, and replace switches easily with the hot-swappable sockets.',
        materials: 'CNC aluminum body',
        keySwitchType: 'Gateron Phantom',
        keycaps: 'Double-shot PBT',
        connectionType: 'Wired USB-C',
        lighting: 'RGB lighting',
        additionalFeatures: ['Hot-swappable sockets', 'Gasket-mounted design', 'QMK/VIA support'],
        reviews: [
            { text: "Build quality is amazing.", author: "Henry the third" },
            { text: "Hot-swappable switches make it versatile.", author: "Mila" },
            { text: "Feels luxurious to type on.", author: "Sophia the first" }
        ]
    },
    {
        id: 8,
        name: 'Roccat Vulcan Pro',
        image: roccat,
        description: 'An ultra-thin keyboard with optical switches for fast and responsive inputs, perfect for competitive gaming.',
        manualDescription: 'To set up, connect via USB, install Roccat Swarm software to adjust RGB effects and key mappings, and fine-tune performance settings.',
        materials: 'Aluminum top plate',
        keySwitchType: 'Titan Optical Switches',
        keycaps: 'Low-profile ABS',
        connectionType: 'Wired USB',
        lighting: 'AIMO RGB lighting',
        additionalFeatures: ['Optical actuation', 'Ultra-thin design', 'Customizable RGB effects'],
        reviews: [
            { text: "Super fast response time!", author: "William the third" },
            { text: "Sleek and futuristic design.", author: "Charlotte" },
            { text: "Perfect for FPS games.", author: "Benjamin the first" }
        ]
    },
    {
        id: 9,
        name: 'Anne Pro 2',
        image: annepro,
        description: 'A compact 60% keyboard ideal for minimalists, featuring Bluetooth connectivity and RGB lighting.',
        manualDescription: 'To set up, connect via Bluetooth or USB, install ObinsKit software for lighting and layout customization, and program keys for advanced functionality.',
        materials: 'Plastic frame',
        keySwitchType: 'Gateron Blue',
        keycaps: 'PBT keycaps',
        connectionType: 'Wireless and Wired',
        lighting: 'RGB per-key lighting',
        additionalFeatures: ['Compact 60% layout', 'Bluetooth 4.0', 'Programmable keys'],
        reviews: [
            { text: "Compact and easy to customize.", author: "Chloe ting" },
            { text: "Great for small desks.", author: "Alexander the third" },
            { text: "Highly portable.", author: "Adam and Eve" }
        ]
    },
    {
        id: 10,
        name: 'Logitech Ergo K860',
        image: logiergo,
        description: 'An ergonomic keyboard with a curved design to reduce wrist strain, ideal for long typing sessions.',
        manualDescription: 'To set up, connect via Bluetooth or USB receiver, adjust the height for optimal ergonomics, and install Logitech Options software to customize function keys.',
        materials: 'Plastic frame',
        keySwitchType: 'Membrane switches',
        keycaps: 'ABS keycaps',
        connectionType: 'Wireless USB and Bluetooth',
        lighting: 'No backlighting',
        additionalFeatures: ['Curved ergonomic design', 'Split keyframe', 'Padded wrist rest'],
        reviews: [
            { text: "My wrists feel so much better now!", author: "Spiderman" },
            { text: "Comfortable and easy to adjust.", author: "Jack Sparrow" },
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
