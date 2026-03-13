"use client";

import React, { useState, useMemo } from "react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { useMessenger } from "@/context/messenger-context";
import { Button } from "@/components/ui/button";
import {
    Code,
    DeviceMobile,
    Shield,
    ChartBar,
    Database,
    FileText,
    Buildings,
    Check,
    WhatsappLogo,
    Envelope
} from "@phosphor-icons/react";
import { ChevronRight, X, ArrowLeft, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "../shared/typography";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isSameDay,
    addDays,
    eachDayOfInterval,
    isBefore,
    startOfToday,
    isWeekend
} from "date-fns";
import { cn } from "@/lib/utils";

// --- Types & Data ---

type Purpose = "project" | "support" | "consultation" | "other";

interface FormData {
    purpose: Purpose | "";
    solution: string;
    subSolutions: string[];
    budget: string;
    customBudget: string;
    priority: string;
    date: Date | null;
    time: string;
    message: string;
    deliveryMethod: "whatsapp" | "email" | "";
}

const solutionsData = [
    {
        id: "1",
        title: "Digital Solutions",
        icon: Code,
        contents: [
            { id: "1-1", title: "Website Design" },
            { id: "1-2", title: "Ecommerce solutions" },
            { id: "1-3", title: "UI/UX Design" },
            { id: "1-4", title: "Product Development" },
            { id: "1-5", title: "Software Outsourcing" },
            { id: "1-6", title: "Branding lab & PR" },
        ]
    },
    {
        id: "2",
        title: "Mobile Applications",
        icon: DeviceMobile,
        contents: [
            { id: "2-1", title: "iOS Apps" },
            { id: "2-2", title: "Android Apps" },
            { id: "2-3", title: "Native Apps" },
            { id: "2-4", title: "Hybrid Apps" },
        ]
    },
    {
        id: "3",
        title: "Custom Software",
        icon: Code,
        contents: [
            { id: "3-1", title: "MVP Development" },
            { id: "3-2", title: "Full Stack Development" },
            { id: "3-3", title: "SaaS Product Development" },
            { id: "3-4", title: "AI Development" },
            { id: "3-5", title: "AI Agent and Chatbot" },
            { id: "3-6", title: "Hire Remote Developers" },
        ]
    },
    {
        id: "4",
        title: "IT Security and Cloud",
        icon: Shield,
        contents: [
            { id: "4-1", title: "Cloud Monitoring" },
            { id: "4-2", title: "Infrastructure and Configuration Management" },
            { id: "4-3", title: "DevOps Consulting Services" },
            { id: "4-4", title: "DevOps Implementation" },
            { id: "4-5", title: "DevOps CI/CD Services" },
            { id: "4-6", title: "DevOps Release Management" },
        ]
    },
    {
        id: "5",
        title: "Digital Transformation",
        icon: ChartBar,
        contents: [
            { id: "5-1", title: "IT Strategy Development" },
            { id: "5-2", title: "IT Infrastructure Modernization" },
            { id: "5-3", title: "Business Process Automation" },
            { id: "5-4", title: "Customer Experience Transformation" },
        ]
    },
    {
        id: "6",
        title: "Managed IT Services",
        icon: Database,
        contents: [
            { id: "6-1", title: "IT Infrastructure Management" },
            { id: "6-2", title: "Cloud Management Services" },
            { id: "6-3", title: "Institutional Cyber Security" },
            { id: "6-4", title: "End-user Support" },
        ]
    },
    {
        id: "7",
        title: "Global Licensing and Renewals",
        icon: FileText,
        contents: [
            { id: "7-1", title: "License Procurement" },
            { id: "7-2", title: "Renewals Management" },
            { id: "7-3", title: "Compliance Support" },
            { id: "7-4", title: "Software Asset Management" },
            { id: "7-5", title: "Tillering Operations" },
            { id: "7-6", title: "Advisory Services" },
        ]
    },
    {
        id: "8",
        title: "Government & Public Sector Solutions",
        icon: Buildings,
        contents: [
            { id: "8-1", title: "Digital Health" },
            { id: "8-2", title: "Smart Governance" },
            { id: "8-3", title: "Smart Infrastructure" },
            { id: "8-4", title: "Smart Education" },
            { id: "8-5", title: "Smart Mobility / IoT for Automobile" },
            { id: "8-6", title: "Public Safety" },
            { id: "8-7", title: "Environmental Sustainability" },
            { id: "8-8", title: "Data & AI Management" },
        ]
    },
];

const budgetSuggestions = ["$5k - $10k", "$10k - $20k", "Monthly Retainer", "Unsure / Need Quote"];

const budgets = [
    { id: "20k", label: "20k-30k" },
    { id: "30k", label: "30k-40k" },
    { id: "40k", label: "40k-50k" },
    { id: "custom", label: "Custom" },
];

const purposes = [
    { id: "project", label: "Start a New Project" },
    { id: "support", label: "Technical Support" },
    { id: "consultation", label: "Free Consultation" },
    { id: "other", label: "Other Inquiries" },
];

const priorities = [
    { id: "high", label: "High - Critical Issue" },
    { id: "medium", label: "Medium - Normal Support" },
    { id: "low", label: "Low - General Query" },
];

const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"
];

const unavailableSlots = ["10:00", "14:30"];

export default function CustomMessenger() {
    const { isOpen, closeMessenger } = useMessenger();
    const [step, setStep] = useState(1);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [formData, setFormData] = useState<FormData>({
        purpose: "",
        solution: "",
        subSolutions: [],
        budget: "",
        customBudget: "",
        priority: "",
        date: null,
        time: "",
        message: "",
        deliveryMethod: ""
    });

    const pathSteps = useMemo(() => {
        if (formData.purpose === "project") return ["purpose", "solution", "sub-solutions", "budget", "date", "message", "delivery"];
        if (formData.purpose === "support") return ["purpose", "priority", "message", "delivery"];
        if (formData.purpose === "consultation") return ["purpose", "date", "message", "delivery"];
        if (formData.purpose === "other") return ["purpose", "message", "delivery"];
        return ["purpose"];
    }, [formData.purpose]);

    const totalSteps = pathSteps.length;
    const currentStepKey = pathSteps[step - 1];

    const handleNext = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => Math.max(1, prev - 1));
    };

    const toggleSubSolution = (label: string) => {
        setFormData(prev => {
            const current = [...prev.subSolutions];
            if (current.includes(label)) {
                return { ...prev, subSolutions: current.filter(s => s !== label) };
            }
            return { ...prev, subSolutions: [...current, label] };
        });
    };

    const formatMessageBody = () => {
        const parts: string[] = [];

        const budgetValue = formData.budget === "Custom" ? formData.customBudget : formData.budget;
        const dateStr = formData.date ? format(formData.date, 'PPP') : "";
        const timeStr = formData.time;

        if (formData.purpose === "project") {
            parts.push(`Hello! I'm interested in starting a new project with Coders Clutch.`);
            parts.push(`I'm looking for *${formData.solution}* services, specifically focusing on *${formData.subSolutions.join(", ")}*.`);
            if (budgetValue) parts.push(`Our projected budget is *${budgetValue}*.`);
            if (dateStr) parts.push(`I've scheduled a discovery meeting for *${dateStr}* at *${timeStr}*.`);
        } else if (formData.purpose === "support") {
            parts.push(`Hello, I'm reaching out for technical support regarding a *${formData.priority.split(' - ')[0].toLowerCase()}* priority issue.`);
        } else if (formData.purpose === "consultation") {
            parts.push(`Hello! I'd like to book a free consultation to discuss my project ideas.`);
            if (dateStr) parts.push(`I've requested a slot for *${dateStr}* at *${timeStr}*.`);
        } else {
            parts.push(`Hello! I have a general inquiry for the Coders Clutch team.`);
        }

        if (formData.message) {
            parts.push(`\n*Additional Details:*\n${formData.message}`);
        }

        return parts.join("\n\n").trim();
    };

    const handleFinalSend = (method: "whatsapp" | "email") => {
        const body = formatMessageBody();

        if (method === "whatsapp") {
            const whatsappUrl = `https://wa.me/2205071723?text=${encodeURIComponent(body)}`;
            window.open(whatsappUrl, "_blank");
        } else {
            const subject = "New Project Inquiry - Coders Clutch";
            const mailtoUrl = `mailto:codersclutch@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.replace(/\*/g, ""))}`;
            window.location.href = mailtoUrl;
        }

        resetAndClose();
    };

    const resetAndClose = () => {
        closeMessenger();
        setTimeout(() => {
            setStep(1);
            setFormData({
                purpose: "",
                solution: "",
                subSolutions: [],
                budget: "",
                customBudget: "",
                priority: "",
                date: null,
                time: "",
                message: "",
                deliveryMethod: ""
            });
        }, 300);
    };

    const StepHeader = ({ title, description }: { title: string; description: string }) => (
        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-30 pb-4 pt-1 border-b border-gray-50 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.02)] mb-4">
            <Typography className="text-xl font-bold text-app-primary-deep">{title}</Typography>
            <br />
            <Typography className="text-sm text-gray-400 mt-1">{description}</Typography>
        </div>
    );

    const Calendar = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const days = eachDayOfInterval({ start: startDate, end: endDate });

        return (
            <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                    <Typography className="text-sm font-bold text-app-primary-deep">{format(currentMonth, "MMMM yyyy")}</Typography>
                    <div className="flex gap-1">
                        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeft size={18} className="text-gray-400" /></button>
                        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight size={18} className="text-gray-400" /></button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                        <div key={d} className="text-[10px] uppercase text-gray-400 font-bold text-center py-2">{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {days.map((day, idx) => {
                        const isSelected = formData.date && isSameDay(day, formData.date);
                        const isCurrentMonth = isSameMonth(day, monthStart);
                        const isDisabled = isBefore(day, startOfToday()) || isWeekend(day);
                        return (
                            <button key={idx} disabled={isDisabled} onClick={() => setFormData(prev => ({ ...prev, date: day }))} className={cn("aspect-square flex items-center justify-center rounded-lg text-xs transition-all", !isCurrentMonth && "text-gray-200", isDisabled && "opacity-20 cursor-not-allowed", isSelected ? "bg-app-secondary text-white font-bold shadow-md shadow-app-secondary/20" : (isCurrentMonth && !isDisabled ? "hover:bg-app-secondary/10 text-app-primary-deep/70" : ""))}>
                                {format(day, "d")}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderCurrentStep = () => {
        switch (currentStepKey) {
            case "purpose":
                return (
                    <div className="space-y-4">
                        <StepHeader title="How can we help?" description="Choose the option that best describes your needs." />
                        <div className="space-y-2">
                            {purposes.map((opt) => (
                                <button key={opt.id} onClick={() => handleNext("purpose", opt.id)} className="w-full flex items-center justify-between p-5 rounded-2xl border border-gray-100 transition-all group text-left hover:bg-gray-50/50">
                                    <span className="font-semibold text-app-primary-deep/70 group-hover:text-app-primary-deep">{opt.label}</span>
                                    <ChevronRight size={18} className="text-gray-300 group-hover:text-app-secondary transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case "solution":
                return (
                    <div className="space-y-4">
                        <StepHeader title="Solutions" description="Select the category of your project." />
                        <div className="max-h-[400px] overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                            {solutionsData.map((opt) => (
                                <button key={opt.id} onClick={() => handleNext("solution", opt.title)} className="w-full flex items-center gap-4 p-5 rounded-2xl border border-gray-100 transition-all group text-left hover:bg-gray-50/50">
                                    <div className="w-10 h-10 rounded-xl bg-app-primary-deep/5 flex items-center justify-center text-app-primary-deep/60 group-hover:text-app-primary-deep transition-colors">
                                        <opt.icon size={22} weight="duotone" />
                                    </div>
                                    <span className="font-semibold text-app-primary-deep/70 group-hover:text-app-primary-deep flex-1">{opt.title}</span>
                                    <ChevronRight size={18} className="text-gray-300 group-hover:text-app-secondary transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case "sub-solutions":
                const currentSolution = solutionsData.find(s => s.title === formData.solution);
                return (
                    <div className="space-y-4">
                        <StepHeader title="Sub Solutions" description="Select one or more services (Multi-select)." />
                        <div className="max-h-[350px] overflow-y-auto pr-2 space-y-2 custom-scrollbar pb-2">
                            {currentSolution?.contents.map((opt) => {
                                const isSelected = formData.subSolutions.includes(opt.title);
                                return (
                                    <button key={opt.id} onClick={() => toggleSubSolution(opt.title)} className={cn("w-full flex items-center justify-between p-4 rounded-xl border transition-all group text-left", isSelected ? "bg-app-secondary/5 border-app-secondary" : "hover:bg-gray-50/50 border-gray-100")}>
                                        <span className={cn("font-medium transition-colors", isSelected ? "text-app-secondary" : "text-app-primary-deep/70 group-hover:text-app-primary-deep")}>{opt.title}</span>
                                        {isSelected ? <Check size={18} className="text-app-secondary" /> : <div className="w-[18px] h-[18px] rounded-full border border-gray-200" />}
                                    </button>
                                );
                            })}
                        </div>
                        <Button onClick={() => setStep(step + 1)} disabled={formData.subSolutions.length === 0} className="w-full h-12 rounded-xl bg-app-primary-deep hover:bg-app-secondary text-white font-bold transition-all shadow-lg shadow-app-primary-deep/10">
                            Continue
                        </Button>
                    </div>
                );
            case "budget":
                return (
                    <div className="space-y-4">
                        <StepHeader title="Project Budget" description="Choose a range or enter your own suggestions." />
                        <div className="space-y-3">
                            {budgets.map((opt) => {
                                const isSelected = formData.budget === opt.label;
                                return (
                                    <button key={opt.id} onClick={() => setFormData(prev => ({ ...prev, budget: opt.label }))} className={cn("w-full flex items-center justify-between p-4 rounded-xl border transition-all group text-left", isSelected ? "bg-app-secondary/5 border-app-secondary" : "hover:bg-gray-50/50 border-gray-100")}>
                                        <span className={cn("font-medium transition-colors", isSelected ? "text-app-secondary" : "text-app-primary-deep/70 group-hover:text-app-primary-deep")}>{opt.label}</span>
                                        {isSelected ? <Check size={18} className="text-app-secondary" /> : <div className="w-[18px] h-[18px] rounded-full border border-gray-200" />}
                                    </button>
                                );
                            })}

                            <AnimatePresence>
                                {formData.budget === "Custom" && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden space-y-3">
                                        <div className="flex flex-wrap gap-2 py-2">
                                            {budgetSuggestions.map(sug => (
                                                <button
                                                    key={sug}
                                                    onClick={() => setFormData(prev => ({ ...prev, customBudget: sug }))}
                                                    className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] text-gray-400 hover:border-app-secondary hover:text-app-secondary transition-all"
                                                >
                                                    {sug}
                                                </button>
                                            ))}
                                        </div>
                                        <Input
                                            placeholder="Enter your budget or details..."
                                            className="h-12 rounded-xl border-gray-100 focus:border-app-secondary bg-gray-50/30 mb-2"
                                            value={formData.customBudget}
                                            onChange={(e) => setFormData(prev => ({ ...prev, customBudget: e.target.value }))}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <Button onClick={() => setStep(step + 1)} disabled={!formData.budget || (formData.budget === "Custom" && !formData.customBudget)} className="w-full h-12 rounded-xl bg-app-primary-deep hover:bg-app-secondary text-white font-bold transition-all shadow-lg shadow-app-primary-deep/10">
                                Continue
                            </Button>
                        </div>
                    </div>
                );
            case "priority":
                return (
                    <div className="space-y-4">
                        <StepHeader title="Support Priority" description="How urgent is your request?" />
                        <div className="space-y-2">
                            {priorities.map((opt) => (
                                <button key={opt.id} onClick={() => handleNext("priority", opt.label)} className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 transition-all group text-left hover:bg-gray-50/50">
                                    <span className="font-medium text-app-primary-deep/70 group-hover:text-app-primary-deep">{opt.label}</span>
                                    <ChevronRight size={18} className="text-gray-300 group-hover:text-app-secondary transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case "date":
                return (
                    <div className="space-y-4">
                        <StepHeader title="Schedule Meeting" description="Book a slot for a digital consultation." />
                        <div className="grid md:grid-cols-2 gap-6 pb-2">
                            <Calendar />
                            <div className="space-y-3">
                                <Typography className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Time</Typography>
                                <div className="grid grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                                    {timeSlots.map(time => {
                                        const isSelected = formData.time === time;
                                        const isUnavailable = unavailableSlots.includes(time);
                                        return (
                                            <button key={time} disabled={isUnavailable || !formData.date} onClick={() => setFormData(prev => ({ ...prev, time }))} className={cn("py-2 px-3 rounded-lg text-xs font-medium transition-all border", isSelected ? "bg-app-primary-deep text-white border-app-primary-deep shadow-md" : (isUnavailable ? "bg-gray-50 text-gray-300 border-transparent opacity-50 cursor-not-allowed" : "bg-white border-gray-100 text-app-primary-deep/70 hover:border-app-secondary hover:text-app-secondary"))}>
                                                {time}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            {formData.date && formData.time && (
                                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-[11px] text-app-secondary font-medium mb-3 bg-app-secondary/5 p-2 rounded-lg border border-app-secondary/10">
                                    Selected: {format(formData.date, 'PPP')} at {formData.time}
                                </motion.div>
                            )}
                            <Button onClick={() => setStep(step + 1)} disabled={!formData.date || !formData.time} className="w-full h-12 rounded-xl bg-app-primary-deep hover:bg-app-secondary text-white font-bold transition-all shadow-lg shadow-app-primary-deep/10">
                                Continue
                            </Button>
                        </div>
                    </div>
                );
            case "message":
                return (
                    <div className="space-y-4">
                        <StepHeader title="Message" description="Briefly describe your requirements." />
                        <div className="space-y-4 pb-2">
                            <Textarea
                                placeholder="Type your message here..."
                                className="min-h-[150px] rounded-lg border-gray-100 resize-none text-sm p-4 bg-gray-50/30"
                                value={formData.message}
                                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            />
                            <Button onClick={() => setStep(step + 1)} disabled={!formData.message.trim()} className="w-full h-12 rounded-xl bg-app-primary-deep hover:bg-app-secondary text-white font-bold transition-all shadow-lg shadow-app-primary-deep/10">
                                Next
                            </Button>
                        </div>
                    </div>
                );
            case "delivery":
                return (
                    <div className="space-y-4">
                        <StepHeader title="Send Request" description="Choose how you'd like to reach us." />
                        <div className="grid grid-cols-1 gap-4 pb-4">
                            <button onClick={() => handleFinalSend("whatsapp")} className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-green-500 hover:bg-green-50/30 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                    <WhatsappLogo size={28} weight="duotone" />
                                </div>
                                <div className="text-left">
                                    <Typography className="font-bold text-app-primary-deep">WhatsApp</Typography> <br />
                                    <Typography className="text-xs text-gray-400">Instant response via chat</Typography>
                                </div>
                                <ChevronRight className="ml-auto text-gray-300" size={20} />
                            </button>

                            <button onClick={() => handleFinalSend("email")} className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50/30 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                    <Envelope size={28} weight="duotone" />
                                </div>
                                <div className="text-left">
                                    <Typography className="font-bold text-app-primary-deep">Email</Typography> <br />
                                    <Typography className="text-xs text-gray-400">Formal project inquiry</Typography>
                                </div>
                                <ChevronRight className="ml-auto text-gray-300" size={20} />
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
            <DialogContent className="w-[calc(100%-32px)] sm:w-full sm:max-w-[420px] p-0 bg-white border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
                <div className="px-8 pt-8 pb-4 flex items-center justify-between z-40 bg-white">
                    {step > 1 ? (
                        <button onClick={handleBack} className="text-gray-400 hover:text-app-primary-deep transition-all hover:scale-110"><ArrowLeft size={22} /></button>
                    ) : (
                        <div className="w-5" />
                    )}

                    {step > 1 ? (
                        <div className="flex-1 mx-6 h-[2px] bg-gray-50 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-app-secondary" initial={{ width: 0 }} animate={{ width: `${Math.min((step / totalSteps) * 100, 100)}%` }} transition={{ type: "spring", stiffness: 100, damping: 20 }} />
                        </div>
                    ) : (
                        <div className="flex-1" />
                    )}

                    <button onClick={resetAndClose} className="text-gray-300 hover:text-red-500 transition-all hover:scale-110"><X size={22} /></button>
                </div>

                <div className="px-8 pb-8 max-h-[85vh] overflow-y-auto custom-scrollbar relative">
                    <AnimatePresence mode="wait">
                        <motion.div key={`${currentStepKey}-${step}`} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                            {renderCurrentStep()}
                        </motion.div>
                    </AnimatePresence>

                    {step > 1 && (
                        <div className="mt-8 flex justify-center sticky bottom-0 bg-white/50 backdrop-blur-sm pt-4">
                            <Typography className="text-[10px] uppercase font-normal text-gray-700">Step {step} / {totalSteps}</Typography>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
