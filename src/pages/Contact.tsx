import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const teamMembers = [
    {
      name: "Rishi Jha",
      role: "Software Developer",
      location: "India",
      email: "rishijha0910@gmail.com",
      phone: "(+91) 8769648759",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Nathan Pereira",
      role: "Software Developer",
      location: "India",
      email: "pereiranathan501@gmail.com",
      phone: "(+91) 87664 34810",
      github: "#",
      linkedin: "#",
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto fade-in-up">
        <h1 className="text-4xl font-bold text-foreground mb-3">Get in Touch</h1>
        <p className="text-muted-foreground mb-8">
          We're here to answer your questions and explore how our autonomous agents can
          revolutionize your business. Reach out to our key team members directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">{member.name}</h2>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.location}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-card-foreground">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3 text-card-foreground">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <span>{member.phone}</span>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={member.github}
                      className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6 text-secondary-foreground" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-secondary-foreground" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">General Contact</h2>
            <div className="space-y-4 text-card-foreground">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">support@autoprime.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  AutoPrime
                  <br />
                  1234 Car Lane
                  <br />
                  Auto City, AC 12345
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;
