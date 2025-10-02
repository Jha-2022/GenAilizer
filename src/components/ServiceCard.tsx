import { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  comingSoon?: boolean;
}

const ServiceCard = ({ icon, title, description, onClick, comingSoon }: ServiceCardProps) => {
  return (
    <Card
      onClick={comingSoon ? undefined : onClick}
      className={`relative overflow-hidden transition-all duration-300 cursor-pointer ${
        comingSoon
          ? "opacity-50 grayscale cursor-not-allowed"
          : "hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50"
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">{icon}</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        {comingSoon && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
              Coming Soon
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
