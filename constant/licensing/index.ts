import procurementImg from "@/public/assets/images/global-licensing/license-procurement.png"
import renewalImg from "@/public/assets/images/global-licensing/renewal-management.png"
import complianceImg from "@/public/assets/images/global-licensing/license-compliance.png"
import tilleringImg from "@/public/assets/images/global-licensing/tillering-operation.png"
import advisoryImg from "@/public/assets/images/global-licensing/advisory-services.png"
import assetsImg from "@/public/assets/images/global-licensing/software-asset.png"
import talentIcon from "@/public/assets/icons/solution/outsourcing/talent_pool_icon.png"
import partnershipIcon from "@/public/assets/icons/solution/outsourcing/partnership_icon.png"
import recruitIcon from "@/public/assets/icons/solution/outsourcing/recruit_icon.png"
import securityIcon from "@/public/assets/icons/solution/outsourcing/security_icon.png"

export const licensing_services = [
    {
        id: "1",
        img: procurementImg,
        icon: talentIcon,
        title: "License Procurement & Management",
        description: `Secure the right software for your business with streamlined procurement and expert inventory control.`,
    },
    {
        id: "2",
        img: renewalImg,
        icon: partnershipIcon,
        title: "Renewals & Subscription Management",
        description: `Stay ahead with automated renewals, proactive notifications, and cost-saving subscription optimisation`,
    },
    {
        id: "3",
        img: complianceImg,
        icon: recruitIcon,
        title: "Compliance & Audit Support",
        description: `Avoid penalties and legal headaches with expert compliance audits and robust regulatory support.`,
    },
    {
        id: "4",
        img: tilleringImg,
        icon: securityIcon,
        title: "Tellering Operations",
        description: `Ensure accuracy, speed, and regulatory compliance in frontline banking by managing teller operations. 
                        We support seamless financial transactions for an improved customer experience.`,
    },
    {
        id: "5",
        img: advisoryImg,
        icon: partnershipIcon,
        title: "Advisory Services",
        description: `Maximise your software investments with tailored cost-saving strategies, upgrade guidance, and vendor 
                        selection.`,
    },
    {
        id: "6",
        img: assetsImg,
        icon: talentIcon,
        title: "Software Asset Management (SAM)",
        description: `Optimise software usage, plan for end-of-life transitions, and maintain complete control over your assets.`,
    },
]