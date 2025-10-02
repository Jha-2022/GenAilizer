import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto fade-in-up">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Beyond Automation. Welcome to Autonomy.
        </h1>

        <div className="space-y-8">
          <div className="bg-card p-8 rounded-lg">
            <p className="text-card-foreground leading-relaxed mb-6">
              We are moving past the era of simple task automation. At AutoPrime, we are
              architecting the next generation of digital workforces—intelligent agents that don't
              just perform tasks, but orchestrate entire decision-making processes from end to end.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              Our Mission: A New Cognitive Engine for Business
            </h2>
            <p className="text-card-foreground leading-relaxed">
              Our core mission is to liberate human potential. Repetitive, complex, and
              data-intensive workflows consume invaluable time and introduce risk. We build
              autonomous agents that serve as a cognitive engine for your organization, seamlessly
              integrating with your existing systems to manage processes like lead qualification,
              customer onboarding, and claims processing with superhuman speed and accuracy.
            </p>
            <p className="text-card-foreground leading-relaxed mt-4">
              This isn't about replacing people; it's about augmenting them. By delegating
              intricate operational logic to our AI, we empower your teams to focus on what they do
              best: strategy, innovation, and building meaningful customer relationships.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              The Horizon: An Ecosystem of Intelligence
            </h2>
            <p className="text-card-foreground leading-relaxed">
              What you see today is merely the foundation. We are on a trajectory to build more
              than just siloed agents. Our vision is an interconnected ecosystem of AI, a neural
              network for enterprise where agents collaborate, learn, and adapt in real-time.
            </p>
            <p className="text-card-foreground leading-relaxed mt-4">
              Imagine an autonomous supply chain that anticipates and resolves its own disruptions,
              or a healthcare system where AI proactively manages patient journeys. This is the
              future we are building, and the next phase of our platform will introduce
              capabilities that are a quantum leap forward. The era of the truly autonomous
              enterprise is dawning.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Values</h2>
            <ul className="space-y-3 text-card-foreground">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Integrity</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Excellence</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Teamwork</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
