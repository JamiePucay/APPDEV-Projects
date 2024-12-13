import pepito from '../assets/pepito.jpg';
import barbie from '../assets/barbie.jpg';
import eren from '../assets/eren-jaeger.png';
import taylor from '../assets/taylor.jpg';
import bbm from '../assets/bbm.jpg';
import leni from '../assets/leni.jpg';

const employees = [
    {
        id: 1,
        name: "Pepito Manaloto",
        position: "Chief Executive Officer (CEO)",
        description: "Pepito is a visionary leader with years of experience in building successful businesses and driving innovation.",
        philosophy: "Success comes from empowering others to succeed.",
        skills: ["Leadership", "Strategic Planning", "Public Speaking", "Team Building"],
        contactInfo: {
            email: "pepito@keystaxx.com",
            linkedIn: "https://linkedin.com/in/pepito-manaloto"
        },
        photo: pepito
    },
    {
        id: 2,
        name: "Barbie",
        position: "President",
        description: "Barbie is a dynamic and results-driven executive committed to operational excellence.",
        philosophy: "Always aim for elegance in every solution.",
        skills: ["Operations Management", "Marketing", "Decision Making"],
        contactInfo: {
            email: "barbie@keystaxx.com",
            linkedIn: "https://linkedin.com/in/barbie"
        },
        photo: barbie
    },
    {
        id: 3,
        name: "Eren Yeager",
        position: "Product Manager",
        description: "Eren is passionate about delivering innovative products that resonate with users' needs.",
        philosophy: "Freedom to innovate drives success.",
        skills: ["Product Development", "Market Analysis", "Agile Methodologies"],
        contactInfo: {
            email: "eren@keystaxx.com",
            linkedIn: "https://linkedin.com/in/eren-yeager"
        },
        photo: eren
    },
    {
        id: 4,
        name: "Taylor Swift",
        position: "Marketing and Sales Leader",
        description: "Taylor leads with creativity and innovation to capture market share and build lasting customer relationships.",
        philosophy: "Storytelling is the heart of great marketing.",
        skills: ["Digital Marketing", "Brand Strategy", "Sales Management"],
        contactInfo: {
            email: "taylor@keystaxx.com",
            linkedIn: "https://linkedin.com/in/taylor-swift"
        },
        photo: taylor
    },
    {
        id: 5,
        name: "Bongbong Marcos",
        position: "Customer Support Specialist",
        description: "Bongbong ensures customers receive unparalleled support and care.",
        philosophy: "The customer is always right—always.",
        skills: ["Customer Service", "Conflict Resolution", "CRM Software"],
        contactInfo: {
            email: "bongbong@keystaxx.com",
            linkedIn: "https://linkedin.com/in/bongbong-marcos"
        },
        photo: bbm
    },
    {
        id: 6,
        name: "Leni Robredo",
        position: "Quality Assurance Specialist",
        description: "Lenny ensures every product is thoroughly tested for quality and reliability.",
        philosophy: "Details matter because customers notice.",
        skills: ["Quality Control", "Testing Automation", "Analytical Thinking"],
        contactInfo: {
            email: "lenny@keystaxx.com",
            linkedIn: "https://linkedin.com/in/leni-robredo"
        },
        photo: leni
    }
];

export default employees;