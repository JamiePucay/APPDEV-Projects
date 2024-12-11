import { Link } from "react-router-dom";

const products = [
    { 
        id: 1, 
        name: 'Corsair K95 RGB Platinum', 
        description: 'An advanced gaming keyboard with customizable RGB lighting, macro keys, and a durable aluminum frame for long-lasting performance.', 
        reviews: [
            { text: "The RGB lighting is stunning and customizable!", author: "Jake" },
            { text: "Great for gaming and productivity.", author: "Maya" },
            { text: "Feels premium and sturdy.", author: "Ella" }
        ]
    },
    { 
        id: 2, 
        name: 'Razer BlackWidow V4 Pro', 
        description: 'Built for competitive gamers, this keyboard features responsive mechanical switches and a magnetic wrist rest for added comfort.', 
        reviews: [
            { text: "Perfect for intense gaming sessions!", author: "Lucas" },
            { text: "The wrist rest is a game changer.", author: "Sophie" },
            { text: "Switches feel smooth and tactile.", author: "Ethan" }
        ]
    },
    { 
        id: 3, 
        name: 'Keychron K10', 
        description: 'A wireless mechanical keyboard designed for professionals, offering both Mac and Windows compatibility.', 
        reviews: [
            { text: "Works seamlessly with my MacBook.", author: "Sarah" },
            { text: "Battery life is incredible!", author: "Daniel" },
            { text: "Compact yet powerful.", author: "Emma" }
        ]
    },
    { 
        id: 4, 
        name: 'SteelSeries Apex 7', 
        description: 'A versatile keyboard with OLED smart display, customizable keys, and dynamic RGB effects.', 
        reviews: [
            { text: "The OLED screen is a neat addition.", author: "Ryan" },
            { text: "Durable and stylish design.", author: "Emily" },
            { text: "RGB effects are mesmerizing.", author: "Zoe" }
        ]
    },
    { 
        id: 5, 
        name: 'Logitech Craft', 
        description: 'A keyboard for creators, featuring an innovative input dial for precise adjustments in design and editing tools.', 
        reviews: [
            { text: "The input dial is incredibly useful for Photoshop.", author: "Ava" },
            { text: "Typing feels smooth and quiet.", author: "Noah" },
            { text: "Sleek and professional.", author: "Liam" }
        ]
    },
    { 
        id: 6, 
        name: 'HyperX Alloy Origins Core', 
        description: 'A compact TKL keyboard with HyperX switches designed for responsiveness and durability.', 
        reviews: [
            { text: "Switches feel snappy and precise.", author: "Olivia" },
            { text: "Compact and easy to carry.", author: "James" },
            { text: "Great value for the price.", author: "Isabella" }
        ]
    },
    { 
        id: 7, 
        name: 'Keychron Q3', 
        description: 'A high-end mechanical keyboard with a gasket mount design, customizable keycaps, and hot-swappable switches.', 
        reviews: [
            { text: "Build quality is unmatched.", author: "Henry" },
            { text: "Hot-swappable switches make it versatile.", author: "Mila" },
            { text: "Feels luxurious to type on.", author: "Sophia" }
        ]
    },
    { 
        id: 8, 
        name: 'Roccat Vulcan Pro', 
        description: 'An ultra-thin keyboard with optical switches for fast and responsive inputs, perfect for competitive gaming.', 
        reviews: [
            { text: "Super fast response time!", author: "William" },
            { text: "Sleek and futuristic design.", author: "Charlotte" },
            { text: "Perfect for FPS games.", author: "Benjamin" }
        ]
    },
    { 
        id: 9, 
        name: 'Anne Pro 2', 
        description: 'A compact 60% keyboard ideal for minimalists, featuring Bluetooth connectivity and RGB lighting.', 
        reviews: [
            { text: "Compact and easy to customize.", author: "Chloe" },
            { text: "Great for small desks.", author: "Alexander" },
            { text: "Highly portable.", author: "Amelia" }
        ]
    },
    { 
        id: 10, 
        name: 'Logitech Ergo K860', 
        description: 'An ergonomic keyboard with a curved design to reduce wrist strain, ideal for long typing sessions.', 
        reviews: [
            { text: "My wrists feel so much better now!", author: "Harper" },
            { text: "Comfortable and easy to adjust.", author: "Jack" },
            { text: "Typing has never been so relaxing.", author: "Luna" }
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
                        <h2 className="product-title">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
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
