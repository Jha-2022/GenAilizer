export const chatbotData = {
  "lead-gen": {
    title: "Lead Generation Bot",
    welcome:
      "Hello! I'm the Lead Generation Agent. I can help you find and qualify leads. What industry are you targeting?",
    responses: {
      default:
        "That's interesting. My system can scan over 10 million companies to find the perfect match for your criteria. Would you like to know more about pricing?",
      car: "Excellent choice! For automotive, I can identify dealerships with low inventory or individuals whose leases are expiring soon. This creates a highly qualified lead list.",
      tech: "Tech is a great sector. I can analyze company tech stacks to find businesses using competitor software, making them prime targets for outreach.",
      pricing:
        "Our plans start at $499/month for 500 qualified leads. We also offer enterprise solutions. Can I prepare a quote for you?",
    },
  },
  onboarding: {
    title: "Onboarding Assistant",
    welcome:
      "Welcome! I'm here to streamline customer onboarding. I can handle KYC, document verification, and account setup. To start, could you tell me if this is for a personal or business account?",
    responses: {
      default:
        "Understood. The next step would be identity verification. I can process a driver's license or passport in under 30 seconds using OCR and facial recognition. Would you like a demo?",
      personal:
        "Great. For personal accounts, I'll need a government-issued ID and proof of address. The entire process is automated and usually takes less than 2 minutes.",
      business:
        "For business accounts, I'll need the company registration documents and IDs for the primary directors. I can automatically cross-reference this with public records to ensure compliance.",
    },
  },
  claims: {
    title: "Claims Processing Agent",
    welcome:
      "Hello, I am the AI Claims Processor. I can help you file and validate insurance claims quickly. Please provide the policy number to begin.",
    responses: {
      default:
        "Thank you. I've located the policy. I can automatically extract information from invoices, photos, and reports to pre-fill the claim form, reducing errors by 95%. What type of claim is this (e.g., auto, home, health)?",
      auto: "For auto claims, please upload photos of the damage and the police report if available. My vision AI will assess the damage and estimate repair costs instantly.",
      health:
        "For health claims, please provide the medical provider's name and the date of service. I will securely retrieve the necessary documents from the provider's portal.",
    },
  },
  scheduling: {
    title: "AI Appointment Scheduler",
    welcome:
      "Hi! I'm your AI Scheduler. I can book, reschedule, or cancel appointments for you. Which department or person are you trying to book with?",
    responses: {
      default:
        "Okay. I'm checking their calendar for openings. I can also coordinate with multiple people to find a time that works for everyone. What's the best day for you?",
      sales:
        "The sales team is available. I see openings tomorrow at 10 AM and 2 PM. I can also check for other times. Which would you prefer?",
      support:
        "Our support team is ready to help. To connect you with the right expert, could you briefly describe the issue?",
    },
  },
  support: {
    title: "E-commerce Support Bot",
    welcome:
      "Welcome to support! I can help with returns, refunds, and order status. How can I assist you today?",
    responses: {
      default: "I can certainly help with that. Could you please provide your order number?",
      return:
        "I've initiated the return process for you. A shipping label has been sent to your email. You can track the status of your return right here in this chat.",
      refund:
        "Once we receive your returned item, the refund will be processed within 3-5 business days. I will notify you as soon as it's complete.",
      status:
        "I see your order #12345 is currently out for delivery and should arrive today by 8 PM. Would you like to see the live tracking map?",
    },
  },
};
