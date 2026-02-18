import { Link, useLocation } from "react-router-dom";
import { Home, Phone, User, Info, Zap } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/contact", icon: Phone, label: "Contact" },
    { path: "/profile", icon: User, label: "Profile" },
    { path: "/about", icon: Info, label: "About Us" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center space-x-3">
          <Zap className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-sidebar-foreground">GenAilizer</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
              {isActive && (
                <span className="ml-auto text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                  Current Page
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-card p-4 rounded-lg">
          <h3 className="font-semibold text-card-foreground mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Our team is here to assist you with any questions.
          </p>
          <Link
            to="/contact"
            className="inline-block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
