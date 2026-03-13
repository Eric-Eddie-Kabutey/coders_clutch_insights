import ai_fraud_img from "@/public/assets/images/insights/ai-fraud-detection.jpg";
import spear_fishing from "@/public/assets/images/insights/spear_phishing.png";
import spear_fishing_large from "@/public/assets/images/insights/spear_phising_large.png";
import e_invoicing_large from "@/public/assets/images/insights/e_invoicing_large.png";
import tech_hurting_large from "@/public/assets/images/insights/tech_hurting_large.png";
import launch_idea_large from "@/public/assets/images/insights/launch_big_large.png";
import blog2 from "@/public/assets/images/insights/e_invoicing.png"
import tech_hurting from "@/public/assets/images/insights/tech_hurting.png"
import launch_idea from "@/public/assets/images/insights/launch_big_idea.png"
import intelligentImg from "@/public/assets/images/insights/intelligent_document_processing.png"
import itTalentImg from "@/public/assets/images/insights/it_talent.png"
import revolutionalizingImg from "@/public/assets/images/insights/revolutionalizing.png"
import digitalAccountImg from "@/public/assets/images/insights/digital_amount.png"
import vulnerabilityImg from "@/public/assets/images/insights/vulnerability.png"
import event1 from "@/public/assets/images/insights/event_1.png"
import event2 from "@/public/assets/images/insights/event_2.png"
import event3 from "@/public/assets/images/insights/event_3.png"
import team1 from "@/public/assets/images/about/our-team1.jpg"
import team2 from "@/public/assets/images/about/our-team2.jpg"
import team3 from "@/public/assets/images/about/our-team3.jpg"
import team4 from "@/public/assets/images/about/our-team4.jpg"
import { CaseStudyProp, EventProp } from "@/type";
import trueId_logo from "@/public/assets/images/portfolio/trueid-logo.png"
import daimler_logo from "@/public/assets/images/portfolio/daimler-logo.png"
import tata_logo from "@/public/assets/images/portfolio/tata-logo.png"
import mahindra_logo from "@/public/assets/images/portfolio/tata-logo.png"
import versa_logo from "@/public/assets/images/portfolio/versa-logo.png"
import DKPAY_New_mockup_9 from "@/public/assets/images/portfolio/DKPAY_New_mockup.svg"
import Tourmate_New_mockup_2 from "@/public/assets/images/projects/Tourmate_New_mockup_4.svg"
import GIISS_New_mockup_2 from "@/public/assets/images/projects/GIISS_New_mockup.svg"
import MXP_New_mockup_2 from "@/public/assets/images/projects/MXP_New_mockup.svg"
import Gen_AI_New_mockup_2 from "@/public/assets/images/projects/Gen_AI_New_mockup.svg"
import OPIX_New_mockup_2 from "@/public/assets/images/projects/OPIX_New_mockup.svg"
import KIDDOS_New_mockup_5 from "@/public/assets/images/projects/4KIDDOS_New_mockup.svg"
import casestudy_img from "@/public/assets/images/insights/casestudy_detail1.png";
import casestudyImg1 from '@/public/assets/images/insights/casestudy_detail1.png'
import casestudyImg2 from '@/public/assets/images/insights/casstudy_detail2.png'
import casestudyImg3 from '@/public/assets/images/insights/casestudy_detail3.png'
import site_logo_animGif from '@/public/assets/images/insights/site_map_gif.gif'
import site_keywords_animGif from '@/public/assets/images/insights/site_keywords_gif.gif'
import site_logo_img from '@/public/assets/images/insights/site_logo.jpg'
import site_contents_animGif from '@/public/assets/images/insights/site_contents_gif.gif'
import site_img from '@/public/assets/images/insights/site_image1.jpg'

export const case_studies: CaseStudyProp[] = [
  {
    id: "1",
    slug: "dk-pay",
    youtube_url: "https://www.youtube.com/embed/y4cVHZJc6Ko",
    title: "DK Pay",
    // logo: trueId_logo,
    img: DKPAY_New_mockup_9,
    type: "Enterprise",
    industry: "Fintech",
    services: ["UI Design", "Web App Development", "Information Architecture"],
    client: "Vital Swap",
    role: "Strategic Partner",
    year: 2024,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    client_feedback: {
      quote: "We trusted Kedrus.io with our first project, and they delivered beyond our expectations. When we decided to expand Vital Swap into B2B payments, there was no question about who would build it. They understood our needs, executed flawlessly, and helped us create a seamless payment experience for businesses in Africa and the U.S. The impact has been incredible—our merchants love the transparency, speed, and simplicity of the system. Kedrus.io remains our go-to technology partner, and we're excited about what's next!",
      author: "Akinsola Jegede",
      role: "Founder, Vital Swap",
      image: casestudyImg3,
    },
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "2",
    slug: "code-intelligence-g7-ai",
    title: "Code Intelligence G7 AI",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: trueId_logo,
    img: Gen_AI_New_mockup_2,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Start up",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [site_logo_animGif, site_keywords_animGif, site_logo_img, site_contents_animGif, site_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "3",
    slug: "tourmate",
    title: "TourMate",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: mahindra_logo,
    img: Tourmate_New_mockup_2,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Enterprise",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "4",
    slug: "cybersecurity-monitoring-tool",
    title: "Cybersecurity Monitoring Tool",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: daimler_logo,
    img: GIISS_New_mockup_2,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Start up",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "5",
    slug: "mxp",
    title: "MXP",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: tata_logo,
    img: MXP_New_mockup_2,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Start up",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "6",
    slug: "open-payment-identity-exchange",
    title: "Open Payment & Identity Exchange",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: versa_logo,
    img: OPIX_New_mockup_2,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Start up",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "7",
    slug: "event-management-system",
    title: "Event Management System",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: mahindra_logo,
    img: KIDDOS_New_mockup_5,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Enterprise",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "8",
    slug: "intelligent-document-processing",
    title: "Intelligent Document Processing",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: mahindra_logo,
    img: intelligentImg,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Milestone",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "9",
    slug: "elevating-it-talent-solutions",
    title: "Elevating IT Talent Solutions",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: mahindra_logo,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    img: itTalentImg,
    type: "Milestone",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "10",
    slug: "digital-account-creation",
    title: "Digital Account Creation",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: mahindra_logo,
    img: digitalAccountImg,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Milestone",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "11",
    slug: "revolutionizing-branch-efficiency",
    title: "Revolutionizing Branch Efficiency",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: mahindra_logo,
    img: revolutionalizingImg,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Milestone",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
  {
    id: "12",
    slug: "revolutionizing-branch-efficiency",
    title: "Vulnerability Assessment and Penetration Testing",
    youtube_url: "https://www.youtube.com/embed/0CvoU3XV4es",
    logo: mahindra_logo,
    img: vulnerabilityImg,
    description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
    type: "Milestone",
    problems: {
      title: "Businesses in America often struggle to receive payments from customers and clients in Africa, particularly Nigeria, due to:",
      contents: [
        {
          id: "1",
          title: "Limited Payment Options: ",
          description: `Many African businesses lack seamless methods to pay American merchants in their local currency.`,
        },
        {
          id: "2",
          title: "Complicated Cross-Border Transactions:  ",
          description: `Existing payment methods involve high fees, delays, and complex banking procedures.`,
        },
        {
          id: "3",
          title: "Lack of Transparency: ",
          description: `Merchants in the U.S. face challenges in tracking payments, managing transactions, and reconciling funds.`,
        }
      ],
      summary: `These issues create friction in global trade and restrict African businesses from easily transacting with U.S.-based service providers, suppliers, and e-commerce merchants.`,
      problem_images: [casestudy_img],
    },
    our_solutions: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      solutions: [
        {
          id: "1",
          title: "Seamless Payment Processing:",
          contents: [
            `Enabled African businesses to pay American merchants in their local currency, eliminating foreign exchange complexities.`,
            `Ensured merchants in the U.S. receive funds in USD, making international transactions seamless.`,
          ]
        },
        {
          id: "2",
          title: "Merchant Dashboard:",
          contents: [
            `Developed a user-friendly dashboard that allows merchants to:`,
            `Track payments in real-time.`,
            `See transaction history and manage payouts.`,
            `Withdraw funds to their bank accounts effortlessly.`,
          ]
        },
        {
          id: "3",
          title: "Vital Swap Checkout System:",
          contents: [
            `Built a customizable checkout system that enables merchants to integrate Vital Swap directly into their e-commerce platforms and business applications.`,
            `Provided businesses with an easy plug-and-play payment gateway for smooth transactions.`,
          ]
        },
        {
          id: "4",
          title: "Fast and Secure Transactions:",
          contents: [
            `Optimized the platform for quick payment processing with robust security measures.`,
            `Reduced transaction delays and high processing fees associated with traditional cross-border payments.`,
          ]
        },
      ]
    },
    our_results: {
      images: [casestudyImg1, casestudyImg2, casestudyImg3],
      results: [
        {
          id: "1",
          title: "Frictionless Payments:",
          contents: `African businesses can now pay U.S. merchants easily in their local currency, while merchants in America receive USD directly.`,
        },
        {
          id: "2",
          title: "Increased Adoption:",
          contents: `More businesses integrated Vital Swap Checkout, simplifying their international payment processes.`,
        },
        {
          id: "3",
          title: "Improved Merchant Control:",
          contents: `The dashboard gave merchants real-time visibility into payments, reducing reconciliation time and improving financial management.`,
        },
        {
          id: "4",
          title: "Scalability & Growth:",
          contents: `The seamless transaction experience helped African businesses expand trade with U.S. suppliers, service providers, and e-commerce platforms without financial barriers.`,
        },
      ]
    }
  },
]

export const insight_events: EventProp[] = [
  {
    id: "1",
    event_slug: "event-1-digital-shift-series",
    event_type: 'online' as const,
    img: event1,
    header: "Events",
    date: "Thursday, June 26 2025",
    time: "3:00 PM WAT",
    location: "Online",
    published_date: "June 25, 2025",
    event_link: "https://zoom.us/webinar/register/WN_pwoYRxYSSKePB1vtUUMUbg#/registration",
    title: "Digital Shift Series: Demystifying Cloud Adoption for African",
    main_description: `Join us as we welcome the first batch of trainees for our Software Engineering Training Program (STEP) Cohort 2. This intensive 6-month program equips participants with cutting-edge technical skills and industry knowledge. The event will feature keynote speeches, networking opportunities, and a showcase of our training facilities.`,
    tags: ["Webinar", "Cloud Computing", "Digital Transformation"],
    max_attendees: 500,
    current_attendees: 247,
    speakers: [
      {
        id: "speaker-1",
        name: "Dr. Amina Okonkwo",
        role: "Chief Technology Officer",
        company: "Heirs Technologies",
        image: team1,
        bio: "Leading expert in cloud infrastructure with over 15 years of experience in enterprise digital transformation across Africa."
      },
      {
        id: "speaker-2",
        name: "Michael Adeyemi",
        role: "Cloud Solutions Architect",
        company: "Microsoft Azure",
        image: team2,
        bio: "Specializes in helping African enterprises migrate to cloud platforms with focus on cost optimization and scalability."
      }
    ],
    agenda: [
      {
        id: "agenda-1",
        time: "3:00 PM",
        title: "Welcome & Introduction",
        description: "Overview of cloud adoption challenges in African enterprises",
        speaker_id: "speaker-1"
      },
      {
        id: "agenda-2",
        time: "3:15 PM",
        title: "Cloud Migration Strategies",
        description: "Best practices for moving from on-premise to cloud infrastructure",
        speaker_id: "speaker-2"
      },
      {
        id: "agenda-3",
        time: "3:45 PM",
        title: "Cost Optimization Techniques",
        description: "How to reduce cloud costs while maintaining performance",
        speaker_id: "speaker-2"
      },
      {
        id: "agenda-4",
        time: "4:15 PM",
        title: "Q&A Session",
        description: "Open floor for questions and discussions"
      }
    ],
    description: [
      {
        id: "1",
        contents: [
          `In this edition of the Digital Shift Series by Heirs Technologies, we’re tackling a conversation many businesses avoid but can no longer ignore:`,
        ]
      },
      {
        id: "1",
        contents: [
          `Demystifying Cloud Adoption for African Enterprises`,
        ]
      },
      {
        id: "1",
        contents: [
          `Too complex? Too expensive? Not “made” for our environment?`,
          `We’ve heard it all.`,
          `But here’s the truth: Staying offline, on-premise, and out-of-touch is costing more than you think.`,
        ],
      },
      {
        id: "1",
        contents: [
          `This webinar isn’t just about cloud.`,
          `It’s about agility. Resilience. And making tech decisions that serve your business—not just your IT department.`,
        ],
      },

    ],
  },
  {
    id: "2",
    event_slug: "event-2-heirs-technologies-welcomes",
    event_type: 'in-person' as const,
    img: event2,
    header: "Events",
    date: "Thursday, June 26 2025",
    time: "3:00 PM WAT",
    location: "Coders Clutch HQ, Gambia",
    published_date: "June 25, 2025",
    title: "Heirs Technologies Welcomes First Batch of STEP Cohort 2 Trainees",
    main_description: `Join us as we welcome the first batch of trainees for our Software Engineering Training Program (STEP) Cohort 2. This intensive 6-month program equips participants with cutting-edge technical skills and industry knowledge. The event will feature keynote speeches, networking opportunities, and a showcase of our training facilities.`,
    tags: ["Conference", "Training", "Networking"],
    max_attendees: 150,
    current_attendees: 89,
    price: {
      amount: 0,
      currency: "GHS"
    },
    speakers: [
      {
        id: "speaker-3",
        name: "Eric Kabutey",
        role: "CEO & Founder",
        company: "Coders Clutch",
        image: team3,
        bio: "Visionary leader in software engineering education and training programs across West Africa."
      },
      {
        id: "speaker-4",
        name: "Sarah Mensah",
        role: "Head of Training",
        company: "Coders Clutch",
        image: team4,
        bio: "Expert in curriculum development and technical training with focus on practical software engineering skills."
      }
    ],
    agenda: [
      {
        id: "agenda-5",
        time: "3:00 PM",
        title: "Opening Ceremony",
        description: "Welcome address and program overview",
        speaker_id: "speaker-3"
      },
      {
        id: "agenda-6",
        time: "3:30 PM",
        title: "Meet the Trainers",
        description: "Introduction to the STEP Cohort 2 training team",
        speaker_id: "speaker-4"
      },
      {
        id: "agenda-7",
        time: "4:00 PM",
        title: "Facility Tour",
        description: "Guided tour of the training facilities and resources"
      },
      {
        id: "agenda-8",
        time: "4:30 PM",
        title: "Networking Session",
        description: "Meet fellow trainees and industry partners"
      }
    ],
    description: [
      {
        id: "1",
        contents: [
          `In this edition of the Digital Shift Series by Heirs Technologies, we’re tackling a conversation many businesses avoid but can no longer ignore:`,
        ]
      },
      {
        id: "1",
        contents: [
          `Demystifying Cloud Adoption for African Enterprises`,
        ]
      },
      {
        id: "1",
        contents: [
          `Too complex? Too expensive? Not “made” for our environment?`,
          `We’ve heard it all.`,
          `But here’s the truth: Staying offline, on-premise, and out-of-touch is costing more than you think.`,
        ],
      },
      {
        id: "1",
        contents: [
          `This webinar isn’t just about cloud.`,
          `It’s about agility. Resilience. And making tech decisions that serve your business—not just your IT department.`,
        ],
      },

    ],
  },
  {
    id: "3",
    event_slug: "event-3-first-batch-of-STEP",
    event_type: 'online' as const,
    img: event3,
    header: "Events",
    date: "Thursday, June 26 2025",
    time: "3:00 PM WAT",
    location: "Online",
    published_date: "June 25, 2025",
    event_link: "https://zoom.us/webinar/register/WN_pwoYRxYSSKePB1vtUUMUbg#/registration",
    title: "Heirs Technologies Welcomes First Batch of STEP Cohort 2 Trainees",
    main_description: `Join us as we welcome the first batch of trainees for our Software Engineering Training Program (STEP) Cohort 2. This intensive 6-month program equips participants with cutting-edge technical skills and industry knowledge. The event will feature keynote speeches, networking opportunities, and a showcase of our training facilities.`,
    tags: ["Webinar", "Training", "Tech Careers"],
    max_attendees: 300,
    current_attendees: 156,
    description: [
      {
        id: "1",
        contents: [
          `In this edition of the Digital Shift Series by Heirs Technologies, we’re tackling a conversation many businesses avoid but can no longer ignore:`,
        ]
      },
      {
        id: "1",
        contents: [
          `Demystifying Cloud Adoption for African Enterprises`,
        ]
      },
      {
        id: "1",
        contents: [
          `Too complex? Too expensive? Not “made” for our environment?`,
          `We’ve heard it all.`,
          `But here’s the truth: Staying offline, on-premise, and out-of-touch is costing more than you think.`,
        ],
      },
      {
        id: "1",
        contents: [
          `This webinar isn’t just about cloud.`,
          `It’s about agility. Resilience. And making tech decisions that serve your business—not just your IT department.`,
        ],
      },

    ],
  },
]


export const blogContent = [
  {
    id: "1",
    slug: "blog-1-ai-fraud-detection",
    published_date: "May 8, 2025",
    publisher: "Bernard Brown",
    category: "Cloud Computing",
    title: "How AI‑Powered Fraud Detection Is Revolutionizing Banking Security in Africa",
    description: "AI fraud detection is transforming banking security across Africa—explore real‑time systems, case studies in Ghana, Gambia, South Africa, and best practices.",
    keywords: "AI fraud detection, banking cybersecurity, fintech fraud prevention, machine learning in banking, fraud detection Ghana, Gambia, South Africa",
    primaryKeyword: "AI fraud detection",
    image: {
      src: ai_fraud_img,
      alt: "Dashboard showing AI monitoring bank transactions in real time to flag fraud."
    },
    img: ai_fraud_img,
    image_large: {
      src: ai_fraud_img,
      alt: "Diagram of AI and blockchain-enabled cross-border payment process."
    },
    content: [
      {
        subtitle: "Introduction",
        text: [
          "Imagine a bank that can **stop fraud before you even notice it**. That's the power of AI‑powered fraud detection—a technology that transforms banking security from reactive to predictive.",
          "In this post, we'll explore:",
          "- Core AI techniques behind modern fraud detection",
          "- Implementation challenges unique to Ghana, The Gambia, and South Africa",
          "- Real-world successes from banks and fintech innovators",
          "- Practical steps for financial institutions aiming to get ahead",
          "> **Related Reading:** [The Future of Cross‑Border Payments: How AI, Blockchain, and Mobile Wallets Are Redefining Money Transfers](blog-2-cross-border-payments.md)"
        ]
      },
      {
        subtitle: "The Rising Threat Landscape",
        text: [
          "Cybercrime is evolving, with biometric fraud and synthetic identities on the rise. Many African banks still rely on legacy systems that react too slowly or flag too many false positives."
        ]
      },
      {
        subtitle: "What Makes AI Different",
        text: [
          "AI brings **speed, precision, and adaptability**, analyzing transaction patterns, detecting anomalies in milliseconds, and dramatically reducing fraud while minimizing customer friction."
        ]
      },
      {
        subtitle: "Core AI Fraud Detection Techniques",
        text: [
          "### Real‑Time Transaction Monitoring",
          "ML models scan vast transaction volumes instantly, flagging suspicious behavior for review before funds move.",
          "### Behavioral Analytics",
          "Systems learn users' normal patterns—such as transaction size or location—and alert deviations.",
          "### Biometric and Identity Fraud Detection",
          "Facial recognition, liveness checks, and voice biometrics detect spoofing—even against deepfake attacks.",
          "### Adaptive Learning and Synthetic Fraud Modeling",
          "Generative AI simulates realistic fraud scenarios to train detection systems against complex threats."
        ]
      },
      {
        subtitle: "Adoption Challenges in Africa",
        text: [
          "- **Data Scarcity & Quality**: Informal economies limit available datasets.",
          "- **Trust Deficit**: Customers and regulators demand explainable AI decisions.",
          "- **Infrastructure & Talent Gaps**: Reliable internet and AI specialists are scarce.",
          "- **Fraud Arms Race**: Criminals also use AI for more advanced attacks."
        ]
      },
      {
        subtitle: "Case Studies",
        text: [
          "> 📌 **Case Study – Ghana**",
          "**Nsano Limited**, operating in 15 African markets, built a fraud management center that uses machine learning to reduce mobile‑money fraud.",
          "**Result:** Faster fraud detection and higher trust among mobile wallet users.",
          "> 📌 **Case Study – The Gambia**",
          "While adoption is early, The Gambia's growing fintech scene is ripe for AI‑based fraud tools. Regional bank data sharing could accelerate implementation.",
          "**Result:** Potential for cross‑border fraud intelligence.",
          "> 📌 **Case Study – South Africa**",
          "**Sybrin** deploys ML anomaly detection for biometric KYC and fraud prevention.",
          "**Result:** Reduced app‑based fraud by up to 40% for partner banks."
        ]
      },
      {
        subtitle: "Tangible Benefits",
        text: [
          "- **Fraud Reduction**: Losses cut by 27–41% within months",
          "- **Operational Efficiency**: Less manual investigation",
          "- **Financial Inclusion**: Extends banking access securely"
        ]
      },
      {
        subtitle: "Implementation Best Practices",
        text: [
          "1. Use localized training data",
          "2. Apply explainable AI with human oversight",
          "3. Collaborate across banks and regulators",
          "4. Deploy cloud + edge hybrid systems",
          "5. Continuously update detection models"
        ]
      },
      {
        subtitle: "Conclusion & CTA",
        text: [
          "AI fraud detection isn't just tech—it's a **strategic imperative**.",
          "**Contact us** to design a fraud detection framework tailored for Ghana, The Gambia, South Africa, and global markets."
        ]
      },
      {
        subtitle: "Share this article",
        text: [
          `<div className="flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook size={20} />
            </a>
          </div>`
        ]
      }
    ]
  },
  {
    id: "2",
    slug: "blog-2-e-invoicing-in-gambia",
    published_date: "May 8, 2025",
    publisher: "Bernard Brown",
    category: "AI",
    title: "E-Invoicing in Gambia: How Coders Clutch Helps You Stay Compliant",
    description: "The Federal Inland Revenue Service (FIRS) has announced that large taxpayers with turnovers of ₦5 billion and above will be required to comply with the mandatory e-invoicing system, the FIRS Merchant Buyer Solution (FIRSMBS), by November 2025. This follows a phased rollout, with large companies leading the compliance pilot, and all businesses expected to adopt the system in due course.",
    keywords: "cross-border payments, blockchain remittance, mobile wallets Africa, AI in payments, remittance Ghana, remittance Gambia, remittance South Africa, fintech Africa, payment security",
    primaryKeyword: "cross-border payments",
    image: {
      src: blog2,
      alt: "Diagram of AI and blockchain-enabled cross-border payment process."
    },
    img: e_invoicing_large,
    image_large: {
      src: e_invoicing_large,
      alt: "Diagram of AI and blockchain-enabled cross-border payment process."
    },
    content: [
      {
        subtitle: "",
        text: [
          "This shift will replace traditional paper invoices with structured digital invoices across Business-to-Business (B2B), Business-to-Consumer (B2C), and Business-to-Government (B2G) transactions. The aim is clear: reduce revenue leakages, fight the shadow economy, and enhance transparency in Nigeria’s tax administration.",
        ]
      },
      {
        subtitle: "The Compliance Challenge",
        text: [
          "While the benefits are clear, reduced costs, faster processing, improved accuracy, and better cash flow, many businesses face serious challenges:",
          "– Complex technical integration with the FIRSMBS API and secure protocols.",
          "– Evolving FIRS guidelines that demand dedicated technical expertise.",
          "– High penalties for non-compliance, including fines, interest, and possible disruption of VAT recovery",
        ]
      },
      {
        subtitle: "How Heirs Technologies Simplifies Compliance",
        text: [
          "At Heirs Technologies, we take away the complexity by being your dedicated System Integrator and Access Point Provider for FIRS-MBS e-invoicing. Our solution is designed to deliver end-to-end compliance without disrupting your operations.",

        ]
      },
      {
        subtitle: "Here’s how we help:",
        text: [
          "- **Zero-Headache Integration**: We handle the entire technical setup, system integration, and ongoing maintenance.",
          "- **Real-Time & Batch Reporting**: Seamless, reliable reporting to FIRS with built-in queuing and retry mechanisms.",
          "- **Guaranteed Compliance**: Mitigate risk of penalties with accurate, real-time tax reporting.",
          "- **Enhanced Data Security**: Enterprise-grade encryption ensures sensitive data stays protected.",
          "- **Simplified Reconciliation**: Intuitive dashboards make verification and dispute resolution easy.",
          "- ** Faster Time-to-Compliance**: Pre-built connectors for ERP systems (SAP, Oracle, Sage, Dynamics 365, Odoo, QuickBooks, etc.) enable implementation in weeks, not months.",
          "- **Unlimited Scalability**: Uncapped invoice transmission to support your business growth.",
        ]
      },
      {
        subtitle: "Why This Matters Now",
        text: [
          "The penalties for non-compliance are severe, and delays in adoption may lead to disruptions in operations, strained cash flows, and reputational risks",

        ]
      },
      {
        subtitle: "Take Action Today",
        text: [
          "Our mission is to make e-invoicing simple, secure, and seamless for Nigerian businesses.",
          "Don’t leave compliance to chance. Partner with us today and transform e-invoicing from a regulatory burden into a strategic advantage.",
          "Contact us at support@heirstechnologies.com  to get started.",
        ]
      },
      {
        subtitle: "Heirs Technologies – Simplifying E-Invoicing Compliance for Your Business.",
        text: [

        ]
      },

    ]
  },
  {
    id: "3",
    slug: "blog-3-out-phishing",
    published_date: "May 15, 2025",
    publisher: "Bernard Brown",
    category: "Cloud Computing",
    title: "Gone Phishing: How to Be Safe from Personalised Spear-Phishing Attacks",
    description: "Imagine this: you receive an email from your HR department asking you to review your performance evaluation. It includes your name, the correct internal HR signature, and even references your most recent project. The link seems legitimate, but one click later, your credentials are stolen, and your organisation’s data is compromised.",
    keywords: "AI loan underwriting Africa, credit scoring AI, Ghana, Gambia, South Africa fintech lending",
    primaryKeyword: "AI loan underwriting Africa",
    image: {
      src: spear_fishing,
      alt: "AI interface evaluating loan application data."
    },
    img: spear_fishing_large,
    image_large: {
      src: spear_fishing_large,
      alt: "Diagram of AI and blockchain-enabled cross-border payment process."
    },
    content: [
      {
        subtitle: "",
        text: [
          "Welcome to the world of spear-phishing – a dangerous, highly personalised version of the classic email scam.  Unlike broad phishing scams that cast a wide net, spear-phishing attacks are targeted and convincing, often mimicking trusted sources to manipulate the victim into taking action. In 2024 alone, spear-phishing was responsible for over 65% of all corporate data breaches globally (Verizon DBIR).",
          "Let’s explore how these attacks work, why they’re so dangerous, and most importantly, how you can defend yourself and your organisation.",
        ]
      },
      {
        subtitle: "What is personalised spear-phishing?",
        text: [
          "Spear-phishing is a targeted email or message attack tailored specifically to an individual or organisation. Unlike mass phishing, it uses personal information to trick recipients into divulging sensitive data, transferring money, or downloading malware.",
          "“Phishing is no longer a game of chance. It’s now a game of knowledge and precision.” — Lisa O’Donnell, Cyber Threat Analyst",
        ]
      },
      {
        subtitle: "How do attackers personalise spear-phishing?",
        text: [
          "Attackers today act like cyber-sleuths, collecting breadcrumbs of information from:",
          "– Social media profiles (LinkedIn, Facebook, X)",
          "– Company websites and employee bios",
          "– Data breaches and dark web forums",
          "– Public records and online mentions",
          "Armed with this intel, they craft messages that look, sound, and feel authentic.",
        ]
      },
      {
        subtitle: "Common Tactics Include:",
        text: [
          "- **Impersonation**: Using fake domains or lookalike email addresses (e.g., ceo@your-compnay.com)",
          "- **Urgency or feart**: Phrases like “Urgent: Invoice Overdue” or “Immediate action required”",
          "- **Attachment traps**: Files disguised as invoices, resumes, or reports containing malware",
          "- **Fake login portals**: Directing you to cloned login pages that steal credentials",
          "- **Attachment traps**: Files disguised as invoices, resumes, or reports containing malware"
        ]
      },
      {
        subtitle: "8 Practical Ways to Protect Yourself and Your Company",
        text: [
        ]
      },
      {
        subtitle: "For Individuals:",
        text: [
          ". **Think before you click**: Hover over links to preview the URL.",
          ". **Check the sender**: Look out for subtle misspellings or suspicious domains or addresses.",
          ". **Verify requests**: When in doubt, call or message the sender to confirm the request.",
          ". **Use Multi-Factor Authentication (MFA)**: Even if your password is compromised, MFA can block access. It adds a layer of protection.",
          ". **Keep software updated**: Security patches are your first line of defence.",
        ]
      },
      {
        subtitle: "For Organisations:",
        text: [
          ". **Run phishing simulations**: Regular training keeps employees alert.",
          ". **Invest in email security tools**: Solutions like Microsoft Defender or Proofpoint, Fortinet can help filter out threats.",
          ". **Apply least privilege access**: Only give employees the access they need.",
          ". **Promote a ‘see something, say something’ culture**: Encourage people to report suspicious emails without fear or blame.",
          ". **Segment your network**:  If one area is breached, it limits the overall damage.",
        ]
      },
      {
        subtitle: "Real-World Case: The C-Level scam that cost millions",
        text: [
          "In 2020, a multinational firm lost $17 million after a spear-phishing email impersonating the CEO directed the finance team to transfer funds to a “new vendor.” The email included the CEO’s signature, tone, and project references, all sourced from LinkedIn and past press releases.",
        ]
      },
      {
        subtitle: "What went wrong?",
        text: [
          "– No two-factor verification for fund transfers",
          "– Lack of phishing awareness training",
          "– Over-trust in email communication",
        ]
      },
      {
        subtitle: "What could have helped?",
        text: [
          "– A standard protocol for verifying large transactions",
          "– Internal communication through secure platforms",
          "– Stronger cybersecurity policies and checks",
        ]
      },
      {
        subtitle: "The Growing Threat: Why It Matters",
        text: [
          "– 91% of cyberattacks begin with a phishing email (Cofense 2023)",
          "– 1 in 3 employees are likely to click on a malicious link if not trained",
          "– Business email compromise (BEC), a form of spear-phishing, has caused over $50 billion in losses globally (FBI IC3 Report).",
          "These numbers highlight one thing: cybersecurity is a team sport, and everyone plays a role."
        ]
      },
      {
        subtitle: "Stay Alert, Stay Secure",
        text: [
          ". **Remember**: If something feels “off,” it probably is. Pause, verify, and report.",
        ]
      },
      {
        subtitle: "Have you ever been phished?",
        text: [
          "We’d love to hear from you – have you ever received a suspicious message that felt oddly personal?",
          "What tipped you off? How did you respond?",
        ]
      },
      {
        subtitle: "Drop your stories or questions in the comments. Your experience could help someone else avoid a scam.",
        text: [

        ]
      },

    ]
  },
  {
    id: "4",
    slug: "blog-4-launch-big-idea",
    published_date: "May 8, 2025",
    publisher: "Bernard Brown",
    category: "Partnership Alert",
    title: "Launch Your Big Idea, Not a Big Bill: How AWS Credits Fuel Startup Growth",
    description: "Discover how blockchain can make government transactions transparent and corruption-resistant, with African case studies.",
    keywords: "blockchain government, corruption prevention Africa, transparent transactions, blockchain Ghana, Gambia, South Africa",
    primaryKeyword: "blockchain government",
    image: {
      src: launch_idea,
      alt: "Visualization of a blockchain ledger recording government payments."
    },
    img: launch_idea_large,
    image_large: {
      src: launch_idea_large,
      alt: "Diagram of AI and blockchain-enabled cross-border payment process."
    },
    content: [
      {
        subtitle: "Introduction",
        text: [
          "Corruption costs African economies billions annually. Blockchain offers a **tamper‑proof, transparent ledger** that could rebuild trust in public institutions."
        ]
      },
      {
        subtitle: "Why Blockchain Works for Governance",
        text: [
          "- Immutable records prevent data alteration",
          "- Public access boosts accountability",
          "- Smart contracts automate fund release"
        ]
      },
      {
        subtitle: "Use Cases",
        text: [
          "- Public procurement tracking",
          "- Welfare distribution",
          "- Tax collection transparency"
        ]
      },
      {
        subtitle: "Case Studies",
        text: [
          "> 📌 **Case Study – Ghana**",
          "Ghana explored blockchain for land registry systems to reduce title disputes.",
          "**Impact:** Increased trust in property transactions.",
          "> 📌 **Case Study – The Gambia**",
          "Proposed blockchain system for fisheries licensing to reduce illegal fishing.",
          "**Impact:** Transparent allocation of fishing rights.",
          "> 📌 **Case Study – South Africa**",
          "Using blockchain in public healthcare supply chains to track medicine deliveries.",
          "**Impact:** Reduced stock‑outs and theft."
        ]
      },
      {
        subtitle: "Challenges",
        text: [
          "- Political resistance",
          "- Technical expertise gaps",
          "- Data privacy concerns"
        ]
      },
      {
        subtitle: "CTA",
        text: [
          "**Contact us** to build secure, blockchain‑based governance platforms."
        ]
      },
      {
        subtitle: "Share this article",
        text: [
          `<div className="flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook size={20} />
            </a>
          </div>`
        ]
      }
    ]
  },
  {
    id: "11",
    slug: "blog-10-ai-helping-or-hurting-your-business",
    published_date: "June 13, 2025",
    publisher: "Bernard Brown",
    category: "Cloud Computing",
    title: "Is Your Tech Helping or Hurting Your Business? 5 Signs You Can’t Afford to Ignore",
    description: "Technology underpins nearly every aspect of modern business, including operations, decision-making, customer experience, and scalability. But many organisations continue to operate with underperforming or outdated systems that limit growth, drive up costs, and weaken their competitive edge.",
    keywords: "AI loan underwriting Africa, credit scoring AI, Ghana, Gambia, South Africa fintech lending",
    primaryKeyword: "AI loan underwriting Africa",
    image: {
      src: tech_hurting,
      alt: "AI interface evaluating loan application data."
    },
    img: tech_hurting_large,
    image_large: {
      src: tech_hurting_large,
      alt: "Diagram of AI and blockchain-enabled cross-border payment process."
    },
    content: [
      {
        subtitle: "",
        text: [
          "A technology audit is a practical way to assess the current state of your IT ecosystem, including infrastructure, tools, and processes, and uncover what’s working, what’s not, and what needs to evolve.",
          "At Heirs Technologies, we view it as a necessary first step towards future-proofing your business with sustainable business transformation.",
          "Here are five clear signals your business may be overdue for a tech audit."
        ]
      },
      {
        subtitle: "1. Legacy Systems Are Creating Hidden Risk",
        text: [
          "Older systems are often deeply embedded in operations, but that doesn’t mean they are still fit for purpose. They are harder to maintain, lack integration, and create vulnerabilities. Legacy infrastructure also limits innovation, slowing down service delivery and increasing operational costs. Worse, it puts you at risk of compliance and security failures.",
          "Modern businesses require tunable architecture, systems designed to evolve with changing business needs. A tech audit helps identify where outdated tools are costing you more than they’re saving.",
        ]
      },
      {
        subtitle: "2. Tech Decisions Happen in Isolation",
        text: [
          "It’s a common scenario: a department adopts a new tool without consulting IT or aligning with business strategy. The result? Disconnected systems, duplicated data, and short-term fixes that don’t scale.",
          "Fido Credit uses AI to assess borrower risk using mobile data.",
          "You can’t make technology decisions in a vacuum. Effective digital strategies are driven by both business and technology goals, working in sync. A tech audit brings alignment and helps you evaluate decisions based on long-term value.",
        ]
      },
      {
        subtitle: "3. Manual Processes Are Slowing You Down",
        text: [
          "When teams still rely on spreadsheets, email chains, and paper workflows to complete key tasks, the inefficiencies pile up. Errors increase, response times lag, and customer satisfaction drops.",
          "These are signs that automation and process optimisation are urgently needed. A tech audit identifies where these gains can be made and how to implement them with minimal disruption.",
        ]
      },
      {
        subtitle: "4. Rising IT Costs, But No Performance Gains",
        text: [
          "If your IT spending keeps increasing but user experience and operational efficiency remain stagnant, it’s time to re-evaluate.",
          "It shouldn’t be cost vs. stability. You need cost and stability, investments that align with business outcomes and reduce long-term technical debt.",
          "A tech audit highlights wasteful spending and helps redirect resources toward scalable and performance-driven systems.",
        ]
      },
      {
        subtitle: "5. Your Infrastructure Can’t Support What’s Next",
        text: [
          "As your business grows, your systems must scale with you. If your infrastructure is rigid, patchwork, or overly dependent on legacy tools, it can’t support innovation or agility.",
          "Architecture must be tunable, not fixed. A tech audit evaluates your readiness for modern capabilities like cloud integration, API connectivity, and secure remote access.",
        ]
      },
      {
        subtitle: "Get Ahead, Not Left Behind",
        text: [
          "Operational inefficiencies and tech underperformance don’t always appear obvious, but they compound over time. A tech audit is the strategic move to uncover bottlenecks, reduce costs, and realign your IT to your growth goals.",
          "Book a Free Consultation. Discover how Heirs Technologies can help you future-proof your business with a practical, value-focused tech audit. Click here to book",
        ]
      },

    ]
  },

];

export type { CaseStudyProp };
