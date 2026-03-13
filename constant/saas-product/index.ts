import devIcon from "@/public/assets/icons/solution/saas/saas_devops_icon.png";
import productIcon from "@/public/assets/icons/solution/saas/saas_product_icon.png";
import deliveryIcon from "@/public/assets/icons/solution/saas/saas_delivery_icon.png";
import scrumIcon from "@/public/assets/icons/solution/saas/saas_scrum_icon.png";

import multiTenantImg from "@/public/assets/images/solutions/saas-product/multi-tenant.png"
import saasAppImg from "@/public/assets/images/solutions/saas-product/saaS-application.png"
import cloudMigrationImg from "@/public/assets/images/solutions/saas-product/cloud-migration.png"
import engagingImg from "@/public/assets/images/solutions/saas-product/engaging-design.png"
import consultingImg from "@/public/assets/images/solutions/saas-product/saas-consulting.png"
import customImg from "@/public/assets/images/solutions/saas-product/saas-custom.png"

export const products_developed = [
    {
        id: "1",
        title: "Multi-Tenant Architecture",
        img: multiTenantImg,
        description: `Design scalable, robust multi-tenant SaaS architectures that ensure 99.99% availability even during 
                        peak loads. Your product is built for resilience with us.`,
    },
    {
        id: "2",
        title: "SaaS Application Development",
        img: saasAppImg,
        description: `Develop a feature-rich, scalable SaaS app with dedicated developers. Create a fully customizable 
                        code to meet your business’s intricate needs.`,
    },
    {
        id: "3",
        title: "Cloud Migration to SaaS",
        img: cloudMigrationImg,
        description: `Migrate your business’s data and apps from the cloud to the newly developed SaaS product. 
                        100% data security and 99.999% uptime guaranteed.`,
    },
    {
        id: "4",
        title: "Engaging UI/UX Design",
        img: engagingImg,
        description: `Create a design concept after an in-depth visual identity analysis. Get clickable design prototypes, 
                        animations, and developer assets in Xd or Figma.`,
    },
    {
        id: "5",
        title: "SaaS Consulting Service",
        img: consultingImg,
        description: `Bring your SaaS product to life with a team of domain experts. Get your SRS, detailed development 
                        roadmap, TCO & ROI estimates before starting off.`,
    },
    {
        id: "6",
        title: "SaaS Custom Solutions",
        img: customImg,
        description: `Build your own SaaS solution. The concept is yours, the product is yours — you decide the 
                        features you want. Everything is custom-built for you.`,
    },
]

export const reason_saas = [
    {
        id: "1",
        icon: devIcon,
        percentage: 65,
        value: "300+",
        title: "SaaS Developers",
        color: "#00312F",
        description: `Get every aspect of your product customized, from front-end design to back-end framework, by the world’s 
                        top-tech talents.`,
    },
    {
        id: "2",
        icon: productIcon,
        value: "500+ ",
        percentage: 80,
        title: "Products Developed",
        color: "#FF6900",
        description: `Customize your app effortlessly with a seasoned team behind countless successful SaaS products.`,
    },
    {
        id: "3",
        icon: deliveryIcon,
        value: "100% ",
        percentage: 100,
        title: "On-Time Delivery",
        color: "#FFCB40",
        description: `Deadlines matter, and we understand their importance. With Contus, your platform launches on schedule.`,
    },
    {
        id: "4",
        icon: scrumIcon,
        percentage: 90,
        value: "50+",
        title: "Scrum and Agile Practices",
        color: "#2E76F6" ,
        description: `Embrace a team well-versed in Scrum and Agile methodologies. Collaborate better, deliver faster, 
                        and satisfy clients quickly.`,
    },
]
