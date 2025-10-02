import { useState } from "react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ChatInterface from "@/components/ChatInterface";
import { UserPlus, UserCheck, FileText, Calendar, HeadphonesIcon, BarChart3 } from "lucide-react";
import { chatbotData } from "@/data/chatbotData";

const Dashboard = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "lead-gen",
      icon: <UserPlus className="w-6 h-6 text-primary" />,
      title: "Lead Generation",
      description: "Automated automotive sales outreach and qualification.",
    },
    {
      id: "onboarding",
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      title: "Customer Onboarding",
      description: "Seamless telecom KYC automation and user verification.",
    },
    {
      id: "claims",
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Claims Processing",
      description: "Insurance form filling and intelligent document validation.",
    },
    {
      id: "scheduling",
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Appointment Scheduling",
      description: "Hospital or field service bookings managed by AI.",
    },
    {
      id: "support",
      icon: <HeadphonesIcon className="w-6 h-6 text-primary" />,
      title: "Support & FAQs",
      description: "E-commerce return queries and automated refund flows.",
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-6 h-6 text-gray-300" />,
      title: "Advanced Analytics",
      description: "AI-driven insights and performance tracking.",
      comingSoon: true,
    },
  ];

  if (selectedService) {
    return (
      <Layout>
        <ChatInterface
          service={chatbotData[selectedService as keyof typeof chatbotData]}
          onBack={() => setSelectedService(null)}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="fade-in-up">
        <h1 className="text-4xl font-bold text-foreground mb-3">Autonomous Agent Services</h1>
        <p className="text-muted-foreground mb-8">
          Select a service to see how our AI agents can automate your processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => !service.comingSoon && setSelectedService(service.id)}
                comingSoon={service.comingSoon}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
