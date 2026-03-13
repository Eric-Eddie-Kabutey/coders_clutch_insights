import kabuteyImg from "@/public/assets/images/about/team/kabutey_img.jpg"
import defaultImg from "@/public/assets/images/about/team/vecteezy_simple-user-default-icon_24983914.png"
import richardImg from "@/public/assets/images/about/team/richard_img.jpeg"
import placeholderImg from "@/public/placeholder.svg"
import jallowImg from "@/public/assets/images/about/team/jallow_img.jpeg"
import dushieImg from "@/public/assets/images/about/team/dushie_img.png"
import sillaImg from "@/public/assets/images/about/team/silla_img.jpg"
import amaviImg from "@/public/assets/images/about/team/amavi_img.jpeg"
import amenImg from "@/public/assets/images/about/team/amen_benson.jpg"
import narhImg from "@/public/assets/images/about/team/daniel_narh.jpg"
import meshackImg from "@/public/assets/images/about/team/meshackImg.svg"
import aryehImg from "@/public/assets/images/about/team/aryeh_img.jpg"
import ofiliImg from "@/public/assets/images/about/team/ofili_img.jpg"
import ahumaImg from "@/public/assets/images/about/team/ahuma_img.jpg";
import bandamaImg from "@/public/assets/images/about/team/bandama.jpg";
import niekimg from "@/public/assets/images/about/team/niek_img.jpg"
import estherimg from "@/public/assets/images/about/team/esther_img.jpg"
import samuelimg from "@/public/assets/images/about/team/samuel_img.png"
import joshuaimg from "@/public/assets/images/about/team/joshua_img.png"
import juwonimg from "@/public/assets/images/about/team/juwon_img.png"





import { JobItem, TeamMember } from "@/type"

export const team_members: TeamMember[] = [
    {
        id: "1",
        name: "Eric Kabutey",
        is_board: true,
        title: "CEO & Tech",
        description: [
            `*Eric Kabutey* is a visionary Chief Technology Officer and technology strategist with over seven years of leadership experience delivering enterprise-grade solutions across fintech, healthcare, AI, and blockchain industries. He specializes in transforming complex business challenges into scalable, secure, and high-performance technical systems that drive growth and innovation.`,
            `As a hands-on technology executive, Eric has led development teams at organizations such as My Bonfo Wallet, OneWorld Financial Services, and BStar Medical Center, where he architected and deployed cutting-edge platforms including real-time payment systems, EV charging networks, hospital management software, and AI-powered telemedicine applications. His expertise spans full-cycle software development, DevSecOps automation, and cloud infrastructure design, with a sharp focus on building resilient systems that meet banking-grade security and compliance standards.`,
            `Eric is a recognized authority in applied AI, cryptographic security, and blockchain integration, with deep domain knowledge in fintech and cross-border financial systems. He has a proven ability to align technology initiatives with business objectives—ensuring robust, future-ready solutions that support scalability, regulatory compliance, and superior user experiences.  Eric is also a passionate advocate for tech education and digital inclusion, supporting initiatives that bring advanced technical skills to emerging markets and underserved communities.`,
            `He holds a Bachelor of Science in Computer Science with a specialisation in Software Engineering and Security and has pursued advanced studies in Artificial Intelligence and Machine Learning. Eric also maintains professional certifications in application security and serves as a technical reviewer for industry publications on AI and cloud computing.`,
        ],
        img: defaultImg,
    },
    {
        id: "2",
        name: "Richard K. Asante",
        is_board: true,
        title: "Director",
        description: [
            `*Richard Kofi Asante* is a highly skilled building technologist and operational management expert with a strong foundation in construction technology and advanced retail logistics. His unique background bridges hands-on technical knowledge in building systems with rigorous large-scale operational management, making him a valuable strategic voice for companies operating in technology-driven sectors with physical infrastructure or supply chain dimensions.`,
            `Richard’s training as a building technologist began at Ho Polytechnic in Ghana, where he gained deep firsthand experience in construction methodologies, materials, and project execution. This technical foundation gives him a practical, detail-oriented perspective on real-world implementation challenges—particularly relevant for companies deploying technology in hardware-dependent or hybrid digital-physical environments, such as smart infrastructure, IoT deployment, or last-mile logistics.`,
            `Currently serving as a Store Manager at Lowe’s in the United States, Richard has honed expertise in end-to-end operational management, including inventory systems, process optimization, team leadership, and customer-centric service delivery. His experience in one of the world’s largest retail environments equips him with a disciplined approach to scalability, efficiency, and quality assurance—skills directly transferable to tech operations, hardware rollouts, and managed services.`,
            `Richard offers the board grounded insight into operational resilience, supply chain integration, and the human factors involved in technology adoption. His ability to translate between technical requirements and day-to-day operational execution ensures that strategic decisions account for real-world feasibility and end-user impact.`,
            `He is particularly well-suited to guide governance around projects involving logistics, physical tech installations, field operations, or retail-fintech crossover services. His dual expertise brings a rare and practical perspective to the table—one rooted in both building and managing systems that work on the ground.`,
        ],
        img: richardImg,
    },
    {
        id: "3",
        name: "Mahmoud Jallow",
        is_board: true,
        title: "Financial Advisor",
        description: [
            `*Mahmoud Jallow* is a visionary entrepreneur and dynamic business leader driving financial inclusion and digital transformation across West Africa. As the Founder and CEO of OneWorld Financial Services, he has built one of the region's most formidable financial networks—a leading global remittance and currency exchange platform with a physical footprint of over 96 branches in The Gambia alone, and a growing presence in Ghana and Senegal. Under his leadership, OneWorld has become one of the fastest-growing financial enterprises in The Gambia, recognized for its reliability, customer trust, and innovative service delivery.`,
            `Not content with dominating the traditional financial sector, Mahmoud is now spearheading the fintech revolution with the launch of MyBonfo—a cutting-edge digital remittance platform designed to simplify cross-border payments, utility bill processing, and event ticketing. MyBonfo embodies his forward-looking approach to finance, combining seamless technology with deep market understanding to serve a new generation of users.`,
            `Beyond finance, Mahmoud has strategically expanded the OneWorld Group into a diversified conglomerate with significant investments in real estate, further cementing his role as a foundational builder of economic infrastructure and growth.`,
            `As a board member, Mahmoud brings firsthand experience in scaling businesses in high-potential, high-complexity markets. His insights into regulatory landscapes, cross-border commerce, agent banking networks, and hybrid fintech-traditional business models are invaluable for any organization looking to operate or expand in West Africa. He embodies the blend of operational grit and strategic vision essential for transformative governance.`,
        ],
        img: jallowImg,
    },

    {
        id: "4",
        name: "Emmanuel Dushie",
        is_board: true,
        title: "Executive Director",
        description: [
            `*Emmanuel Dushie* brings a unique and valuable perspective to our board, combining hands-on technical expertise in sustainable infrastructure with sharp international business acumen and a deep understanding of emerging markets. As a licensed specialist in water and sanitation in both Ghana and Spain, and the founder of a successful solar energy company, Europeanart Engineering Ventures Ltd., he offers critical insight into the infrastructural and energy challenges that underpin technological scalability and resilience in growth regions.`,
            `His advanced studies in Negotiation and International Relations, completed in Spain and Switzerland, equip him with a sophisticated understanding of global business dynamics, cross-border trade, and stakeholder alignment—skills directly applicable to guiding our international expansion and partnership strategies. Through his trading firm, Paruza Company Limited, Emmanuel has demonstrated a proven ability to navigate complex regulatory and market environments, making him an invaluable asset in risk management and market-entry deliberations.`,
            `As a consultant for organizations including Kingdom Bridge Group and Cedar Vitalife, he has honed a strategic, advisory approach to governance, focusing on sustainable growth and operational integrity. Emmanuel’s grounded, real-world experience—from deploying solar solutions to facilitating international trade—ensures the board remains connected to both the practical and human dimensions of technology adoption.`,
            `His dedication to family and community reflects a leadership style rooted in balance, long-term thinking, and social responsibility—qualities that align with our commitment to ethical and sustainable innovation.`,
        ],
        img: dushieImg,
    },
    {
        id: "5",
        name: "Francis Ayayivi Amavi",
        is_board: true,
        title: "CTO",
        description: [
            `*Dr. Amavi Francis Ayayivi* is a visionary technologist and academic strategist with a proven track record of deconstructing complex systems—both computational and human—to build resilient, scalable, and secure frameworks for growth. His career is distinguished by a unique synthesis of deep technical expertise in computer science and a pioneering research agenda in instructional architecture, making him an invaluable asset for governance at the intersection of AI, blockchain, and cybersecurity.`,
            `Dr. Ayayivi has held leadership and lecturing roles at institutions including Data Link Institute of Business and Technology, Palm Institute College, and the University of Malaya, where he has been instrumental in designing and implementing advanced curricula in computer security, cloud computing, and Python programming. He is adept at translating theoretical concepts—from neural networks and cryptographic principles in blockchain to secure software development lifecycles—into practical, operational paradigms, fostering cultures of rigorous innovation and technical excellence.`,
            `He serves on the board of [Your Company Name], where he leverages his specialized expertise to shape corporate governance in technology ethics, oversee risk management frameworks for AI deployment, and counsel on the development of secure, explainable, and auditable intelligent systems. His research into the formal architecture of learning systems provides a novel, evidence-based approach to managing the human factors in cybersecurity and ensuring robust organizational adoption of new technologies.`,
            `A dedicated advocate for building foundational digital literacy, Dr. Ayayivi actively mentors the next generation of developers and security professionals, focusing on ethical application and secure coding practices.`,
            `Dr. Ayayivi is currently completing his Ph.D. in Education Science at the University of Malaya, specializing in the formal architecture of instructional technology. He holds a Master’s degree in Information Technology from Sikkim Manipal University and a Bachelor’s degree in Computer Science and Information Systems from Kwame Nkrumah University of Science and Technology. He maintains certifications in cybersecurity from Coursera and AI from the Huawei ICT Academy.`,
        ],
        img: amaviImg,
    },
]

export const technical_team: TeamMember[] = [
    {
        id: "6",
        name: "Eric Kabutey",
        is_board: true,
        title: "Founder - Chief Executive Officer",
        description: [
            `*Eric Kabutey* is a visionary Chief Technology Officer and technology strategist with over seven years of leadership experience delivering enterprise-grade solutions across fintech, healthcare, AI, and blockchain industries. He specializes in transforming complex business challenges into scalable, secure, and high-performance technical systems that drive growth and innovation.`,
            `As a hands-on technology executive, Eric has led development teams at organizations such as My Bonfo Wallet, OneWorld Financial Services, and BStar Medical Center, where he architected and deployed cutting-edge platforms including real-time payment systems, EV charging networks, hospital management software, and AI-powered telemedicine applications. His expertise spans full-cycle software development, DevSecOps automation, and cloud infrastructure design, with a sharp focus on building resilient systems that meet banking-grade security and compliance standards.`,
            `Eric is a recognized authority in applied AI, cryptographic security, and blockchain integration, with deep domain knowledge in fintech and cross-border financial systems. He has a proven ability to align technology initiatives with business objectives—ensuring robust, future-ready solutions that support scalability, regulatory compliance, and superior user experiences.  Eric is also a passionate advocate for tech education and digital inclusion, supporting initiatives that bring advanced technical skills to emerging markets and underserved communities.`,
            `He holds a Bachelor of Science in Computer Science with a specialisation in Software Engineering and Security and has pursued advanced studies in Artificial Intelligence and Machine Learning. Eric also maintains professional certifications in application security and serves as a technical reviewer for industry publications on AI and cloud computing.`,
        ],
        img: defaultImg,
    },
    {
        id: "11",
        name: "Francis Ayayivi Amavi",
        is_board: true,
        title: "CTO",
        description: [
            `*Dr. Amavi Francis Ayayivi* is a visionary technologist and academic strategist with a proven track record of deconstructing complex systems—both computational and human—to build resilient, scalable, and secure frameworks for growth. His career is distinguished by a unique synthesis of deep technical expertise in computer science and a pioneering research agenda in instructional architecture, making him an invaluable asset for governance at the intersection of AI, blockchain, and cybersecurity.`,
            `Dr. Ayayivi has held leadership and lecturing roles at institutions including Data Link Institute of Business and Technology, Palm Institute College, and the University of Malaya, where he has been instrumental in designing and implementing advanced curricula in computer security, cloud computing, and Python programming. He is adept at translating theoretical concepts—from neural networks and cryptographic principles in blockchain to secure software development lifecycles—into practical, operational paradigms, fostering cultures of rigorous innovation and technical excellence.`,
            `He serves on the board of [Your Company Name], where he leverages his specialized expertise to shape corporate governance in technology ethics, oversee risk management frameworks for AI deployment, and counsel on the development of secure, explainable, and auditable intelligent systems. His research into the formal architecture of learning systems provides a novel, evidence-based approach to managing the human factors in cybersecurity and ensuring robust organizational adoption of new technologies.`,
            `A dedicated advocate for building foundational digital literacy, Dr. Ayayivi actively mentors the next generation of developers and security professionals, focusing on ethical application and secure coding practices.`,
            `Dr. Ayayivi is currently completing his Ph.D. in Education Science at the University of Malaya, specializing in the formal architecture of instructional technology. He holds a Master’s degree in Information Technology from Sikkim Manipal University and a Bachelor’s degree in Computer Science and Information Systems from Kwame Nkrumah University of Science and Technology. He maintains certifications in cybersecurity from Coursera and AI from the Huawei ICT Academy.`,
        ],
        img: amaviImg,
    },
    {
        id: "10",
        name: "Emmanuel Dushie",
        is_board: true,
        title: "Cordinator - Smart Governance and Public Sector Solution",
        description: [
            `*Emmanuel Dushie* brings a unique and valuable perspective to our board, combining hands-on technical expertise in sustainable infrastructure with sharp international business acumen and a deep understanding of emerging markets. As a licensed specialist in water and sanitation in both Ghana and Spain, and the founder of a successful solar energy company, Europeanart Engineering Ventures Ltd., he offers critical insight into the infrastructural and energy challenges that underpin technological scalability and resilience in growth regions.`,
            `His advanced studies in Negotiation and International Relations, completed in Spain and Switzerland, equip him with a sophisticated understanding of global business dynamics, cross-border trade, and stakeholder alignment—skills directly applicable to guiding our international expansion and partnership strategies. Through his trading firm, Paruza Company Limited, Emmanuel has demonstrated a proven ability to navigate complex regulatory and market environments, making him an invaluable asset in risk management and market-entry deliberations.`,
            `As a consultant for organizations including Kingdom Bridge Group and Cedar Vitalife, he has honed a strategic, advisory approach to governance, focusing on sustainable growth and operational integrity. Emmanuel’s grounded, real-world experience—from deploying solar solutions to facilitating international trade—ensures the board remains connected to both the practical and human dimensions of technology adoption.`,
            `His dedication to family and community reflects a leadership style rooted in balance, long-term thinking, and social responsibility—qualities that align with our commitment to ethical and sustainable innovation.`,
        ],
        img: dushieImg,
    },
    {
        id: "4",
        name: "Bernard Aryeh",
        is_board: true,
        title: "VP Software Engineering and Code Governance.",
        description: [
            `*Eric Kabutey* is a visionary Chief Technology Officer and technology strategist with over seven years of leadership experience delivering enterprise-grade solutions across fintech, healthcare, AI, and blockchain industries. He specializes in transforming complex business challenges into scalable, secure, and high-performance technical systems that drive growth and innovation.`,
            `As a hands-on technology executive, Eric has led development teams at organizations such as My Bonfo Wallet, OneWorld Financial Services, and BStar Medical Center, where he architected and deployed cutting-edge platforms including real-time payment systems, EV charging networks, hospital management software, and AI-powered telemedicine applications. His expertise spans full-cycle software development, DevSecOps automation, and cloud infrastructure design, with a sharp focus on building resilient systems that meet banking-grade security and compliance standards.`,
            `Eric is a recognized authority in applied AI, cryptographic security, and blockchain integration, with deep domain knowledge in fintech and cross-border financial systems. He has a proven ability to align technology initiatives with business objectives—ensuring robust, future-ready solutions that support scalability, regulatory compliance, and superior user experiences.  Eric is also a passionate advocate for tech education and digital inclusion, supporting initiatives that bring advanced technical skills to emerging markets and underserved communities.`,
            `He holds a Bachelor of Science in Computer Science with a specialisation in Software Engineering and Security and has pursued advanced studies in Artificial Intelligence and Machine Learning. Eric also maintains professional certifications in application security and serves as a technical reviewer for industry publications on AI and cloud computing.`,
        ],
        img: aryehImg,
    },
    {
        id: "13",
        name: "Francis Ahuma",
        is_board: true,
        title: "IT Business Analyst",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: ahumaImg,
    },
    {
        id: "5",
        name: "Daniel Ofili Achigbue",
        is_board: true,
        title: "Head of Product Delivery",
        description: [
            `*Eric Kabutey* is a visionary Chief Technology Officer and technology strategist with over seven years of leadership experience delivering enterprise-grade solutions across fintech, healthcare, AI, and blockchain industries. He specializes in transforming complex business challenges into scalable, secure, and high-performance technical systems that drive growth and innovation.`,
            `As a hands-on technology executive, Eric has led development teams at organizations such as My Bonfo Wallet, OneWorld Financial Services, and BStar Medical Center, where he architected and deployed cutting-edge platforms including real-time payment systems, EV charging networks, hospital management software, and AI-powered telemedicine applications. His expertise spans full-cycle software development, DevSecOps automation, and cloud infrastructure design, with a sharp focus on building resilient systems that meet banking-grade security and compliance standards.`,
            `Eric is a recognized authority in applied AI, cryptographic security, and blockchain integration, with deep domain knowledge in fintech and cross-border financial systems. He has a proven ability to align technology initiatives with business objectives—ensuring robust, future-ready solutions that support scalability, regulatory compliance, and superior user experiences.  Eric is also a passionate advocate for tech education and digital inclusion, supporting initiatives that bring advanced technical skills to emerging markets and underserved communities.`,
            `He holds a Bachelor of Science in Computer Science with a specialisation in Software Engineering and Security and has pursued advanced studies in Artificial Intelligence and Machine Learning. Eric also maintains professional certifications in application security and serves as a technical reviewer for industry publications on AI and cloud computing.`,
        ],
        img: ofiliImg,
    },

    {
        id: "1",
        name: "Amen Benison",
        is_board: true,
        title: "Principal RPA Engineer",
        description: [
            `*Eric Kabutey* is a visionary Chief Technology Officer and technology strategist with over seven years of leadership experience delivering enterprise-grade solutions across fintech, healthcare, AI, and blockchain industries. He specializes in transforming complex business challenges into scalable, secure, and high-performance technical systems that drive growth and innovation.`,
            `As a hands-on technology executive, Eric has led development teams at organizations such as My Bonfo Wallet, OneWorld Financial Services, and BStar Medical Center, where he architected and deployed cutting-edge platforms including real-time payment systems, EV charging networks, hospital management software, and AI-powered telemedicine applications. His expertise spans full-cycle software development, DevSecOps automation, and cloud infrastructure design, with a sharp focus on building resilient systems that meet banking-grade security and compliance standards.`,
            `Eric is a recognized authority in applied AI, cryptographic security, and blockchain integration, with deep domain knowledge in fintech and cross-border financial systems. He has a proven ability to align technology initiatives with business objectives—ensuring robust, future-ready solutions that support scalability, regulatory compliance, and superior user experiences.  Eric is also a passionate advocate for tech education and digital inclusion, supporting initiatives that bring advanced technical skills to emerging markets and underserved communities.`,
            `He holds a Bachelor of Science in Computer Science with a specialisation in Software Engineering and Security and has pursued advanced studies in Artificial Intelligence and Machine Learning. Eric also maintains professional certifications in application security and serves as a technical reviewer for industry publications on AI and cloud computing.`,
        ],
        img: amenImg,
    },
    {
        id: "2",
        name: "Daniel Narh",
        is_board: true,
        title: "IT Procurement & Vendor Manager",
        description: [
            `*Eric Kabutey* is a visionary Chief Technology Officer and technology strategist with over seven years of leadership experience delivering enterprise-grade solutions across fintech, healthcare, AI, and blockchain industries. He specializes in transforming complex business challenges into scalable, secure, and high-performance technical systems that drive growth and innovation.`,
            `As a hands-on technology executive, Eric has led development teams at organizations such as My Bonfo Wallet, OneWorld Financial Services, and BStar Medical Center, where he architected and deployed cutting-edge platforms including real-time payment systems, EV charging networks, hospital management software, and AI-powered telemedicine applications. His expertise spans full-cycle software development, DevSecOps automation, and cloud infrastructure design, with a sharp focus on building resilient systems that meet banking-grade security and compliance standards.`,
            `Eric is a recognized authority in applied AI, cryptographic security, and blockchain integration, with deep domain knowledge in fintech and cross-border financial systems. He has a proven ability to align technology initiatives with business objectives—ensuring robust, future-ready solutions that support scalability, regulatory compliance, and superior user experiences.  Eric is also a passionate advocate for tech education and digital inclusion, supporting initiatives that bring advanced technical skills to emerging markets and underserved communities.`,
            `He holds a Bachelor of Science in Computer Science with a specialisation in Software Engineering and Security and has pursued advanced studies in Artificial Intelligence and Machine Learning. Eric also maintains professional certifications in application security and serves as a technical reviewer for industry publications on AI and cloud computing.`,
        ],
        img: narhImg,
    },
    {
        id: "14",
        name: "Patrick Bandama",
        is_board: true,
        title: "Head Of Creative Designs.",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: bandamaImg,
    },
    {
        id: "3",
        name: "Mesharck Adeyemi",
        is_board: true,
        title: "UI/UX Designer",
        description: [
            `*Eric Kabutey* is a visionary Chief Technology Officer and technology strategist with over seven years of leadership experience delivering enterprise-grade solutions across fintech, healthcare, AI, and blockchain industries. He specializes in transforming complex business challenges into scalable, secure, and high-performance technical systems that drive growth and innovation.`,
            `As a hands-on technology executive, Eric has led development teams at organizations such as My Bonfo Wallet, OneWorld Financial Services, and BStar Medical Center, where he architected and deployed cutting-edge platforms including real-time payment systems, EV charging networks, hospital management software, and AI-powered telemedicine applications. His expertise spans full-cycle software development, DevSecOps automation, and cloud infrastructure design, with a sharp focus on building resilient systems that meet banking-grade security and compliance standards.`,
            `Eric is a recognized authority in applied AI, cryptographic security, and blockchain integration, with deep domain knowledge in fintech and cross-border financial systems. He has a proven ability to align technology initiatives with business objectives—ensuring robust, future-ready solutions that support scalability, regulatory compliance, and superior user experiences.  Eric is also a passionate advocate for tech education and digital inclusion, supporting initiatives that bring advanced technical skills to emerging markets and underserved communities.`,
            `He holds a Bachelor of Science in Computer Science with a specialisation in Software Engineering and Security and has pursued advanced studies in Artificial Intelligence and Machine Learning. Eric also maintains professional certifications in application security and serves as a technical reviewer for industry publications on AI and cloud computing.`,
        ],
        img: meshackImg,
    },
    {
        id: "12",
        name: "MUHAMMED SILLAH",
        is_board: true,
        title: "Public Relations Manager",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: sillaImg,
    },
    {
        id: "15",
        name: "Olajuwon Olayinka",
        is_board: true,
        title: "Junior Software Dev",
        description: [
            `A promising junior software developer eager to learn and contribute to innovative projects.`,
        ],
        img: juwonimg,
    },
    {
        id: "16",
        name: "Niek Mereu",
        is_board: true,
        title: "Lead AI & Machine Learning Engineer",
        description: [
            `An experienced AI and machine learning engineer leading the development of cutting-edge AI solutions.`,
        ],
        img: niekimg,
    },
    {
        id: "17",
        name: "Esther Nuamonu",
        is_board: true,
        title: "PM & Human Resource Manager",
        description: [
            `A skilled project manager and HR professional ensuring smooth operations and talent management.`,
        ],
        img: estherimg,
    },
    {
        id: "18",
        name: "Samuel Fallah",
        is_board: true,
        title: "Graphic Designer",
        description: [
            `A highly creative and versatile **Graphic Designer** dedicated to transforming ideas into impactful visual communications.`,
            `Samuel specializes in **branding, web assets, and print media**, utilizing a sophisticated understanding of typography, color theory, and layout design.`,
            `He consistently delivers high-quality work that not only meets client objectives but also elevates brand identity and user engagement.`
        ],
        img: samuelimg,
    },
    {
        id: "19",
        name: "Joshua C Achebe",
        is_board: true,
        title: "Digital Marketer",
        description: [
            `A results-driven digital marketer focused on expanding online presence and driving customer engagement.`,
        ],
        img: joshuaimg,
    },


]

export const careers: JobItem[] = [
    {
        id: "1",
        slug: "security-engineer",
        role: "Security Engineer",
        location: "Gambia",
        time: "Full Time",
        salary: "Competitive",
        company: "Coders Clutch Limited",
        department: "Information Technology",
        about_role: {
            about: `
                We are seeking a dedicated and skilled Security Engineer to enhance our security efforts across infrastructure, 
                application, and product domains. In this role, you will drive the implementation of advanced cybersecurity measures, 
                identify and mitigate risks, and spearhead security automation initiatives. You will also collaborate closely with 
                engineering teams to integrate security into the software development lifecycle, ensuring our products and 
                applications remain secure by design. This is an exciting opportunity to shape and evolve the security program 
                for a dynamic organisation.
            `,
            skill: [
                {
                    res_id: "1",
                    title: "Key Responsibilities Infrastructure Security:",
                    res_items: [
                        `Design, implement, and maintain security measures for cloud-native environments, including serverless and containerised infrastructure.`,
                        `Utilize AWS security tools and open-source solutions to ensure infrastructure protection.`,
                        `Manage Identity and Access Management (IAM) through Infrastructure as Code (IaC).`,
                        `Enforce security baselines, such as PCI DSS and CIS AWS benchmarks.`,
                    ],
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Operational Security and Incident Response:",
                            contents: [
                                `Implement and manage SIEM solution for log aggregation, threat detection, and response.`,
                                `Develop and maintain security investigation use cases and Incident Response playbooks.`,
                                `Integrate threat intelligence to identify and mitigate advanced threats.`,
                                `Automate operational security processes to enhance efficiency and detection capabilities.`,
                                `Be the first responder for Security Incidents`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Application and Product Security:",
                            contents: [
                                `Perform security assessments of web, mobile applications, and APIs.`,
                                `Collaborate with engineering teams to integrate secure coding practices and vulnerability management into the development lifecycle.`,
                                `Manage application security tools within CI/CD pipelines and optimize Web Application.`,
                                `Firewall (WAF) configurations.`,
                                `Conduct periodic penetration tests and secure configuration reviews for infrastructure and applications.`
                            ]
                        },
                        {
                            id: "sub-3",
                            title: "Risk Management and Compliance:",
                            contents: [
                                `Conduct risk assessments, identify security gaps, and develop mitigation strategies.`,
                                `Collaborate on compliance efforts, including PCI DSS, PCI-PIN and SOC 2.`,
                                `Ensure security programs align with industry frameworks and organisational requirements `,
                            ]
                        },
                        {
                            id: "sub-4",
                            title: "Operational Security and Incident Response:",
                            contents: [
                                `Implement and manage SIEM solution for log aggregation, threat detection, and response.`,
                                `Develop and maintain security investigation use cases and Incident Response playbooks.`,
                                `Integrate threat intelligence to identify and mitigate advanced threats.`,
                                `Automate operational security processes to enhance efficiency and detection capabilities.`,
                                `Be the first responder for Security Incidents`
                            ]
                        },
                    ]
                },
                {
                    res_id: "1",
                    title: "Skills and Experience Required ",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Technical Expertise: ",
                            contents: [
                                `Bachelor's Degree in Information Security, Computer Science, Networking or computer-related studies`,
                                `Proficiency with AWS security services, open-source security tools, and IaC principles.`,
                                `Strong experience in SIEM management, log analysis, and incident response. `,
                                `Advanced knowledge of application security best practices, including OWASP Top 10 and secure SDLC.`,
                                `Broad exposure to various cybersecurity domains, including infrastructure security, application security, compliance, and operational security.`,
                                `Resourceful and creative problem-solver, comfortable using open-source tools to achieve security objectives.`,
                                `Familiarity with PCI DSS v4.0, PCI-PIN, SOC 2, ISO 27001, NIST CSF, and OWASP SAMM.`,
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Soft Skills: ",
                            contents: [
                                `Excellent communication skills (written and verbal) to articulate security issues to technical and non-technical stakeholders.`,
                                `Strong collaboration skills, with the ability to work closely with engineering, product, and leadership teams.`,
                            ]
                        },
                    ]
                }
            ],
        }
    },
    {
        id: "2",
        slug: "senior-mobile-developer",
        role: "Senior Mobile Developer",
        location: "Gambia or Ghana",
        min_experience: "7+ years",
        time: "Full Time",
        salary: "Competitive",
        company: "Coders Clutch Limited",
        department: "Engineering & AI",
        about_role: {
            about: `
                We are looking for a Senior Mobile Developer with strong experience across hybrid and native mobile development 
                to join a fast-moving digital platform project delivering large-scale applications in a regulated industry.
            `,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `Build and maintain hybrid mobile applications using Capacitor, with deep integration of native functionality`,
                                `Develop and maintain native code for iOS (Swift/Obj-C), Google Android (Java/Kotlin), and Huawei Android`,
                                `Integrate and optimize CI/CD pipelines using GitHub Actions`,
                                `Contribute to backend or full-stack development where appropriate, working closely with cross-functional teams`,
                                `Ensure robust performance, security, and maintainability of all mobile applications`,
                                `Collaborate with product teams, QA, and backend developers in an Agile environment`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Your expertise:",
                            contents: [
                                `Strong mobile development experience(at a senior level) building and shipping native mobile applications for:`,
                                `iOS using Swift/Objective-C`,
                                `Android using Kotlin/Java`,
                                `Huawei Mobile Services (HMS) integration experience`,
                                `Experience developing hybrid apps with Capacitor (or similar frameworks like Cordova/Ionic)`,
                                `Comfort with native plugin development, SDK integration, and working beyond the UI layer`,
                                `Exposure to working in teams using Agile/Scrum methodologies`,
                                `Ability to work autonomously and collaboratively in complex technical environments`,
                            ]
                        },
                        {
                            id: "sub-3",
                            title: "Desirable skills:",
                            contents: [
                                `Experience with frontend frameworks such as React or Angular`,
                                `Full stack development capabilities (Node.js, Java, APIs, etc.)`,
                                `Familiarity with cloud environments (e.g., AWS)`,
                                `Experience working in regulated industries (e.g., banking or fintech)`,
                            ]
                        },
                    ]
                },
                {
                    res_id: "1",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Other information applicable to the opportunity:",
                            contents: [
                                `Contract Position: 12 Months `,
                                `Location: Gambia or Ghana`,
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Why work for us? ",
                            contents: [
                                `Want to work for an organization that solves complex real-world problems with innovative software solutions? At Coders Clutch, we believe anything is possible with modern technology, software, and development expertise. We are continuously pushing the boundaries of innovative solutions across multiple industries using an array of technologies.`,
                                `You will be part of a consultancy, working with some of the most knowledgeable minds in the industry on interesting solutions across different business domains.`,
                                `Our culture of continuous learning will ensure that you will have all the opportunities, tools, and support to hone and grow your craft.`,
                                `By joining Coders Clutch you will have an open invitation to developer inspiring forums. A place where you will be able to connect and learn from and with your peers by sharing ideas, experiences, practices, and solutions.`,
                                `Coders Clutch is an equal opportunity employer with an obligation to achieve its own unique EE objectives in the context of Employment Equity targets. Therefore, our employment strategy gives primary preference to previously disadvantaged individuals or groups.`,
                            ]
                        },
                    ]
                }
            ],
        }
    },
    {
        id: "3",
        slug: "intermediate-net-developer",
        role: "Intermediate .Net Developer",
        location: "Hybrid",
        time: "Full Time",
        salary: "Competitive",
        company: "Coders Clutch Limited",
        department: "Engineering & AI",
        about_role: {
            about: `
                Are you a .NET Developer looking to apply your expertise in a collaborative and innovative environment? We're 
                seeking a skilled.NET Developer to join our growing team.

                In this role, you will be required to design, develop and maintain software applications using the .NET 
                framework.  The role involves building high-quality, scalable, and efficient solutions that meet technical 
                and business needs.  The developer will work closely with cross-functional teams, including business analyst 
                and project managers, to ensure successful delivery of software projects and ongoing system enhancements.
            `,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    res_items: [
                        `Design, implement, and maintain security measures for cloud-native environments, including serverless and containerised infrastructure.`,
                        `Utilize AWS security tools and open-source solutions to ensure infrastructure protection.`,
                        `Manage Identity and Access Management (IAM) through Infrastructure as Code (IaC).`,
                        `Enforce security baselines, such as PCI DSS and CIS AWS benchmarks.`,
                    ],
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `Develop and maintain web and desktop applications using C#, .NET Core, ASP.NET, and related technologies.`,
                                `Build and integrate RESTful APIs and services for seamless system interaction.`,
                                `Translate business requirements into technical designs that meet security, performance, and scalability standards.`,
                                `Participate in Agile ceremonies, code reviews, and collaborative development with designers, testers, and other developers.`,
                                `Maintain and improve existing systems, ensuring long-term stability and performance.`,
                                `Test, debug, and deploy solutions to cloud environments (Azure/AWS).`,
                                `Document code, architecture, and deployment processes.`,
                                `Research and suggest new tools or practices to improve delivery and quality.`,
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Your expertise:",
                            contents: [
                                `At least 5 years' experience in developing information systems.`,
                                `4+ years Software Development experience using C# / .Net.`,
                                `Excellent interpersonal skills and team working,`,
                                `Build and integrate RESTful APIs and services for seamless system interaction.`,
                                `Translate business requirements into technical designs that meet security, performance, and scalability standards.`,
                                `Maintain and improve existing systems, ensuring long-term stability and performance.`,
                            ]
                        },
                        {
                            id: "sub-3",
                            title: "The technology skillset required:",
                            contents: [
                                `Microsoft technologies - .Net; SQL, Oracle, SharePoint`,
                                `Software Development Tools: MS Visual Studio, Microsoft Team Foundation Server`,
                                `Software Languages: C#.Net, HTML, DHTML, JavaScript, VbScript, XML, CSS, Advanced Transact SQL.`,
                                `Technologies: Web Services, Windows Services, AJAX, Design Patterns, COM+, Active Directory, MFT, SharePoint`,
                            ]
                        },
                    ]
                },
                {
                    res_id: "1",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Other information applicable to the opportunity: ",
                            contents: [
                                `Contract Position: 12 Months`,
                                `Location: Gambia - Hybrid`,
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Personal Attributes: ",
                            contents: [
                                `Proven ability to work creatively and analytically in a problem-solving environment`,
                                `Confidence to express ideas as part of a team`,
                                `Excellent communication (written, oral) and interpersonal skills.`,
                                `A Self-Starter capable of working under pressure`,
                                `Curious and engaged in Continuous Learning and Professional Development`,
                            ]
                        },
                        {
                            id: "sub-3",
                            title: "Why work for us?",
                            contents: [
                                `If the daily grind makes you wonder if there's more to life than work, get ready to discover a professional journey that embraces excellence without compromise.`,
                                `You've arrived at Coders Clutch Infrastructure Services (Coders Clutch IS), where we are all about delivering outstanding client experiences through sustainable, innovative IT infrastructure solutions that tackle business challenges head-on. Here you get to partner with clients, helping them conquer their business Goliaths while they focus on scaling their empires.`,
                                `At our core, we're challengers, disruptors, and innovators. We're a community of skilled professionals with an ambitious spirit dedicated to providing for our clients while finding joy in the process. Our clients are at the heart of everything we do. Their satisfaction fuels our fire and propels us forward. We're talking about brainstorming sessions that sound like TED talks and spontaneous celebrations for achievements, big and small.`,
                                `Coders Clutch is an equal opportunity employer with an obligation to achieve its own unique EE objectives in the context of Employment Equity targets. Therefore, our employment strategy gives primary preference to previously disadvantaged individuals or groups.`,
                            ]
                        },
                    ]
                }
            ],
        }
    },
    {
        id: "4",
        slug: "intermediate-business-analyst",
        role: "Intermediate Business Analyst",
        location: "Gambia",
        min_experience: "4+ years",
        time: "Full Time",
        salary: "Competitive",
        company: "Coders Clutch Limited",
        department: "Sales and Distribution",
        about_role: {
            about: `
                We are seeking a proactive and analytical Intermediate Business Analyst to join our team in the Financial 
                Services sector. The successful person will act as a liaison between Business and IT, ensuring that 
                technology solutions align with business goals and deliver measurable Value. This role requires strong 
                collaboration with business stakeholders to understand their needs, define requirements, and support the 
                delivery of effective solutions.
            `,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `Partner with business stakeholders to understand strategic objectives, operational challenges, and improvement opportunities.`,
                                `Facilitate workshops and meetings to gather business requirements and define business processes.`,
                                `Document and validate business requirements, ensuring alignment with business goals.`,
                                `Assist in the development of business cases and feasibility studies.`,
                                `Translate business requirements into functional and technical specifications for IT teams.`,
                                `Work closely with developers, testers, and project managers to ensure solutions meet business expectations.`,
                                `Participate in solution design and ensure alignment with enterprise architecture and standards.`,
                                `Support User Acceptance Testing (UAT) and coordinate feedback from business users.`,
                                `Monitor project progress and communicate updates to both business and IT stakeholders.`,
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Your Expertise:",
                            contents: [
                                `4+ years of experience as a Business Analyst in IT projects, ideally within Financial Services.`,
                                `Proven experience working with both business and technical teams.`,
                                `Strong understanding of business analysis methodologies (BABOK, Agile, Waterfall).`,
                                `Familiarity with tools such as JIRA, Confluence, Visio, and BPMN.`,
                                `Knowledge of financial products, services, and regulatory environments.`,
                                `Excellent communication, facilitation, and stakeholder management skills.`,
                                `Strong analytical and problem-solving abilities.`,
                            ]
                        },
                        {
                            id: "sub-3",
                            title: "Qualifications:",
                            contents: [
                                `Matric`,
                                `Relevant IT/ BA Qualification`,
                                `Business Analysis certification (e.g., CBAP, PMI-PBA, or similar) is advantageous`,
                            ]
                        },
                        {
                            id: "sub-4",
                            title: "Preferred Attributes:",
                            contents: [
                                `Collaborative and business-focused mindset.`,
                                `Ability to translate complex business needs into clear technical requirements.`,
                                `Comfortable working in a fast-paced, dynamic environment.`,
                            ]
                        },
                    ]
                },
                {
                    res_id: "1",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Other information applicable to the opportunity:",
                            contents: [
                                `3 months contract`,
                                `Gambian based - hybrid way of work`,
                                `Level: Intermediate (4+ years' experience)`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Why work for us? ",
                            contents: [
                                `If the daily grind makes you wonder if there's more to life than work, get ready to discover a professional journey that embraces excellence without compromise.`,
                                `You've arrived at Coders Clutch Infrastructure Services (Coders Clutch IS), where we are all about delivering outstanding client experiences through sustainable, innovative IT infrastructure solutions that tackle business challenges head-on. Here you get to partner with clients, helping them conquer their business Goliaths while they focus on scaling their empires.`,
                                `At our core, we're challengers, disruptors, and innovators. We're a community of skilled professionals with an ambitious spirit dedicated to providing for our clients while finding joy in the process. Our clients are at the heart of everything we do. Their satisfaction fuels our fire and propels us forward. We're talking about brainstorming sessions that sound like TED talks and spontaneous celebrations for achievements, big and small.`,
                                `Coders Clutch is an equal opportunity employer with an obligation to achieve its own unique EE objectives in the context of Employment Equity targets. Therefore, our employment strategy gives primary preference to previously disadvantaged individuals or groups.`,
                            ]
                        },
                    ]
                }
            ],
        }
    },
    {
        id: "5",
        slug: "business-development-manager",
        role: "Business Development Manager",
        location: "Gambia",
        min_experience: "5+ years",
        time: "Full time",
        salary: "Competitive",
        company: "Coders Clutch Limited",
        department: "Sales and Distribution",
        about_role: {
            about: `We're looking for a dynamic and results-driven Business Development Manager to help grow our client base and expand market presence. In this role, you will identify new business opportunities, build strong relationships with potential clients, and develop strategic plans to drive revenue growth. The ideal candidate is a confident communicator with a proven track record in sales or business development and the ability to close deals and drive long-term value.`,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `To diversify the customer base. Sell products, solutions and services to existing or new customers.`,
                                `Compilation of quotations, tenders and solutions by the required due dates`,
                                `Assist operations with project execution functions as and when required.`,
                                `Follow-up on back orders and communicate any delays to customers`,
                                `Continuous feedback to the customer regarding the progress of the order`,
                                `Develop and maintain good customer relationships for the future growth of the company`,
                                `Use the various sales tools (CRM, ERP etc)`,
                                `Prepare and deliver presentation to new or existing customers`,
                                `Assisting the customers with vendor registrations or our credit applications`,
                                `Liaison with customers with regards to payment terms e.g. COD etc`,
                                `Follow up on technical questions from customers and conduct regular site or customer visits`,
                                `Evaluate customer inquiries and technical feasibility of projects`,
                                `Interface with the Company's engineering departments regarding customer requirements and specifications`,
                                `Support development of sales and marketing material`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Your expertise:",
                            contents: [
                                `5 to 10 years function related experience in Automated Metering Reading hardware, software and related services.`,
                                `Detailed Technical knowledge of the above technologies and application thereof`,
                                `Demonstrated ability in building customer relationships`,
                                `Preferred to have related work experience in Sub-Sahara African countries.`
                            ]
                        },
                        {
                            id: "sub-3",
                            title: "Qualifications:",
                            contents: [
                                `Matric Certificate`,
                                `Electrical Diploma or Equivalent`
                            ]
                        },
                        {
                            id: "sub-4",
                            title: "Qualifications preferred:",
                            contents: [
                                `B.Eng (Electrical)`
                            ]
                        }
                    ]
                },
                {
                    res_id: "2",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Other information applicable to the opportunity:",
                            contents: [
                                `Permanent Position`,
                                `Location: Gambia`,
                                `Work environment: 5 days at Office and Client sites`,
                                `Travel: Local and International travel as and when required`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Why work for us?",
                            contents: [
                                `Connected Industrial Eco-systems: The organisation provides Industrial OT solutions to drive sustainability of our communities. With a community of specialist OT system integrators who span across all industry segments in Sub Saharan Africa and OEM partnerships we are able to Design and Build as well as Optimize Industrial connectivity. Connecting people with trusted information and insights to drive responsible use of the world's resources.`,
                                `One of the leading Tech companies in the country: The organisation fosters an inclusive work culture, we collaborate and solve together.`,
                                `Great career development, an opportunity to work on great technology which creates value for our communities.`,
                                `Values based organisation, with bold and courageous people centred leadership.`,
                                `Opportunity to harness your skills and be innovative.`,
                                `Coders Clutch is an equal opportunity employer with an obligation to achieve its own unique EE objectives in the context of Employment Equity targets. Therefore, our employment strategy gives primary preference to previously disadvantaged individuals or groups.`
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "6",
        slug: "lead-developer-net-aws",
        role: "Lead Developer (.NET & AWS)",
        location: "Remote",
        min_experience: "5+ years",
        time: "Contract",
        salary: "Competitive",
        company: "Coders Clutch Limited",
        department: "Engineering & AI",
        about_role: {
            about: `We are seeking a dynamic Lead Developer (.NET and AWS focus) to join their leadership team and guide a small cross-functional team of engineers. The expectation of this role is to lead engineers across 2-3 agile teams within a specific domain, ensuring technical excellence, overseeing project execution, and fostering the professional growth of engineering staff. The ideal candidate will bring strong leadership and hands-on expertise to drive impactful solutions and deliver high-quality engineering outcomes.`,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `Lead a team of software engineers, providing technical guidance, architectural direction, and mentorship.`,
                                `Lead the end-to-end design, development, and maintenance of web applications, ensuring they meet high standards for functionality, performance, and user experience.`,
                                `Oversee the planning, execution, and delivery of complex software projects, ensuring they are completed on time and within scope.`,
                                `Foster a culture of collaboration, knowledge sharing, and best practices within the engineering team and cross-functional teams.`,
                                `Help the team tackle technical challenges, remove roadblocks, and ensure projects meet high-quality Standards.`,
                                `Establish testing strategies, develop unit tests, and provide expertise in debugging and optimizing code for performance and reliability.`,
                                `Work on integrating APIs and third-party services, focusing on security, scalability, and efficiency.`,
                                `Implement DevOps practices, including CI/CD pipelines, containerization, and cloud services to optimize application deployment and scaling.`,
                                `Mentor and collaborate with junior and intermediate developers, contributing to team growth, knowledge sharing, and best practices.`,
                                `Drive architectural decisions, system design, and code reviews to ensure scalable and maintainable software solutions.`,
                                `Contribute to the development and execution of the company's technical strategy and roadmap.`,
                                `Act as a liaison between the engineering team and non-technical stakeholders, providing updates and ensuring alignment with project goals.`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Your expertise:",
                            contents: [
                                `A Lead Developer with at least 8 years' experience in development with 2 years Technical Leadership experience with a combination of following skills:`,
                                `C#.NET`,
                                `Microservices architecture`,
                                `CSS, HTML, JavaScript.`,
                                `SQL Server or Relational Database experience.`,
                                `Strong cloud experience in AWS`,
                                `Excellent problem-solving and debugging skills.`,
                                `Exceptional communication, teamwork, and leadership abilities.`,
                                `Commitment to staying updated with emerging industry trends and technologies.`,
                                `Agile or Scrum certification and familiarity with project management tools.`
                            ]
                        }
                    ]
                },
                {
                    res_id: "2",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Why work for us?",
                            contents: [
                                `Want to work for an organization that solves complex real-world problems with innovative software solutions? At Coders Clutch, we believe anything is possible with modern technology, software, and development expertise. We are continuously pushing the boundaries of innovative solutions across multiple industries using an array of technologies.`,
                                `You will be part of a consultancy, working with some of the most knowledgeable minds in the industry on interesting solutions across different business domains.`,
                                `Our culture of continuous learning will ensure that you will have all the opportunities, tools, and support to hone and grow your craft.`
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "7",
        slug: "solution-architech",
        role: "Solution Architect",
        location: "Gambia or Ghana",
        min_experience: "8+ years",
        time: "Hybrid",
        salary: "Competitive",
        company: "Innovation Hub",
        department: "Engineering & AI",
        about_role: {
            about: `We are seeking an experienced and visionary Solution Architect to lead the design/ re-design and delivery of a strategic mobile application initiative within the Telecommunications industry. This role requires a deep understanding of cloud-native architecture (Microsoft Azure), and enterprise-grade mobile solutions. The successful person will play a pivotal role in shaping the technical direction of the project, ensuring scalability, performance, and alignment with business goals.`,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `Define and own the end-to-end solution architecture for a mobile application tailored to telecoms use cases (e.g., customer engagement, self-service, network insights).`,
                                `Collaborate with product owners, engineering teams, and business stakeholders to translate requirements into scalable technical solutions.`,
                                `Architect cloud-native solutions using Microsoft Azure, ensuring high availability, security, and performance.`,
                                `Design and integrate AI-driven features such as predictive analytics, chatbots, and personalization engines (beneficial, not essential).`,
                                `Provide architectural governance and ensure adherence to industry best practices and regulatory standards.`,
                                `Evaluate and recommend technologies, frameworks, and platforms to support long-term scalability and innovation.`,
                                `Mentor development teams and support technical decision-making throughout the SDLC.`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Your expertise:",
                            contents: [
                                `8+ years of experience in solution architecture, with a strong focus on mobile and cloud-based systems.`,
                                `Proven experience in the Telecommunications industry, with a solid understanding of domain-specific challenges and opportunities.`,
                                `Expertise in Microsoft Azure, including services such as Azure App Services, Azure Functions, Azure AI, Azure DevOps, and Azure API Management.`,
                                `Experience designing and integrating AI/ML solutions into enterprise applications (beneficial, not essential).`,
                                `Strong understanding of mobile architecture principles, including performance optimization, offline capabilities, and secure data handling.`,
                                `Ability to lead cross-functional teams and communicate complex technical concepts to non-technical stakeholders.`,
                                `Familiarity with JavaScript/TypeScript and React Native is advantageous but not essential.`,
                                `Azure certifications (e.g., Azure Solutions Architect Expert).`,
                                `Experience with telecoms platforms, APIs, and data models (e.g., OSS/BSS, CRM, network analytics).`,
                                `Knowledge of CI/CD pipelines, DevOps practices, and agile methodologies.`,
                                `Exposure to data privacy, security, and compliance frameworks relevant to telecoms (e.g., POPIA, GDPR).`
                            ]
                        },
                        {
                            id: "sub-3",
                            title: "Qualifications:",
                            contents: [
                                `Matric`,
                                `Relevant IT Qualification`,
                                `Azure Certification - beneficial`
                            ]
                        }
                    ]
                },
                {
                    res_id: "2",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Other information applicable to the opportunity:",
                            contents: [
                                `Location: Gambia (hybrid way of work)`,
                                `6 month contract`,
                                `Level: Senior (8+ years' experience)`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Why work for us?",
                            contents: [
                                `Want to work for an organization that solves complex real-world problems with innovative software solutions? At Coders Clutch, we believe anything is possible with modern technology, software, and development expertise. We are continuously pushing the boundaries of innovative solutions across multiple industries using an array of technologies.`,
                                `You will be part of a consultancy, working with some of the most knowledgeable minds in the industry on interesting solutions across different business domains.`,
                                `Our culture of continuous learning will ensure that you will have all the opportunities, tools, and support to hone and grow your craft.`,
                                `By joining Coders Clutch you will have an open invitation to developer inspiring forums. A place where you will be able to connect and learn from and with your peers by sharing ideas, experiences, practices, and solutions.`,
                                `Coders Clutch is an equal opportunity employer with an obligation to achieve its own unique EE objectives in the context of Employment Equity targets. Therefore, our employment strategy gives primary preference to previously disadvantaged individuals or groups.`
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "8",
        slug: "lead-java-developer",
        role: "Lead Java Developer",
        location: "Gambia or Ghana",
        min_experience: "7+ years",
        time: "Hybrid",
        salary: "Competitive",
        company: "Coders Clutch Limited",
        department: "Engineering & AI",
        about_role: {
            about: `We are seeking an experienced Lead Java Developer to take ownership of technical design and team leadership within a fast-paced, agile environment. The ideal candidate will have deep expertise in Java back-end development, microservices architecture, and modern engineering practices.`,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `Work with and direct the team's software engineers in setting the standards for coding, testing and software quality`,
                                `Collaborate closely with the team's BAs on the efficient transition of BDD's and Swaggers to the engineers as part of the overall workflow.`,
                                `Participate in peer reviews of solution designs and related code`,
                                `Provide technical leadership to the teams' software engineers through coaching and mentorship`,
                                `Identify and encourage areas for growth, education, and development within the team`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Key Requirements:",
                            contents: [
                                `7+ years professional Java experience`,
                                `Strong hands-on experience with Spring Boot, Java 11+`,
                                `Solid understanding of Microservices architecture`,
                                `Proficiency with Spring Data JPA, relational databases (e.g., PostgreSQL, MySQL)`,
                                `Exposure to Reactive programming (Reactor Core, WebFlux) is an advantage`,
                                `Experience working with ETL pipelines beneficial`,
                                `Jasper Reports experience is a plus`,
                                `Strong leadership skills - experience mentoring teams or acting as a tech lead`,
                                `Agile/Scrum experience`
                            ]
                        }
                    ]
                },
                {
                    res_id: "2",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Why work for us?",
                            contents: [
                                `Want to work for an organization that solves complex real-world problems with innovative software solutions? At Coders Clutch, we believe anything is possible with modern technology, software, and development expertise. We are continuously pushing the boundaries of innovative solutions across multiple industries using an array of technologies.`,
                                `You will be part of a consultancy, working with some of the most knowledgeable minds in the industry on interesting solutions across different business domains.`,
                                `Our culture of continuous learning will ensure that you will have all the opportunities, tools, and support to hone and grow your craft.`
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "9",
        slug: "crm-developer-nav",
        role: "CRM Developer (NAV/F&O)",
        location: "Gambia",
        min_experience: "7+ years",
        time: "Full time",
        salary: "Competitive",
        company: "Coders Clutch Limited",
        department: "Engineering & AI",
        about_role: {
            about: `We are seeking a skilled and solutions-driven CRM Developer with experience in Microsoft Dynamics NAV and Finance & Operations (F&O). In this role, you will be responsible for developing, customizing, and integrating CRM solutions that align with business needs and drive operational efficiency. The ideal candidate will have strong knowledge of Dynamics architecture, hands-on experience with AL, C/AL, X++, and a solid understanding of CRM workflows, data management, and system integrations. If you are passionate about building scalable solutions and enhancing CRM functionality within an enterprise environment, we'd love to hear from you.`,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `Technical responsibilities:`,
                                `Develop, customize, and implement Dynamics 365 BC/NAV solutions based on business requirements.`,
                                `Design, code, test, and debug applications within the Microsoft Dynamics ecosystem.`,
                                `Perform system integration, data migration, and performance optimization.`,
                                `Work closely with functional consultants and business stakeholders to translate business needs into technical solutions.`,
                                `Maintain and enhance existing applications, ensuring system stability and continuous improvement.`,
                                `Provide technical support and troubleshooting for deployed solutions.`,
                                `Sales & pre-sales responsibilities:`,
                                `Support sales efforts by contributing to proposals, pricing models, and implementation strategies.`,
                                `Assist in the development of proof-of-concept (POC) solutions to showcase system capabilities.`,
                                `Conduct technical demonstrations and presentations to clients and stakeholders.`,
                                `Collaborate with sales teams to understand client needs and translate them into tailored technical solutions.`,
                                `Stay updated on Microsoft Dynamics 365 BC/NAV innovations and industry best practices to advise clients effectively.`,
                                `Engage in discussions with prospective clients to address technical concerns and demonstrate the value of our solutions.`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Your expertise:",
                            contents: [
                                `Experience: 5+ years of experience developing and implementing Microsoft Dynamics 365 BC/NAV solutions.`,
                                `Technical Skills: Strong proficiency in AL, C/AL, C/SIDE, and SQL Server.`,
                                `System Integration: Experience with APIs, web services, and third-party integrations.`,
                                `Analytical Thinking: Ability to translate complex business processes into functional system requirements.`,
                                `Communication: Strong verbal and written communication skills for technical and non-technical audiences.`,
                                `Sales Acumen: Understanding of sales processes and ability to support pre-sales efforts with technical insights.`
                            ]
                        },
                        {
                            id: "sub-3",
                            title: "Qualifications required:",
                            contents: [
                                `Microsoft Dynamics 365 or MS Business Central Functional Consultant Associate`
                            ]
                        }
                    ]
                },
                {
                    res_id: "2",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Other information applicable to the opportunity:",
                            contents: [
                                `Location: Gambia`,
                                `Work Model: Onsite, Monday to Friday`
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "10",
        slug: "ai-ml-engineer",
        role: "AI/ML Engineer",
        location: "Gambia - Hybrid",
        min_experience: "8+ years",
        time: "Full time",
        salary: "Competitive",
        company: "Clutch Mind Ai",
        department: "Engineering & AI",
        about_role: {
            about: `We're looking for two skilled AI/ML Engineers to join our client on a 6-month contract, with the potential for extension. These roles will support ongoing initiatives within the data and AI function, focused on scalable machine learning delivery, feature engineering, and advanced data handling. The ideal candidates will have strong experience across the full ML engineering lifecycle, from data preparation to model deployment, and the ability to work closely with both technical and non-technical stakeholders.`,
            skill: [
                {
                    res_id: "1",
                    title: "Skills and Experience",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "What you'll do:",
                            contents: [
                                `Design, build, and scale machine learning models and solutions`,
                                `Develop robust data pipelines using Azure Databricks and other cloud-native tools`,
                                `Collaborate with business stakeholders to translate problems into ML solutions`,
                                `Use Python and SQL for data wrangling, analysis, and model development`,
                                `Implement CI/CD pipelines for model deployment and monitoring`,
                                `Apply version control practices using Git and Azure Repos`,
                                `Work within Agile teams and contribute to project planning and delivery`,
                                `Apply understanding of RAG pipelines and autonomous agents in practical applications`,
                                `Deliver insights and communicate findings clearly to non-technical teams`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "What we're looking for:",
                            contents: [
                                `Proven experience in Machine Learning Engineering`,
                                `Strong hands-on experience with Azure Databricks and Azure Cloud Platforms`,
                                `Proficiency in Python and SQL`,
                                `Experience with CI/CD pipelines and ML model monitoring`,
                                `Familiarity with version control and collaboration tools (e.g., Git, Azure Repos)`,
                                `Solid understanding of feature engineering and big data wrangling at scale`,
                                `Exposure to RAG pipelines and autonomous agents is advantageous`,
                                `Strong business acumen with ability to communicate with non-technical stakeholders`,
                                `Understanding of Agile methodologies and project management fundamentals`
                            ]
                        }
                    ]
                },
                {
                    res_id: "2",
                    title: "Other",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Other information applicable to the opportunity:",
                            contents: [
                                `Contract Position: 6 Month Renewable Contract`,
                                `Location: Gambia - Hybrid`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Why work for us?",
                            contents: [
                                `Want to work for an organization that solves complex real-world problems with innovative software solutions? At Coders Clutch, we believe anything is possible with modern technology, software, and development expertise. We are continuously pushing the boundaries of innovative solutions across multiple industries using an array of technologies.`,
                                `You will be part of a consultancy, working with some of the most knowledgeable minds in the industry on interesting solutions across different business domains.`,
                                `Our culture of continuous learning will ensure that you will have all the opportunities, tools, and support to hone and grow your craft.`,
                                `By joining Coders Clutch you will have an open invitation to developer inspiring forums. A place where you will be able to connect and learn from and with your peers by sharing ideas, experiences, practices, and solutions.`,
                                `Coders Clutch is an equal opportunity employer with an obligation to achieve its own unique EE objectives in the context of Employment Equity targets. Therefore, our employment strategy gives primary preference to previously disadvantaged individuals or groups.`
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "11",
        slug: "head-of-brand-design",
        role: "Head of Brand Design",
        location: "Gambia - onsite",
        min_experience: "10+ years",
        time: "Full Time",
        salary: "$204,000 - $255,000 USD",
        company: "Coders Clutch Limited",
        department: "Marketing and Communication",
        about_role: {
            about: `Coders Clutch AI accelerates AI development by providing high-quality training data and infrastructure. We work with leading organizations to solve complex problems, enabling them to build transformative AI models. Join our team to shape the future of AI and push the boundaries of innovation. The Coders Clutch Brand Studio is a strategic, multidisciplinary creative team shaping how Coders Clutch shows up in the world. We're responsible for the design and evolution of codersclutch.com, the creation of original content, and the development of marketing assets across all touchpoints.`,
            skill: [
                {
                    res_id: "1",
                    title: "About the Team",
                    contents: [
                        `The Coders Clutch Brand Studio is a strategic, multidisciplinary creative team shaping how Coders Clutch shows up in the world.`,
                        `We're responsible for the design and evolution of codersclutch.com, the creation of original content (illustration, iconography, motion, and visual storytelling), and the development of marketing assets across all touchpoints.`,
                        `As we grow, we're building a brand studio that not only delivers exceptional work, but continues to raise the bar for creative excellence as an aspirational AI company.`,
                        `This is a unique opportunity to help define the future of the Coders Clutch brand and build a design function that matches the ambition of our mission.`,
                        `This role blends creative direction with hands-on execution, guiding visual quality across the team.`
                    ]
                },
                {
                    res_id: "2",
                    title: "What You'll Do",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Creative Leadership",
                            contents: [
                                `Contribute to a growing team of designers and creatives responsible for shaping Coders Clutch's visual identity`,
                                `Own the visual expression of the Coders Clutch brand across all surfaces—uphold the craft bar, direct creative workstreams, lead design crits, shape scalable visual systems, and guide key creative decisions`,
                                `Drive hands-on design directions from concept through execution—across digital, print, motion, and event environments`,
                                `Partner with Brand Studio leadership and cross-functional teams across Marketing, Product, and Comms to co-create brand initiatives`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Brand Strategy & Execution",
                            contents: [
                                `Evolve and maintain a brand system that enables consistency and creative flexibility across internal and external communications`,
                                `Collaborate with internal stakeholders and external partners to deliver high-impact work that is visually innovative and strategically sound`,
                                `Implement scalable design systems and creative processes that enable fast iteration without sacrificing quality`
                            ]
                        }
                    ]
                },
                {
                    res_id: "3",
                    title: "Ideally You'll Have",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Experience & Qualifications",
                            contents: [
                                `10+ years of brand design and creative direction experience, with at least 5 years in a senior leadership role`,
                                `Experience with culturally-defining and design-led brands`,
                                `Proven track record of leading design teams within fast-paced, high-growth companies`,
                                `Experience translating complex, technical concepts into accessible, compelling narratives`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Skills & Capabilities",
                            contents: [
                                `Strong leadership and creative mentorship skills, with the ability to inspire and guide both senior and junior creatives`,
                                `Excellent communication and presentation skills, especially when collaborating cross-functionally or with executive stakeholders`,
                                `Fluent in hands-on design skills in Figma, Adobe, and emerging AI tools`,
                                `A leadership style that balances high standards with empathy, clarity, and creative trust`,
                                `Portfolio that reflects strong visual, typographic, and strategic thinking across various formats`
                            ]
                        }
                    ]
                },
            ]
        }
    },
    {
        id: "12",
        slug: "applied-ai-engineer-enterprise-genai",
        role: "Applied AI Engineer, Enterprise GenAI",
        location: "Gambia - onsite",
        min_experience: "5+ years",
        time: "Full Time",
        salary: "$168,200 - $248,500 USD",
        company: "Clutch Mind Ai",
        department: "Engineering & AI",
        about_role: {
            about: `AI is becoming vitally important in every function of our society. At Clutch Mind AI, our mission is to accelerate the development of AI applications. For 3 years, Coders Clutch establish Clutch Mind AI which has been the leading AI data foundry, helping fuel the most exciting advancements in the Gambian AI industry. The SGP ML team works on the front lines of this AI revolution, interfacing directly with clients to build cutting edge products using proprietary research and resources developed at Clutch Mind AI.`,
            skill: [
                {
                    res_id: "1",
                    title: "What You'll Do",
                    contents: [
                        `Own, plan, and optimize the AI behind our Enterprise customer's deepest technical problems`,
                        `Leverage SGP to build the most advanced AI agents across the industry including multimodal functionality, tool-calling, and more`,
                        `Have experience gathering business requirements and translating them into technical solutions`,
                        `Meet regularly with customer teams onsite and virtually, collaborating cross-functionally with all teams responsible for their data and ML needs`,
                        `Push production code in multiple development environments, writing and debugging code directly in both our customer's and Clutch Mind AI's codebases.`,
                        `Be able and willing to multi-task and learn new technologies quickly`
                    ]
                },
                {
                    res_id: "2",
                    title: "Ideally You'd Have",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Qualifications & Experience",
                            contents: [
                                `A love for solving deeply complex technical problems with ambiguity using state of the art research and AI`,
                                `Strong engineering background: Bachelor's degree in Computer Science, Mathematics, or another quantitative field or equivalent`,
                                `Deep familiarity with a data-driven approach when iterating on machine learning models`,
                                `Experience working with cloud technology stack (eg. AWS or GCP) and developing machine learning models in a cloud environment`,
                                `Proficiency in Python to write, test and debug code using common libraries (ie numpy, pandas)`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Nice To Haves",
                            contents: [
                                `Strong knowledge of software engineering best practices`,
                                `Have built applications taking advantage of Generative AI in real, production use cases`,
                                `Familiarity with state of the art LLMs and their strengths/weaknesses`
                            ]
                        }
                    ]
                },
            ]
        }
    },
    {
        id: "13",
        slug: "ai-infrastructure-engineer-agents",
        role: "AI Infrastructure Engineer, Agents",
        location: "Gambia - onsite",
        min_experience: "5+ years",
        time: "Full Time",
        salary: "$156,000 - $225,600 USD",
        company: "Clutch Mind Ai",
        department: "Engineering & AI",
        about_role: {
            about: `As a Software Engineer on the ML Infrastructure team, you will design and build the platform for our agent sandboxing platform: the secure, high-performance code execution layer powering our agentic workflows. This system underpins critical applications and research initiatives, and is deployed across both internal and customer-managed environments.`,
            skill: [
                {
                    res_id: "1",
                    title: "What You'll Do",
                    contents: [
                        `Design and build the sandboxing platform for code execution across containerized and virtualized environments.`,
                        `Ensure strong isolation, security, and reproducibility of execution across user sessions and workloads.`,
                        `Optimize for cold-start latency, memory footprint, and resource utilization at scale.`,
                        `Collaborate across security, infra, and product teams to support both internal research use cases and enterprise customer deployments.`,
                        `Lead architecture reviews and own projects from design through deployment in fast-paced, cross-functional settings.`
                    ]
                },
                {
                    res_id: "2",
                    title: "Ideally You'd Have",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Technical Expertise",
                            contents: [
                                `3+ years of experience building high-performance systems software (e.g. OS, container runtime, VMM, networking stack).`,
                                `Deep understanding of Linux internals, process isolation, memory management, cgroups, namespaces, etc.`,
                                `Experience with containerization and virtualization technologies (e., Docker, Firecracker, gVisor, QEMU, Kata Containers).`,
                                `Proficiency in a systems programming language such as Go, Rust, or C/C++.`,
                                `Familiarity with networking, security hardening, sandboxing techniques, and kernel-level performance tuning.`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Additional Skills",
                            contents: [
                                `Comfort working across infrastructure layers, from kernel modules to orchestration frameworks (e., Kubernetes).`,
                                `Strong debugging skills and the ability to make performance/security tradeoffs in production systems.`
                            ]
                        }
                    ]
                },
                {
                    res_id: "3",
                    title: "Nice To Haves",
                    contents: [
                        `Familiarity with LLM agents and agent frameworks (e., OpenHands, Agent2Agent, MCP).`,
                        `Experience running secure workloads in multi-tenant or untrusted environments (e., FaaS, CI sandboxes, remote notebooks).`,
                        `Exposure to snapshotting and restore techniques (e., CRIU, VM snapshots, overlayfs).`
                    ]
                }
            ]
        }
    },
    {
        id: "14",
        slug: "senior-product-designer-enterprise-ai",
        role: "Senior Product Designer, Enterprise AI",
        location: "Gambia",
        min_experience: "4+ years",
        time: "Full Time",
        salary: "$180,000 - $225,000 USD",
        company: "Clutch Mind AI",
        department: "Engineering & AI",
        about_role: {
            about: `Coders Clutch Generative AI Platform (JOGNO G7 AI) is an enterprise-grade AI platform providing APIs for knowledge retrieval, inference, evaluation, and more. We are looking for a highly pragmatic and ownership-driven Product Designer to help build AI-powered applications that redefine enterprise workflows and push the boundaries of interactive AI.`,
            skill: [
                {
                    res_id: "1",
                    title: "What You'll Do",
                    contents: [
                        `Design and refine user experiences for AI-powered applications used by major enterprise customers`,
                        `Lead end-to-end design efforts for Coders Clutch's GenAI Platform, ensuring complex AI workflows are approachable and intuitive`,
                        `Collaborate cross-functionally with product managers, engineers, and stakeholders to define requirements`,
                        `Conduct user research and gather feedback to validate design assumptions and iterate rapidly`,
                        `Prototype new ideas quickly, testing and validating hypotheses around AI-driven user experiences`,
                        `Own the entire design process for projects—from concept to final implementation`,
                        `Contribute to our design system, ensuring consistent design language across all products`
                    ]
                },
                {
                    res_id: "2",
                    title: "Ideally You'd Have",
                    contents: [
                        `4+ years of experience designing products in fast-paced, tech-forward environments`,
                        `A portfolio showcasing ownership of end-to-end product design, especially in building complex, technical, or AI-powered products`,
                        `Experience designing for highly technical audiences, such as developers, data scientists, or ML engineers`,
                        `A pragmatic approach to design, balancing user empathy, technical constraints, and business objectives`,
                        `Familiarity with design tools (Figma, Sketch, etc.) and prototyping abilities`,
                        `Excellent communication skills and ability to present complex design concepts`,
                        `A strong sense of "ambition shapes reality"—thriving in environments with ownership, autonomy, and scrappiness`
                    ]
                }
            ]
        }
    },
    {
        id: "15",
        slug: "national-security-policy-lead",
        role: "National Security Policy Lead",
        location: "Global",
        min_experience: "10+ years",
        time: "Full Time",
        salary: "$195,000 - $225,000 USD",
        company: "Coders Clutch Limited",
        department: "Government & Public Sector",
        about_role: {
            about: `At Coders Clutch, we believe that AI will dramatically improve the world, and our mission is to accelerate the development of AI. As Coders Clutch continues to grow its Government Relations function, we are looking for a National Security Policy Lead to support our engagements with the National Security apparatus, Congress, and the Administration.`,
            skill: [
                {
                    res_id: "1",
                    title: "Responsibilities",
                    contents: [
                        `Lead Coders Clutch's AI policy engagement with the National Security Apparatus`,
                        `Work with Public Sector Business Unit to successfully shape and create programs at the DoD, Intelligence Agencies, and more`,
                        `Lead and support engagements with industry trade associations and other relevant groups`,
                        `Work to understand business objectives and translate them into Policy wins`,
                        `Assist in the formation of Coders Clutch's Policy strategy and priorities`,
                        `Advise and brief Coders Clutch Leadership on policies impacting artificial intelligence policy`,
                        `Build relationships with relevant stakeholders`,
                        `Monitor policy and regulatory changes for potential impact to Coders Clutch's business`
                    ]
                },
                {
                    res_id: "2",
                    title: "Required Skills and Qualifications",
                    contents: [
                        `Between 4-6 years experience in Defense Policy or working in the Government`,
                        `Experience successfully securing consensus for priorities at trade associations, standards bodies`,
                        `Experience leading company response to Rulemakings, Request for Comments, etc.`,
                        `Excellent written and verbal communication skills`,
                        `Previous technical experience such as publishing research, covering technology policy, or working at a technical Government Agency`,
                        `A history of managing multiple works streams simultaneously`
                    ]
                },
                {
                    res_id: "3",
                    title: "Nice To Haves",
                    contents: [
                        `An active US government security clearance`,
                        `History working within a startup environment or tech company`,
                        `An active country of residence security clearance history, working within a startup environment or tech company`
                    ]
                }
            ]
        }
    },
    {
        id: "16",
        slug: "ai-infrastructure-engineer-model-serving-platform",
        role: "AI Infrastructure Engineer, Model Serving Platform",
        location: "Hybrid",
        min_experience: "4+ years",
        time: "Full Time",
        salary: "$175,000 - $220,000 USD",
        company: "Clutch Mind Ai",
        department: "Engineering & AI",
        about_role: {
            about: `As a Software Engineer on the ML Infrastructure team, you will design and build platforms for scalable, reliable, and efficient serving of LLMs. Our platform powers cutting-edge research and production systems, supporting both internal and external use cases across various environments.`,
            skill: [
                {
                    res_id: "1",
                    title: "What You'll Do",
                    contents: [
                        `Build and maintain fault-tolerant, high-performance systems for serving LLMs workloads at scale`,
                        `Build an internal platform to empower LLM capability discovery`,
                        `Collaborate with researchers and engineers to integrate and optimize models for production and research use cases`,
                        `Conduct architecture and design reviews to uphold best practices in system design and scalability`,
                        `Develop monitoring and observability solutions to ensure system health and performance`,
                        `Lead projects end-to-end, from requirements gathering to implementation, in a cross-functional environment`
                    ]
                },
                {
                    res_id: "2",
                    title: "Ideally You'd Have",
                    contents: [
                        `4+ years of experience building large-scale, high-performance backend systems`,
                        `Strong programming skills in one or more languages (e., Python, Go, Rust, C++)`,
                        `Experience with LLM serving and routing fundamentals (e. rate limiting, token streaming, load balancing, budgets, etc.)`,
                        `Experience with LLM capabilities and concepts such as reasoning, tool calling, prompt templates, etc.`,
                        `Experience with containers and orchestration tools (e., Docker, Kubernetes)`,
                        `Familiarity with cloud infrastructure (AWS, GCP) and infrastructure as code (e., Terraform)`,
                        `Proven ability to solve complex problems and work independently in fast-moving environments`
                    ]
                },
                {
                    res_id: "3",
                    title: "Nice To Haves",
                    contents: [
                        `Experience with modern LLM serving frameworks such as vLLM, SGLang, TensorRT-LLM, or text-generation-inference`
                    ]
                }
            ]
        }
    },
    {
        id: "17",
        slug: "director-of-robotics-operations",
        role: "Director of Robotics Operations",
        location: "Gambia - Hybrid",
        min_experience: "10+ years",
        time: "Full Time",
        salary: "$204,000 - $255,000 USD",
        company: "Clutch Mind Ai",
        department: "Robotics and IoT",
        about_role: {
            about: `Coders Clutch AI's/Robotics team (Clutch Mind AI) is enabling the future of physical AI by building the most advanced data collection and annotation programs in the industry. We are hiring a Director of Robotics Operations to lead these efforts end-to-end—from onsite lab operations to managing distributed contributor networks and downstream annotation workflows.`,
            skill: [
                {
                    res_id: "1",
                    title: "What You'll Do",
                    contents: [
                        `Own and scale the full operations lifecycle for robotics data collection—from onsite physical setups to distributed contractor management`,
                        `Lead a diverse team including Site Operations Leads, Strategic Project Leads, Engagement Managers, and Program Managers`,
                        `Manage large networks of independent contributors across the globe to execute high-volume data collection at scale`,
                        `Build and operationalize high-throughput, high-quality workflows across robotics programs`,
                        `Collaborate closely with Robotics Field Engineers, who are technical stakeholders responsible for hardware deployment`,
                        `Partner cross-functionally with Go-To-Market, Engineering, and Solutions teams`,
                        `Define and own key performance indicators (KPIs), including throughput, yield, cost per hour of data, and turnaround times`,
                        `Solve operational bottlenecks and scale infrastructure to support rapid growth`
                    ]
                },
                {
                    res_id: "2",
                    title: "You Have",
                    sub_res: [
                        {
                            id: "sub-1",
                            title: "Experience & Leadership",
                            contents: [
                                `10+ years of experience in operations, logistics, robotics, or related fields`,
                                `Proven track record leading large, cross-functional teams`,
                                `Demonstrated ability to manage and scale hybrid workforces—both full-time staff and distributed independent contractors`,
                                `Experience building and running on-site physical operations (labs, field sites, or hardware-intensive environments)`,
                                `Proven success in high-complexity program execution and cross-functional collaboration`
                            ]
                        },
                        {
                            id: "sub-2",
                            title: "Skills & Capabilities",
                            contents: [
                                `Experience managing highly technical operational workflows with both hardware and software in the loop`,
                                `Technical fluency and a data-driven mindset; comfort working with SQL or Python is a strong plus`,
                                `Experience operating in international markets, especially LATAM, including field deployments, compliance, and vendor management`,
                                `Strong systems thinking, process design, and problem-solving skills`,
                                `High operational rigor and a drive for continuous improvement`,
                                `A track record of operational output excellence`
                            ]
                        }
                    ]
                },
                {
                    res_id: "3",
                    title: "Nice To Have",
                    contents: [
                        `Experience in robotics, AV testing, or large-scale data annotation programs`,
                        `Familiarity with fleet management, compliance frameworks, or automation workflows`,
                        `Experience optimizing a global workforce with onshore and offshore operations`
                    ]
                }
            ]
        }
    },
    // {
    //     id: "18",
    //     slug: "seniro-cyber-security-operations-analyst-l2",
    //     role: "Senior Cyber Security Operations Analyst (L2)",
    //     location: "Gambia",
    //     min_experience: "",
    //     time: "Full Time",
    //     salary: "Competitive",
    //     company: "Coders Clutch Limited",
    //     department: "Information Technology",
    //     about_role: {
    //         about: `The Senior Cyber Security Operations Center Analyst L2 is a technical and supervisory role at Coders Clutch Limited. This position involves being a knowledgeable, hands-on technical specialist handling the escalation of complex technical work to provide comprehensive SIEM monitoring, threat detection, and coordinating incident response within the Cyber Security Operations Center as well as providing advisory and developing cyber security solutions for our customers.`,
    //         skill: [
    //             {
    //                 res_id: "1",
    //                 title: "Job Purpose & Context",
    //                 contents: [
    //                     `Technical and supervisory role handling escalation of complex technical work for SIEM monitoring and threat detection`,
    //                     `Monitors Ecobank group network for attacks, malware, and actively hunts for evidence of compromise`,
    //                     `Targets monitoring for compliance violations and escalates to appropriate teams for immediate mitigations`,
    //                     `Works 24x7x365 basis providing assistance to L1 Analysts in responding to cyber-attacks`,
    //                     `Monitors, analyzes and responds to infrastructure threats and vulnerabilities continuously`,
    //                     `Mentors and trains team members while enhancing organizational processes and standards`
    //                 ]
    //             },
    //             {
    //                 res_id: "2",
    //                 title: "Key Responsibilities",
    //                 sub_res: [
    //                     {
    //                         id: "sub-1",
    //                         title: "Leadership & Supervision",
    //                         contents: [
    //                             `Provide supervision to L1 analysts charged with threat monitoring and first level incident response`,
    //                             `Serve as an escalation resource and mentor for L1 analysts`,
    //                             `Develop and support strategic plans and projects to meet Global Security and SOC goals`,
    //                             `Drive execution of daily, weekly, and monthly metrics for statistical threats and KPIs`
    //                         ]
    //                     },
    //                     {
    //                         id: "sub-2",
    //                         title: "Technical Operations",
    //                         contents: [
    //                             `Monitor and analyze all security incidents detected by the SIEM`,
    //                             `Monitor the network for compliance violations on 24x7 basis`,
    //                             `Perform investigations and escalation for complex or high severity security threats or incidents`,
    //                             `Perform SIEM Engineering activities and operate all data analysis platforms`,
    //                             `Perform health checks of SIEM Components and review SEIM logs`,
    //                             `Provide tier-2 support of security infrastructure including SIEM, endpoint antivirus, vulnerability management`
    //                         ]
    //                     },
    //                     {
    //                         id: "sub-3",
    //                         title: "Analysis & Reporting",
    //                         contents: [
    //                             `Author and coordinate security status reports to provide system status`,
    //                             `Report on threat and vulnerability data using risk-evaluation methodologies`,
    //                             `Analyze, troubleshoot, and investigate security-related information systems' anomalies`,
    //                             `Perform internal and external vulnerability scans against network infrastructure`,
    //                             `Use Service Desk ticketing system to track escalated issues`
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 res_id: "3",
    //                 title: "Experience & Qualifications",
    //                 sub_res: [
    //                     {
    //                         id: "sub-1",
    //                         title: "Education",
    //                         contents: [
    //                             `Bachelor's degree in Computer Science, Computer Engineering, Cyber Security, Forensics, Information Technology, or related field preferred`,
    //                             `Master's degree in similar areas is a plus`
    //                         ]
    //                     },
    //                     {
    //                         id: "sub-2",
    //                         title: "Experience Requirements",
    //                         contents: [
    //                             `5+ years of working experience in Information Technology and/or Cyber/Information security environment`,
    //                             `Minimum 2-year experience working with systems monitoring (log monitoring, event management, compliance monitoring, vulnerability scanning tools)`,
    //                             `Minimum 1-year experience working with full packet capture products`,
    //                             `Experience with ticketing systems, including workflow, escalation and resolution documentation`,
    //                             `Experience and knowledge conducting cyber threat analysis originating from phishing emails`
    //                         ]
    //                     },
    //                     {
    //                         id: "sub-3",
    //                         title: "Technical Knowledge",
    //                         contents: [
    //                             `Thorough understanding of fundamental security and network concepts (Operating systems, intrusion/detection, TCP/IP, ports, HTTP, DNS, web application security, etc.)`,
    //                             `Knowledge of industry recognized analysis frameworks (Kill Chain, Diamond Model, MITRE ATT&CK, NIST Incident Response, etc.)`,
    //                             `Understanding of the 6 phases of Incident Handling`,
    //                             `Familiarity with Industry Standards (PCI-DSS, NIST 800-53, NIST 800-82, ISO 27001, etc.)`,
    //                             `Previous experience working with network tools and technologies (firewall, proxies, IPS/IDS devices, full packet capture, etc.)`
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 res_id: "4",
    //                 title: "Certifications",
    //                 sub_res: [
    //                     {
    //                         id: "sub-1",
    //                         title: "Required Certifications",
    //                         contents: [
    //                             `CISSP, CISM and/or CISA`
    //                         ]
    //                     },
    //                     {
    //                         id: "sub-2",
    //                         title: "Additional Preferred Certifications",
    //                         contents: [
    //                             `GCIA, GCIH, CEH, CFCE, OSCP, SANS, CRISC, CEH, CHFI, etc.`
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 res_id: "5",
    //                 title: "Skills & Attributes",
    //                 sub_res: [
    //                     {
    //                         id: "sub-1",
    //                         title: "Technical Skills",
    //                         contents: [
    //                             `Analytical and problem-solving skills`,
    //                             `Knowledge of Security Architecture & design concepts including defense in depth`,
    //                             `Good knowledge in systems architecture`,
    //                             `Demonstrated ability to quickly understand complex systems`,
    //                             `Enterprise IT experience and good working knowledge of productivity tools`
    //                         ]
    //                     },
    //                     {
    //                         id: "sub-2",
    //                         title: "Personal Attributes",
    //                         contents: [
    //                             `Strong interpersonal skills including strong verbal, written communication and excellent listening skills`,
    //                             `Good attention to detail skills`,
    //                             `Capacity to interact, escalate to and influence senior managers and customers`,
    //                             `Ability to work on many tasks simultaneously in a high-pressure environment`,
    //                             `High level of personal integrity and ability to handle confidential matters with proper judgment`
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 res_id: "6",
    //                 title: "Organizational Information",
    //                 contents: [
    //                     `Organization: Group Cyber Security`,
    //                     `Reports to: Cyber Security Operations Center Manager`,
    //                     `Salary Grade/Band: 3A`
    //                 ]
    //             }
    //         ]
    //     }
    // },
];
