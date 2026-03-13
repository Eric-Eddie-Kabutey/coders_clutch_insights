import infrastructureImg from "@/public/assets/images/solutions/managed-it/managed-infrastructure.png"
import cloudImg from "@/public/assets/images/solutions/managed-it/managed-cloud.png"
import cybersecurityImg from "@/public/assets/images/solutions/managed-it/managed-cybersecurity.png"
import dataImg from "@/public/assets/images/solutions/managed-it/managed-data.png"
import enduserImg from "@/public/assets/images/solutions/managed-it/managed-end-user.png"
import talentIcon from "@/public/assets/icons/solution/outsourcing/talent_pool_icon.png"
import partnershipIcon from "@/public/assets/icons/solution/outsourcing/partnership_icon.png"
import recruitIcon from "@/public/assets/icons/solution/outsourcing/recruit_icon.png"
import securityIcon from "@/public/assets/icons/solution/outsourcing/security_icon.png"

export const managed_services = [
    {
        id: "1",
        img: infrastructureImg,
        icon: talentIcon,
        title: "IT Infrastructure Management",
        description: `Experience seamless operations with 24/7 monitoring, maintenance, and support that ensures uptime 
                        and reliability.`,
    },
    {
        id: "2",
        img: cloudImg,
        icon: partnershipIcon,
        title: "Cloud Management Services",
        description: `Empower your business with secure cloud hosting, effortless migrations, and robust disaster recovery 
                        solutions.`,
    },
    {
        id: "3",
        img: cybersecurityImg,
        icon: recruitIcon,
        title: "Cybersecurity Management",
        description: `Stay ahead of threats with advanced detection, a dedicated Security Operations Centre, and compliance 
                        expertise.`,
    },
    {
        id: "4",
        img: dataImg,
        icon: securityIcon,
        title: "Data & Application Management",
        description: `Leverage optimised databases, lifecycle management, and actionable analytics to gain a strategic edge.`,
    },
    // {
    //     id: "5",
    //     img: enduserImg,
    //     title: "End-User Support",
    //     description: `Boost productivity with expert helpdesk services, device management, and employee training for a 
    //                     tech-savvy workforce.`,
    // },
]