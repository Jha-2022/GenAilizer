import { useState } from "react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ChatInterface from "@/components/ChatInterface";
import { UserPlus, UserCheck, FileText, Calendar, HeadphonesIcon, LockKeyholeOpen, BarChart3, Tv, Bitcoin, GraduationCap, Activity, Flower, Building2, BookOpenText} from "lucide-react";
import { chatbotData } from "@/data/chatbotData";



const Dashboard = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "digital-media",
      icon: <Tv className="w-6 h-6 text-primary"/>,
      title: "Digital Media",
      description: "Gen AI solutions for dynamic content personalization and viral trend prediction.",
    },
    {
      id: "fintech",
      icon: <Bitcoin className="w-6 h-6 text-primary"/>,
      title: "Fintech",
      description: "Gen AI solutions for instant fraud prevention and hyper-personalized financial advice",
    },
    {
      id: "education",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Education",
      description: "Gen AI solutions for adaptive tutoring and skill gap identification.",
    },
    {
      id: "healthcare",
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Healthcare",
      description: "Gen AI solutions for predictive diagnostics and tailored treatment plans.",
    },
    {
      id: "sustainarbility",
      icon: <Flower className="w-6 h-6 text-primary" />,
      title: "Sustainability",
      description: "Gen AI solutions for emissions forecasting and circular economy optimization.",
    },

    {
      id: "smart-cities",
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Smart Cities",
      description: "Gen AI solutions for real-time urban flow management and citizen safety enhancement.",
    },
    
    {
      id: "open_novel_innovation",
      icon: <BookOpenText className="w-6 h-6 text-primary" />,
      title: "Open Novel Innovation",
      description: "Gen AI solutions for breakthrough idea discovery and rapid collaboration."
    }
  ];

  if (selectedService) {
    return (
      <Layout>
        <ChatInterface
          service={chatbotData[selectedService as keyof typeof chatbotData]}
          serviceId={selectedService}
          onBack={() => setSelectedService(null)}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="fade-in-up">
        <h1 className="text-4xl font-bold text-foreground mb-3">Generative AI Soluions</h1>
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
                // onClick={() => !service.comingSoon && setSelectedService(service.id)}
                // comingSoon={service.comingSoon}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
