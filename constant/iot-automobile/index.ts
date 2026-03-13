import devIcon from "@/public/assets/icons/solution/saas/saas_devops_icon.png";
import productIcon from "@/public/assets/icons/solution/saas/saas_product_icon.png";
import deliveryIcon from "@/public/assets/icons/solution/saas/saas_delivery_icon.png";
import scrumIcon from "@/public/assets/icons/solution/saas/saas_scrum_icon.png";

import bridgeGapImg from "@/public/assets/images/solutions/iot-automobile/iot_bridge_gap.png"
import buildImg from "@/public/assets/images/solutions/iot-automobile/iot_build.png"
import decisionImg from "@/public/assets/images/solutions/iot-automobile/iot_decision.png"
import pkiImg from "@/public/assets/images/solutions/iot-automobile/iot_pki.png"
import { Bus, MapPinned, Sailboat, Siren, TrafficCone } from "lucide-react";
import buildVehicle from "@/public/assets/images/solutions/iot-automobile/vehicle_to_vehicle_img.png"
import infrastructureImg from "@/public/assets/images/solutions/iot-automobile/iot_e-vechile.png"
import pedestrianImg from "@/public/assets/images/solutions/iot-automobile/pedestrian_img.png"
import networkImg from "@/public/assets/images/solutions/iot-automobile/network_img.png"
import everythingImg from "@/public/assets/images/solutions/iot-automobile/everything_img.png"

import softwareDev from "@/public/assets/images/solutions/iot-automobile/iot_soft_dev.png"
import assetManagement from "@/public/assets/images/solutions/iot-automobile/asset_management_img.png"
import hmiImg from "@/public/assets/images/solutions/iot-automobile/hmi_img.png"
import mappingImg from "@/public/assets/images/solutions/iot-automobile/mapping_img.png"
import cockpitImg from "@/public/assets/images/solutions/iot-automobile/cockpit_img.png"

import electricVehicle from "@/public/assets/images/solutions/iot-automobile/electric-vehicle-img.png"
import tailoredFleet from "@/public/assets/images/solutions/iot-automobile/tailored-fleet-management.png"
import tailoredMaintenance from "@/public/assets/images/solutions/iot-automobile/tailored-maintanence.png"
import tailoredCloud from "@/public/assets/images/solutions/iot-automobile/taillored-cloud-services.png"
import tailoredInfotainment from "@/public/assets/images/solutions/iot-automobile/tailored-infotainment.png"

import user1 from "@/public/assets/images/solutions/outsourcing/preston.png"
import user2 from "@/public/assets/images/solutions/outsourcing/mike_img.png"
import user3 from "@/public/assets/images/solutions/outsourcing/shanka_img.png"
import user4 from "@/public/assets/images/solutions/outsourcing/rory_img.png"
import user5 from "@/public/assets/images/solutions/outsourcing/kumar_img.png"
import user6 from "@/public/assets/images/solutions/outsourcing/pirmin_img.png"

export const iot_faqs = [
    {
        id: "1",
        question: `How much does it cost to outsource software development?`,
        answer: `The cost of IT outsourcing varies widely depending on your project's scope, complexity, and duration. 
                    Factors like team size, expertise needed, and location of the software development outsourcing company 
                    all play a role. To get an accurate estimate for your project, it's best to reach out for a personalized 
                    quote.`,
    },
    {
        id: "2",
        question: `Why work with a software outsourcing company?`,
        answer: `Partnering with a software outsourcing company offers several advantages. You gain access to a pool of 
                    skilled professionals without the hassle of hiring and training. This flexibility allows you to scale 
                    your team up or down as needed. Plus, you can often get your project done faster and more efficiently, 
                    saving time and money in the long run.`,
    },
    {
        id: "3",
        question: `How is an outsourcing development team managed?`,
        answer: `Managing an outsourced team involves clear communication and well-defined processes. Typically, 
                    you'll have a dedicated project manager as your main contact point. They oversee the team, track 
                    progress, and ensure deadlines are met. Regular check-ins, progress reports, and collaborative tools 
                    help keep everyone on the same page.`,
    },
    {
        id: "4",
        question: `Do you provide support & maintenance after the product delivery?`,
        answer: `Absolutely! Our commitment doesn't end with product delivery. We offer comprehensive support and 
                    maintenance services to keep your software running smoothly. We can tailor a support package to fit 
                    your specific requirements, ensuring your product stays up-to-date and continues to meet your business 
                    needs long after the initial development phase.`,
    },
    {
        id: "5",
        question: `How long does it take to complete the project?`,
        answer: `Project timelines can vary greatly depending on the complexity and scope of work. A simple app might take 
                    a few weeks, while a large-scale enterprise system could require several months. During our initial 
                    discussions, we'll work with you to understand your requirements and provide a realistic timeline estimate.`,
    },
    {
        id: "6",
        question: `How do you ensure a smooth project transition from my existing vendor to CODERS Clutch?`,
        answer: `To ensure a smooth transition, we follow a carefully planned process. This includes a thorough documentation 
                    review, knowledge transfer sessions with your current vendor, and a phased handover approach. Our team 
                    will work closely with you to minimize disruptions and maintain project continuity throughout the switch 
                    to our software development outsourcing services.`,
    },
]

export const successful_businesses = [
    {
        id: "1",
        img: user1,
        name: "Preston Purnell",
        position: "UI/UX Designer at Navitus Health Solutions",
        title: "Seamless integration, outstanding results",
        description: `We faced challenges integrating outsourced developers with our in-house team. However, their seamless 
                        integration and expertise resolved these issues, resulting in exceptional outcomes that surpassed our 
                        expectations. I recommend them highly to anyone looking to overcome similar development challenges.`,
        rate: 5,
    },
    {
        id: "2",
        img: user2,
        name: "Mike Swinford",
        position: "Co-Founder / President at Bandwear.com",
        title: "Timezone alignment made all the difference",
        description: `Working with a timezone-aligned outsourced development team was a game-changer for our project. 
                        The real-time collaboration and quick response times significantly accelerated our development process.`,
        rate: 5,
    },
    {
        id: "3",
        img: user3,
        name: "Shankar Uprety",
        position: "Chief Executive Officer at Hamro Patro",
        title: "Flexible team scaling saved our project",
        description: `Our experience with their outsourcing software development services was exceptional. From custom 
                        software solutions to web and mobile applications, their developers consistently delivered 
                        high-quality code`,
        rate: 5,
    },
    {
        id: "4",
        img: user4,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
        title: "Cost-effective without compromising quality",
        description: `We were initially skeptical about the cost savings, but the outsourced team delivered the work while 
                        significantly reducing our development expenses. The quality-to-cost ratio was impressive.`,
        rate: 5,
    },
    {
        id: "5",
        img: user5,
        name: "Kumar Mehta",
        position: "VP of Engineering at Juniper Networks",
        title: "Diverse skill set for complex projects",
        description: `The range of expertise among the outsourced developers was remarkable. We were able to find 
                        specialists for every aspect of our complex project. The ability to scale our dedicated team as 
                        needed, combined with their agile methodology, ensured we met all our milestones`,
        rate: 5,
    },
    {
        id: "6",
        img: user6,
        name: "Pirmin Unger",
        position: "Director KM and AI - think-cell Software",
        title: "Responsive support around the clock",
        description: `we relied on the outsourced team's responsive support, which was consistently available whenever 
                        issues arose. Their expert assistance ensured smooth progress throughout our project, making a 
                        significant impact on our operations`,
        rate: 5,
    },
]

export const connected_vehicles = [
    {
        id: "1",
        img: electricVehicle,
        title: "Electric Vehicles",
        sub_title: "Electric Vehicle Monitoring",
        description: `Enhance electric vehicle management with sophisticated performance monitoring, charging status, 
                        and location. This technology facilitates optimal vehicle usage, predictive maintenance, and 
                        environmental impact assessment, ensuring a seamless and efficient electric vehicle experience.`,
        contents: [
            "Battery usage data",
            "Vehicle performance data",
            "Driver behavior data",
            "Charging alert & report",
            "Vehicle location tracking",
            "Electric vehicle digital twin"
        ],
    },
    {
        id: "2",
        img: tailoredFleet,
        title: "Fleet Management",
        sub_title: "Fleet Management & Telematics",
        description: `Optimize your fleet operations with advanced telematics. Track and manage vehicle safety, performance, 
                        and efficiency using GPS, sensors, and engine data. This integrated approach ensures on-time, 
                        cost-effective fleet management, enhancing overall operational efficiency.`,
        contents: [
            "Reduced fuel consumption",
            "Engine diagnostics",
            "Driver monitoring",
            "Ensure faster delivery",
            "Vehicle analytics",
            "Monitor truck routes"
        ],
    },
    {
        id: "3",
        img: tailoredMaintenance,
        title: "Maintenance & Safety",
        sub_title: "Predictive Maintenance & Safety",
        description: `Leverage predictive maintenance to proactively address vehicle safety and performance. Use AI and 
                        historical data to anticipate and resolve potential issues, reducing risks and preventing costly 
                        failures. Safeguard employees, customers, and the public with IoT in connected vehicles.`,
        contents: [
            "Vehicle health monitoring",
            "Smart alerts",
            "Maintenance history analytics",
            "Fault detection",
            "Service scheduling",
            "Connected vehicle sensors"
        ],
    },
    {
        id: "4",
        img: tailoredCloud,
        title: "Cloud Services",
        sub_title: "Cloud Services for Vehicles",
        description: `Revolutionize vehicle management with cloud services for connected vehicles. Get enhanced 
                        control and insight with remote diagnostics, predictive maintenance, and efficient data storage—all 
                        at your fingertips.`,
        contents: [
            "Car-on-demand services",
            "Remote diagnostics",
            "Car security services",
            "Usage-based insurance",
            "Over-the-air updates",
            "Drive-assist applications"
        ],
    },
    {
        id: "5",
        img: tailoredInfotainment,
        title: "In-vehicle Infotainment",
        sub_title: "In-vehicle Infotainment System",
        description: `Redefine your driving experience with advanced in-vehicle infotainment systems. Offer navigation, 
                        entertainment, and comprehensive vehicle diagnostics, all integrated for safety, convenience, and 
                        enjoyment.`,
        contents: [
            "4-Way camera assistance",
            "Third-party apps integration",
            "OTA updates & voice recognition",
            "360-degree entertainment suite",
            "Vehicular functions",
            "Platform compatibility"
        ],
    },
]

export const one_grands = [
    {
        id: "1",
        img: softwareDev,
        title: "Automotive Software Development",
        description: `Advance your vehicle offerings with our comprehensive automotive software development. Create 
                        applications and systems from infotainment to ADAS, enhancing user experience and safety.`,
    },
    {
        id: "2",
        img: assetManagement,
        title: "Automotive Asset Management",
        description: `Optimize your fleet performance with our Automotive Asset Management solutions. Gain insights into 
                        vehicle usage, maintenance, and efficiency, reducing downtime and improving safety.`,
    },
    {
        id: "3",
        img: hmiImg,
        title: "Automotive HMI",
        description: `Revolutionize the driver’s interaction with our Automotive HMI solutions. Connect seamlessly to the 
                        digital world for enhanced entertainment, navigation, and safety, offering a superior in-vehicle 
                        user experience`,
    },
    {
        id: "4",
        img: mappingImg,
        title: "Navigation & Mapping",
        description: `Incorporate state-of-the-art navigation and mapping technology in your connected vehicle platform. 
                        Offer drivers real-time, accurate location data and route planning, enriching the travel experience 
                        with detailed maps and traffic updates`,
    },
    {
        id: "5",
        img: cockpitImg,
        title: "Digital Cockpit Platform",
        description: `Transform your vehicles with a dedicated digital cockpit platform, integrating advanced displays, 
                        sensors, and interfaces. Offer a sophisticated, centralized system for navigation and entertainment, 
                        enhancing market appeal and safety features.`,
    },
]

export const build_platforms = [
    {
        id: "1",
        img: buildVehicle,
        title: "Vehicle to Vehicle (V2V)",
        description: `Enable your vehicles to communicate and share vital information like speed, dynamics, and traffic data. 
                        Strengthen safety to prevent accidents and coordinate emergency vehicle movements more effectively.`,
    },
    {
        id: "2",
        img: infrastructureImg,
        title: "Vehicle to Infrastructure (V2I)",
        description: `Integrate vehicle data with infrastructure insights for smoother traffic flow and efficient toll 
                        booth management. Offer comprehensive lane, toll, and traffic light data on one unified dashboard.`,
    },
    {
        id: "3",
        img: pedestrianImg,
        title: "Vehicle to Pedestrians (V2P)",
        description: `Empower pedestrians with an intuitive interface providing real-time updates on nearby transit options, 
                        taxis, and estimated arrival time for a more informed and efficient urban travel experience.`,
    },
    {
        id: "4",
        img: networkImg,
        title: "Vehicle to Network (V2N)",
        description: `Combine the power of Intelligent Transport Systems with real-time network connectivity to inform drivers 
                        about weather conditions and accidents on their routes. Take road safety and travel planning to the 
                        next level.`,
    },
    {
        id: "5",
        img: everythingImg,
        title: "Vehicle-to-Everything (V2X)",
        description: `Facilitate a comprehensive communication network with everything on the road, from vehicles to 
                        infrastructure. Enhance overall traffic efficiency and safety, and pave the way for a smarter 
                        mobility future.`,
    },
]

export const extend_ranges = [
    {
        id: "1",
        title: "Keyless Entry and Start",
        description: `Enhance vehicle access and ignition with robust, smartphone-driven keyless entry and start solutions. 
                        Catering to the modern automotive demands of your users.`
    },
    {
        id: "2",
        title: "Personalized User Profiles",
        description: `Customize vehicle settings — lighting, seat positions, infotainment, seat heating, and HVAC — 
                        tailored to individual drivers. Align your services to promote customer satisfaction.`
    },
    {
        id: "3",
        title: "ECDH Public Key Cryptography",
        description: `Integrate advanced cryptographic protocols for secure vehicle access and authentication. 
                        Secure your systems from Man-In-The-Middle attacks and passive eavesdropping.`
    },
    {
        id: "4",
        title: "OTA Updates (FOTA)",
        description: `Stay ahead of the curve with Firmware OTA updates. Ensure that your vehicles are consistently 
                        equipped with the latest firmware and software enhancements.`
    },
]

export const holistic_solutions = [
    {
        id: 1,
        icon: Bus,
        title: "Connected Emergency Response",
        description: `Leverage cloud-based data for rapid, precise emergency response coordination and location tracking.`,
    },
    {
        id: 2,
        icon: TrafficCone,
        title: "Connected Intersections",
        description: `Optimize traffic flow, enhance safety for all road users, and cut fuel use and emissions.`,
    },
    {
        id: 3,
        icon: Siren,
        title: "Connected Transit",
        description: `Transform public transit with real-time IoT data for efficient, reliable, and safer travel experiences.`,
    },
    {
        id: 4,
        icon: MapPinned,
        title: "Connected School Beacons",
        description: `Monitor and maintain beacons remotely for uninterrupted safety around school zones, ensuring reliable, efficient operation.`,
    },
    {
        id: 5,
        icon: Sailboat,
        title: "Connected Cross Walks",
        description: `Enhance pedestrian safety with advanced crosswalks, reducing injuries through high-visibility, 
                        signalized, and intelligent lighting solutions`,
    },
]

export const customer_journeys = [
    {
        id: "1",
        img: bridgeGapImg,
        title: "Bridge the Gap Between Smartphones and Vehicles",
        description: `Experience seamless integration of smartphones with the vehicle. Get real-time traffic updates, 
                        enjoy on-the-go entertainment, and control your car remotely for a connected, secure, and 
                        convenient drive.`,
    },
    {
        id: "2",
        img: buildImg,
        title: "Build Automotive Navigation Solutions",
        description: `Navigate with confidence with our advanced automotive solutions. Get accurate, reliable maps and 
                        easy-to-use interfaces that make driving safer and more efficient, tailored for every journey.`,
    },
    {
        id: "3",
        img: decisionImg,
        title: "Make Informed Decisions with Analytics",
        description: `Leverage data from IoT connected vehicles for better decision-making. Use analytics to improve fuel 
                        efficiency, safety, and seamless connectivity—optimize driving experience based on real-time insights.`,
    },
    {
        id: "4",
        img: pkiImg,
        title: "PKI-Based Solution for Strong Cybersecurity",
        description: `Equip your vehicles with cutting-edge PKI cybersecurity. Ensure secure communication and robust data 
                        protection—offer your customers unrivaled safety against cyber threats, strengthening trust and 
                        brand loyalty.`,
    },
]

export const mobilities = [
    {
        id: "1",
        icon: devIcon,
        title: "Connected",
        description: `Revolutionize transport with seamless, integrated, and smart connected vehicle solutions.`,
    },
    {
        id: "2",
        icon: productIcon,
        title: "Automated",
        description: `Boost safety, cut costs, and ramp up productivity with self-driving cars.`,
    },
    {
        id: "3",
        icon: deliveryIcon,
        title: "Redefined",
        description: `Create new business models as automotives get more increasingly connected.`,
    },
    {
        id: "4",
        icon: scrumIcon,
        title: "Electric",
        description: `Get more eco-friendly, cost-effective, and energy-efficient with e-vehicles.`,
    },
]