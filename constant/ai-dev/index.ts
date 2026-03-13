import brainIcon from "@/public/assets/icons/solution/ai_dev/brain.png"
import eyeIcon from "@/public/assets/icons/solution/ai_dev/eye.png"
import nauralIcon from "@/public/assets/icons/solution/ai_dev/naural network.png"
import ainotesIcon from "@/public/assets/icons/solution/ai_dev/ai_notes.png"
import deepIcon from "@/public/assets/icons/solution/ai_dev/deep_brain.png"
import graphIcon from "@/public/assets/icons/solution/ai_dev/graph.png"

import manualImg from "@/public/assets/images/solutions/digital_automotive.jpg";
import objectRecogImg from "@/public/assets/images/solutions/object_detection.jpg";
import speechRecogImg from "@/public/assets/images/solutions/speech_recognition.png";
import textRecogImg from "@/public/assets/images/solutions/ai-agent/text-classification.png";
import facialRecogImg from "@/public/assets/images/solutions/ai-agent/facial-recognition.png";
import activityRecogImg from "@/public/assets/images/solutions/ai-agent/activity-recognition.png";

import machine_learningImg from "@/public/assets/images/solutions/ai-agent/ai_machine_learning.png"
import deep_learningImg from "@/public/assets/images/solutions/ai-agent/ai-deep-learning.png"
import natural_languageImg from "@/public/assets/images/solutions/ai-agent/ai-nlp.png"
import computer_visionImg from "@/public/assets/images/solutions/ai-agent/ai-computer-vision.png"
import data_analysisImg from "@/public/assets/images/solutions/ai-agent/ai-data-analysis.png"
import model_deploymentImg from "@/public/assets/images/solutions/ai-agent/ai-model-deployment.png"

import entertainmentImg from "@/public/assets/images/solutions/digital_entertainment.jpg"
import ecommerceImg from "@/public/assets/images/solutions/ecommerce_uiux.jpg"
import educationImg from "@/public/assets/images/solutions/digital_education.jpg"
import manufacturingImg from "@/public/assets/images/solutions/ai-agent/ai-manufacturing.png"
import healthcareImg from "@/public/assets/images/solutions/digital_health.jpg"
import automativeImg from "@/public/assets/images/solutions/digital_automotive.jpg"
import fintechImg from "@/public/assets/images/solutions/digital_fintech.jpg"
import telecomImg from "@/public/assets/images/solutions/digital_telecom.jpg"

import planningImg from "@/public/assets/images/solutions/ai-agent/ai-planning.png"
import designImg from "@/public/assets/images/solutions/ai-agent/ai-design.png"
import devImg from "@/public/assets/images/solutions/ai-agent/ai-development.png"
import testingImg from "@/public/assets/images/solutions/ai-agent/ai-testing.png"
import deploymentImg from "@/public/assets/images/solutions/ai-agent/ai-deployment.png"
import maintenanceImg from "@/public/assets/images/solutions/ai-agent/ai-maintanance.png"

import { 
  Users, 
  CurrencyDollar, 
  PuzzlePiece, 
  ClockCounterClockwise 
} from "@phosphor-icons/react";

export const clients_served = [
    {
        id: "1",
        value: "150+",
        color: "#00312F",
        percentage: 100,
        title: "In-house AI Developers",
        icon: Users,
    },
    {
        id: "2",
        value: "70%",
        color: "#FF6900",
        percentage: 70,
        title: "Saving on Development Cost",
        icon: CurrencyDollar,
    },
    {
        id: "3",
        value: "50+",
        color: "#FFCB40",
        percentage: 60,
        title: "Custom AI Solutions",
        icon: PuzzlePiece,
    },
    {
        id: "4",
        value: "17+",
        color: "#2E76F6",
        percentage: 100,
        title: "Total Years of Experience",
        icon: ClockCounterClockwise,
    },
];


export const best_bet = [
    {
        id: "1",
        title: "Proficiency in Advanced",
        sub_title: "AI Technologies",
        description: `Tech expertise that stays ahead of the competition, delivering AI solutions that actually work and 
                        scale with your business.`
    },
    {
        id: "2",
        title: "Seamless",
        sub_title: "Integration",
        description: `AI that works with your existing systems effortlessly. No tech headaches, just smooth sailing and 
                        immediate impact.`
    },
    {
        id: "3",
        title: "Commitment to",
        sub_title: "Data Privacy",
        description: `Your data, your control. Our AI prioritizes privacy, ensuring compliance while maximizing the true 
                        potential of your data.`
    },
    {
        id: "4",
        title: "Custom",
        sub_title: "AI Development",
        description: `Tailor-made AI that fits your needs. No one-size-fits-all, just precise solutions that deliver real 
                        business results.`
    },
    {
        id: "5",
        title: "Focus on Security",
        sub_title: "and Ethics",
        description: `We build AI you can trust, ethically sound and rock-solid secure, because business and security go 
                        hand-in-hand.`
    },
    {
        id: "6",
        title: "Recognized Leaders",
        sub_title: "in AI Innovation",
        description: `Industry leaders pushing the boundaries. Trusted by businesses for delivering AI solutions that lead, 
                        not follow.`
    },
]

export const tested_approaches = [
    {
        id: "1",
        img: planningImg,
        title: "Planning",
        description: `A solid AI model starts with sharp planning, aligning goals, defining scope, and setting clear 
                        milestones to ensure your AI journey is smooth, scalable, and result-driven.`,
        contents: [
            {
                id: "1",
                title: "Vision and Goals Discussion",
                description: `We get into the nitty-gritty of your AI needs—objectives, target users, and success metrics. 
                                No fluff, just clarity.`,
            },
            {
                id: "2",
                title: "Project Roadmap Creation",
                description: `A no-nonsense plan with clear milestones, deadlines, and actionables so you know exactly where 
                                your AI journey is headed.`,
            },
            {
                id: "3",
                title: "Scope Definition",
                description: `Defining must-have features, functionalities, and tech specs upfront, because last-minute 
                                surprises are for amateurs.`,
            },
            {
                id: "4",
                title: "Resource Allocation",
                description: `Right people, right tech, right budget. Smart planning that ensures your AI project stays on 
                                track and on point.`,
            },
        ]
    },
    {
        id: "2",
        img: designImg,
        title: "Design",
        description: `Designing AI isn’t just about looks, it is about function, flow, and user impact. We build intuitive, 
                        high-performing AI models that integrate into your business ecosystem.`,
        contents: [
            {
                id: "1",
                title: "Wireframing",
                description: `Blueprinting the AI model’s architecture to ensure a structured, scalable, and efficient 
                                design from day one.`,
            },
            {
                id: "2",
                title: "UI/UX Design",
                description: `Striking the ideal balance between aesthetics and usability, because AI should be as smooth 
                                to use as it is powerful.`,
            },
            {
                id: "3",
                title: "Prototype Creation",
                description: `Interactive models for testing, refining, and ensuring the AI functions exactly as needed 
                                before full-scale deployment.`,
            },
            {
                id: "4",
                title: "Design Approval",
                description: `Your AI, your way, finalizing the design after feedback to make sure it aligns with your 
                                imagination and business needs.`,
            },
        ]
    },
    {
        id: "3",
        img: devImg,
        title: "Development",
        description: `From concept to execution, our AI engineers build robust, scalable models with full transparency. 
                        Regular updates ensure you are always in the loop. No black-box surprises.`,
        contents: [
            {
                id: "1",
                title: "Frontend Development",
                description: `Creating sleek, responsive AI interfaces that work across devices for a great user experience.`,
            },
            {
                id: "2",
                title: "Backend Development",
                description: `Building a rock-solid AI backbone with secure databases, efficient logic, and API 
                                integrations that just work.`,
            },
            {
                id: "3",
                title: "Regular Updates",
                description: `Clear milestones, real-time progress reports, because you should never have to guess where your 
                                AI project stands.`,
            },
            {
                id: "4",
                title: "Quality Assurance",
                description: `Rigorous testing, debugging, and performance checks, ensuring your AI runs like a well-oiled machine.`,
            },
        ]
    },
    {
        id: "4",
        img: testingImg,
        title: "Testing",
        description: `Our QA experts stress-test every AI model to catch bugs, optimize performance, and ensure security, 
                        because half-baked AI is bad for business.`,
        contents: [
            {
                id: "1",
                title: "Functionality Testing",
                description: `Every feature, every function—tested rigorously to ensure your AI performs exactly as intended.`,
            },
            {
                id: "2",
                title: "Usability Testing",
                description: `AI that feels effortless, refining user experience to make interactions smooth, intuitive, and 
                                frustration-free.`,
            },
            {
                id: "3",
                title: "Performance Testing",
                description: `Pushing AI to its utmost limits. Checking speed, scalability, and efficiency under real-world 
                                conditions.`,
            },
            {
                id: "4",
                title: "Security Testing",
                description: `No loopholes, no weak links whatsoever, fortifying your AI model to keep data safe and threats out.`,
            },
        ]
    },
    {
        id: "5",
        img: deploymentImg,
        title: "Deployment",
        description: `With everything fine-tuned, we strategically deploy the AI model on the right infrastructure, 
                        ensuring stability, scalability, and peak performance right from the start.`,
        contents: [
            {
                id: "1",
                title: "Hosting Selection",
                description: `Choosing the best cloud setup for your AI. Secure, scalable, and built to handle real-world 
                                workloads.`,
            },
            {
                id: "2",
                title: "Final Preparations",
                description: `Last-minute optimizations, performance checks, and security tweaks, because smooth launches 
                                don’t happen by accident.`,
            },
            {
                id: "3",
                title: "Launch Strategy",
                description: `Rolling out with a plan. Deployment, monitoring, and go-to-market strategies to maximize 
                                adoption and impact.`,
            },
            {
                id: "4",
                title: "Go Live",
                description: `Your AI is out in the wild—fully optimized, fully functional, secure, scalable, and ready to 
                                start delivering value.`,
            },
        ]
    },
    {
        id: "6",
        img: maintenanceImg,
        title: "Maintenance",
        description: `AI isn’t a one-and-done deal. We provide ongoing support, fine-tuning, and upgrades to keep your 
                        AI model running at peak performance.`,
        contents: [
            {
                id: "1",
                title: "Regular Updates",
                description: `Continuous enhancements, security patches, and optimizations, because AI that stagnates 
                                is AI that fails.`,
            },
            {
                id: "2",
                title: "Monitoring",
                description: `24x7 tracking to catch performance dips, security threats, and inefficiencies before they become 
                                real problems.`,
            },
            {
                id: "3",
                title: "Bug Fixes",
                description: `Fast, effective troubleshooting, quickly squashing bugs before they disrupt your AI’s 
                                performance or user experience.`,
            },
            {
                id: "4",
                title: "Performance Optimization",
                description: `AI that gets smarter over time. Fine-tuning based on real-world usage and data-driven insights.`,
            },
        ]
    },
]

export const industry_specifics = [
    {
        id: "1",
        img: entertainmentImg,
        title: "Entertainment",
        contents: [
            {
                id: "1",
                title: "Smart Content Recommendations",
                description: `Your viewers binge, you cash in. Smart recommendations keep them hooked without them even realizing it.`,
            },
            {
                id: "2",
                title: "Automated Video Editing",
                description: `No more manual edits, let the tech handle it while you focus on making the engaging content.`,
            },
            {
                id: "3",
                title: "Audience Sentiment Analysis",
                description: `Figure out what is trending before the crowd does. Data-backed insights, no guesswork involved.`,
            },
            {
                id: "4",
                title: "Personalized Advertising",
                description: `Ads so spot-on, your audience won’t even realize they are being sold to. Maximum ROI, minimum hassle.`,
            },
        ]
    },
    {
        id: "2",
        img: ecommerceImg,
        title: "Ecommerce",
        contents: [
            {
                id: "1",
                title: "Personalized Shopping Experiences",
                description: `Show them what they want before they even know it. Smart recommendations turn browsers into buyers.`,
            },
            {
                id: "2",
                title: "Smart Inventory Management",
                description: `No overstock, no stockouts. Predict demand like a professional and keep shelves sorted.`,
            },
            {
                id: "3",
                title: "AI-Powered Chatbots",
                description: `No customer left hanging. 24x7 smart assistants handle queries and close sales without spending much.`,
            },
            {
                id: "4",
                title: "Visual Search & Recognition",
                description: `Snap, search, shop, because typing product names is old-school. Let customers find exactly what they want in seconds.`,
            },
        ]
    },
    {
        id: "3",
        img: educationImg,
        title: "Education",
        contents: [
            {
                id: "1",
                title: "AI-Powered Learning Assistants",
                description: `No need to chase tutors whatsoever. 24x7 digital mentors clear doubts anytime, anywhere.`,
            },
            {
                id: "2",
                title: "Smart Content Curation",
                description: `No generic study material. Learning is tailored so that students actually get what they require.`,
            },
            {
                id: "3",
                title: "Automated Grading & Feedback",
                description: `No manual corrections. Instant assessments keep students and teachers aligned and efficient.`,
            },
            {
                id: "4",
                title: "Student Behavior Analytics",
                description: `Spot disengaged students before they zone out completely. Smart insights for smarter teaching.`,
            },
        ]
    },
    {
        id: "4",
        img: manufacturingImg,
        title: "Manufacturing",
        contents: [
            {
                id: "1",
                title: "Predictive Maintenance",
                description: `Spot potential issues before they escalate. Keep machines running smoothly and minimize costly breakdowns.`,
            },
            {
                id: "2",
                title: "Automated Quality Control",
                description: `Smart inspections detect defects before they even reach the production line, improving quality and reducing errors.`,
            },
            {
                id: "3",
                title: "Supply Chain Optimization",
                description: `No delays, no wastage. Smarter logistics keep costs down and deliveries on point and at time.`,
            },
            {
                id: "4",
                title: "Robotic Process Automation",
                description: `Let bots handle the repetitive tasks while your team focuses on creative solutions and driving innovation.`,
            },
        ]
    },
    {
        id: "5",
        img: healthcareImg,
        title: "Healthcare",
        contents: [
            {
                id: "1",
                title: "Health Monitoring & Alerts",
                description: `No last-minute surprises. Smart tracking keeps health risks in check before they become a big worry.`,
            },
            {
                id: "2",
                title: "Virtual Health Support",
                description: `No more waiting rooms. Digital assistants give instant medical guidance, trimming down unnecessary doctor visits.`,
            },
            {
                id: "3",
                title: "Improved Drug Development",
                description: `Faster research, quicker breakthroughs, because no one likes delays when it comes to life-saving drugs.`,
            },
            {
                id: "4",
                title: "Enhanced Treatment Plans",
                description: `No trial-and-error. Data-driven insights help doctors give spot-on treatments for better recovery.`,
            },
        ]
    },
    {
        id: "6",
        img: automativeImg,
        title: "Automotive",
        contents: [
            {
                id: "1",
                title: "Autonomous Driving Assistance",
                description: `Fewer oops moments on the road. Smart tech keeps drivers alert, safe, and rides smoother.`,
            },
            {
                id: "2",
                title: "Predictive Vehicle Maintenance",
                description: `No surprise breakdowns. Spot car issues early, save big on repairs, and extend vehicle lifespan.`,
            },
            {
                id: "3",
                title: "AI-Powered In-Car Assistants",
                description: `Talk to your car, get things done. Smarter navigation, entertainment, and controls on the go.`,
            },
            {
                id: "4",
                title: "Fleet Management & Optimization",
                description: `Track, optimize, and save on fuel, because efficiency should not be a guessing game.`,
            },
        ]
    },
    {
        id: "7",
        img: fintechImg,
        title: "Fintech",
        contents: [
            {
                id: "1",
                title: "Fraud Detection & Prevention",
                description: `No shady business here. Smart systems catch fishy transactions before they cost you big time.`,
            },
            {
                id: "2",
                title: "Automated Loan Processing",
                description: `No paperwork hassles, no waiting period. Quick approvals so your customers don’t keep hitting refresh.`,
            },
            {
                id: "3",
                title: "Personalized Financial Insights",
                description: `Help your customers manage money like experts while you grow engagement and trust.`,
            },
            {
                id: "4",
                title: "Algorithmic Trading",
                description: `Trade faster, smarter, and one step ahead, because guesswork in the market is a thing of the past.`,
            },
        ]
    },
    {
        id: "8",
        img: telecomImg,
        title: "Telecom",
        contents: [
            {
                id: "1",
                title: "Network Optimization & 5G",
                description: `No buffering, no lag. Just smooth, high-speed connectivity that keeps users happy.`,
            },
            {
                id: "2",
                title: "AI-Powered Customer Support",
                description: `Queries solved before customers even get annoyed. Smart bots handle it all, ensuring 24/7 satisfaction.`,
            },
            {
                id: "3",
                title: "Churn Prediction & Retention",
                description: `Spot customers on the fence and pull them back with the right engagement to increase loyalty and retention.`,
            },
            {
                id: "4",
                title: "Automated Billing & Fraud Prevention",
                description: `No billing goof-ups, no fraud headaches. Just secure, hassle-free transactions.`,
            },
        ]
    },
]


export const powerhouse_techs = [
    {
        id: "1",
        title: "Machine",
        sub_title: "Learning",
        img: machine_learningImg,
    },
    {
        id: "2",
        title: "Deep",
        sub_title: "Learning",
        img: deep_learningImg,
    },
    {
        id: "3",
        title: "Natural Language Processing",
        sub_title: "(NLP)",
        img: natural_languageImg,
    },
    {
        id: "4",
        title: "Computer",
        sub_title: "Vision",
        img: computer_visionImg,
    },
    {
        id: "5",
        title: "Data Manipulation &",
        sub_title: "Analysis",
        img: data_analysisImg,
    },
    {
        id: "6",
        title: "Model Deployment &",
        sub_title: "Management",
        img: model_deploymentImg,
    },
]

export const automate_services = [
    {
        id: "1",
        title: "Automating Manual Tasks",
        img: manualImg,
        contents: [
            "Let AI take over the repetitive stuff, handling time-consuming tasks with precision.",
            `Free up your team’s bandwidth to focus on bigger goals, strategic decisions, and creative problem-solving that 
                truly moves your business forward.`
        ],
    },
    {
        id: "2",
        title: "Object Detection",
        img: objectRecogImg,
        contents: [
            `AI-powered vision that identifies objects in real-time, ensuring faster decision-making in security, retail, and 
                logistics.`,
            `Detect potential threats, manage inventory better, and enhance operational efficiency with smart automation 
                that never misses a detail.`
        ],
    },
    {
        id: "3",
        title: "Speech Recognition",
        img: speechRecogImg,
        contents: [
            `Convert spoken words into structured data with AI-driven speech recognition.`,
            `Whether it's transcribing meetings or voice commands for automation, make communication seamless, increase 
                accessibility, and boost productivity like never before.`
        ],
    },
    {
        id: "4",
        title: "Text Classification",
        img: textRecogImg,
        contents: [
            `AI that reads and organizes text intelligently, making data handling effortless.`,
            `From emails to documents, categorize and retrieve information instantly, reducing clutter and improving efficiency 
                across workflows and business operations.`
        ],
    },
    {
        id: "5",
        title: "Facial Recognition",
        img: facialRecogImg,
        contents: [
            `Upgrade security and personalization with AI that accurately identifies individuals in real-time.`,
            `Whether for access control, customer engagement, or fraud prevention, get smarter identification that improves 
                both safety and user experience.`
        ],
    },
    {
        id: "6",
        title: "Human Activity Recognition",
        img: activityRecogImg,
        contents: [
            `AI that understands human movements, tracking behaviors for safety, health, and efficiency.`,
            `From workplace security to fitness tracking, leverage real-time insights to prevent risks, enhance monitoring, 
                and optimize performance.`
        ],
    },
]

export const design_services = [
    {
        id: "1",
        icon: brainIcon,
        title: "Machine Learning",
        description: "Smarter algorithms, sharper insights. ML solutions that give your business an edge in decision-making and automation.",
    },
    {
        id: "2",
        icon: nauralIcon,
        title: "Natural Language Processing",
        description: "Turn raw text into business gold—with advanced NLP models that understand, process, and respond like a pro.",
    },
    {
        id: "3",
        icon: eyeIcon,
        title: "Computer Vision Models",
        description: "From pixels to patterns—AI-powered vision that detects, tracks, and optimizes with highest precision.",
    },
    {
        id: "4",
        icon: ainotesIcon,
        title: "Generative Models",
        description: "AI that creates, innovates, and automates, because why settle for average when you can deliver excellence.",
    },
    {
        id: "5",
        icon: deepIcon,
        title: "Deep Learning",
        description: "Neural networks that think deep so your business doesn’t have to. Gain complex AI-driven intelligence.",
    },
    {
        id: "6",
        icon: graphIcon,
        title: "Predictive Analytics",
        description: "No more gut feel—reliable and accurate data-backed predictions that help you stay five steps ahead in the game.",
    },
]

export const ai_innovations = [
    {
        id: "1",
        is_right_active: true,
        title: "AI Consulting Service",
        description: `Cut through the AI noise with expert guidance that turns hype into real business impact, no jargon just results.`,
        contents: ["AI Strategy Development", "Machine Learning Process", "AI Integration Service", "Data Preparation & Analysis"],
    },
    {
        id: "2",
        is_left_active: true,
        title: "AI App Development",
        description: `Smart AI apps built to scale, perform and impress because mediocrity is not in our playbook.`,
        contents: ["Custom AI Applications", "Machine Learning Integration", "Natural Language Processing", "Computer Vision Solutions"],
    },
    {
        id: "3",
        is_right_active: false,
        title: "AI Recommendation Engine",
        description: `Get AI that knows what clicks and serves up spot-on suggestions to drive engagement and revenue.`,
        contents: ["Requirement Analysis", "Algorithm Selection", "Model Training", "Integration & Deployment"],
    },
    {
        id: "4",
        is_right_active: false,
        title: "AI Chatbot Development",
        description: `Bots that talk, handle queries, and never step away for a coffee break, giving your business 24x7 efficiency.`,
        contents: ["Chatbot Strategy Design", "Custom Bot Development", "Platform Integration Services", "Natural Language Training"],
    },
    {
        id: "5",
        is_right_active: true,
        title: "AI Agent Development",
        description: `AI agents that think, act, and deliver so your business stays sharp and responsive, no handholding needed.`,
        contents: ["Custom Agent Design", "Natural Language Processing", "Integration & Deployment", "Agent Training & Optimization"],
    },
    {
        id: "6",
        is_left_active: true,
        title: "RAG",
        description: `Fetch, retrieve, and generate AI that gets the right info at the right time. No guesswork, just precision.`,
        contents: ["Knowledge Base Integration", "Custom Query Retrieval", "Contextual Response Generation", "Data Source Optimization"],
    },
    {
        id: "7",
        is_right_active: true,
        title: "AI-Powered Automation",
        description: `Ditch the manual grind, let AI handle the heavy lifting while you focus on big-picture growth.`,
        contents: ["Process Optimization", "Intelligent Workflow Automation", "Robotic Process Automation (RPA)", "Automated Decision Making"],
    },
    {
        id: "8",
        is_left_active: true,
        title: "AI Product Development",
        description: `From concept to launch, we build AI-driven products that actually work, not just look fancy on pitch decks.`,
        contents: ["AI Product Design", "Model Development", "AI Solution Deployment", "User Experience (UX) Design"],
    },
    {
        id: "9",
        is_left_active: false,
        title: "LLM Customizing",
        description: `Fine-tuned language models tailored to your business needs, because one-size-fits-all is a myth in AI.`,
        contents: ["LLM Model Tuning", "Custom Dataset Creation", "LLM Integration", "Performance Optimization"],
    },
]