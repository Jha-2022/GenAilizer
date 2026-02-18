// export const chatbotData = {
//   "lead-gen": {
//     title: "Lead Generation Bot",
//     welcome:
//       "Hello! I'm the Lead Generation Agent. I can help you find and qualify leads. What industry are you targeting?",
//     responses: {
//       default:
//         "That's interesting. My system can scan over 10 million companies to find the perfect match for your criteria. Would you like to know more about pricing?",
//       car: "Excellent choice! For automotive, I can identify dealerships with low inventory or individuals whose leases are expiring soon. This creates a highly qualified lead list.",
//       tech: "Tech is a great sector. I can analyze company tech stacks to find businesses using competitor software, making them prime targets for outreach.",
//       pricing:
//         "Our plans start at $499/month for 500 qualified leads. We also offer enterprise solutions. Can I prepare a quote for you?",
//     },
//   },
//   onboarding: {
//     title: "Onboarding Assistant",
//     welcome:
//       "Welcome! I'm here to streamline customer onboarding. I can handle KYC, document verification, and account setup. To start, could you tell me if this is for a personal or business account?",
//     responses: {
//       default:
//         "Understood. The next step would be identity verification. I can process a driver's license or passport in under 30 seconds using OCR and facial recognition. Would you like a demo?",
//       personal:
//         "Great. For personal accounts, I'll need a government-issued ID and proof of address. The entire process is automated and usually takes less than 2 minutes.",
//       business:
//         "For business accounts, I'll need the company registration documents and IDs for the primary directors. I can automatically cross-reference this with public records to ensure compliance.",
//     },
//   },
//   claims: {
//     title: "Claims Processing Agent",
//     welcome:
//       "Hello, I am the AI Claims Processor. I can help you file and validate insurance claims quickly. Please provide the policy number to begin.",
//     responses: {
//       default:
//         "Thank you. I've located the policy. I can automatically extract information from invoices, photos, and reports to pre-fill the claim form, reducing errors by 95%. What type of claim is this (e.g., auto, home, health)?",
//       auto: "For auto claims, please upload photos of the damage and the police report if available. My vision AI will assess the damage and estimate repair costs instantly.",
//       health:
//         "For health claims, please provide the medical provider's name and the date of service. I will securely retrieve the necessary documents from the provider's portal.",
//     },
//   },
//   scheduling: {
//     title: "AI Appointment Scheduler",
//     welcome:
//       "Hi! I'm your AI Scheduler. I can book, reschedule, or cancel appointments for you. Which department or person are you trying to book with?",
//     responses: {
//       default:
//         "Okay. I'm checking their calendar for openings. I can also coordinate with multiple people to find a time that works for everyone. What's the best day for you?",
//       sales:
//         "The sales team is available. I see openings tomorrow at 10 AM and 2 PM. I can also check for other times. Which would you prefer?",
//       support:
//         "Our support team is ready to help. To connect you with the right expert, could you briefly describe the issue?",
//     },
//   },
//   support: {
//     title: "E-commerce Support Bot",
//     welcome:
//       "Welcome to support! I can help with returns, refunds, and order status. How can I assist you today?",
//     responses: {
//       default: "I can certainly help with that. Could you please provide your order number?",
//       return:
//         "I've initiated the return process for you. A shipping label has been sent to your email. You can track the status of your return right here in this chat.",
//       refund:
//         "Once we receive your returned item, the refund will be processed within 3-5 business days. I will notify you as soon as it's complete.",
//       status:
//         "I see your order #12345 is currently out for delivery and should arrive today by 8 PM. Would you like to see the live tracking map?",
//     },
//   },
// };



export const chatbotData = {
  "digital-media": {
    title: "Digital Media AI",
    welcome: "Hi! I'm your Digital Media AI. I help with dynamic content personalization and viral trend prediction. What type of content are you working on today?",
    responses: {
      default: "Great choice! I can analyze audience data to personalize your content and predict viral potential with 85% accuracy. Want a trend forecast?",
      video: "Perfect for video! I can generate personalized thumbnails, suggest trending hashtags, and predict 24-hour view counts based on current patterns.",
      social: "Social media thrives on timing. I see high engagement potential for lifestyle posts right now. Should I customize your feed for your target demographic?",
      blog: "Blogs need personalization. I can rewrite headlines for different reader segments and predict shares based on real-time trending topics."
    }
  },

  "fintech": {
    title: "Fintech Guardian",
    welcome: "Hello! I'm your Fintech AI for fraud prevention and personalized financial advice. Have you noticed any unusual account activity or need investment guidance?",
    responses: {
      default: "I understand. My real-time fraud detection scans 1000+ data points per transaction. Would you like me to review recent activity or generate personalized advice?",
      fraud: "Alert flagged! I've analyzed the transaction patterns - this shows 92% fraud probability. I've paused it and can guide you through next steps.",
      advice: "Smart move. Based on your portfolio and risk tolerance, I'm recommending 3 optimized allocations with projected 12-month returns. Want the details?",
      review: "Scanning your last 30 days... All clear except one low-risk merchant charge. Would you like spending pattern insights or budget recommendations?"
    }
  },

  "education": {
    title: "Learning Path AI",
    welcome: "Welcome! I'm your Education AI for adaptive tutoring and skill gap analysis. What subject are you studying or teaching today?",
    responses: {
      default: "Excellent! I can create personalized learning paths and identify skill gaps instantly. What's your current proficiency level in this topic?",
      math: "Math mastery starts here. Your diagnostic shows algebra gaps - I've prepared 15-minute adaptive modules with 87% completion success rate.",
      coding: "Coding skills assessment complete. You need algorithm practice. I've mapped a 2-week path from beginner arrays to dynamic programming.",
      exam: "Exam prep activated. Based on your practice scores, focus 60% on weak areas. I predict +22% score improvement with my adaptive plan."
    }
  },

  "healthcare": {
    title: "Health Insight AI",
    welcome: "Hello! I'm your Healthcare AI for predictive diagnostics and treatment planning. Describe any symptoms or share recent health data to begin.",
    responses: {
      default: "Thank you for sharing. My diagnostic engine cross-references 50M+ cases. Possible conditions ranked by probability - want to explore top 3?",
      fatigue: "Analyzing fatigue patterns... 68% thyroid indicator, 24% vitamin D deficiency. I've prepared next-step tests and specialist recommendations.",
      pain: "Pain assessment complete. Location + duration analysis suggests 3 likely causes. I can generate a treatment plan with success probabilities.",
      checkup: "Routine analysis ready. Your vitals predict optimal healthspan to age 92 with minor nutrition adjustments. Want your personalized wellness plan?"
    }
  },

  "sustainability": {
    title: "Green Impact AI",
    welcome: "Hi! I'm your Sustainability AI for emissions forecasting and circular economy solutions. What aspect of your operations should we optimize first?",
    responses: {
      default: "Perfect focus area. I can forecast your carbon impact and recommend 20-40% reduction strategies. What's your primary emissions source?",
      supplychain: "Supply chain analysis shows 62% of your footprint in transportation. Rerouting + carrier optimization = 28% CO2 savings immediately.",
      energy: "Energy audit complete. Your facilities could cut 35% emissions through AI-optimized schedules and renewable matching. Implementation plan ready.",
      waste: "Waste stream mapping shows 41% recyclable materials. Circular economy model predicts $240K annual savings through materials recovery."
    }
  },

  "smart-cities": {
    title: "Urban Flow AI",
    welcome: "Welcome! I'm your Smart Cities AI for real-time urban management and safety enhancement. Which city system needs attention - traffic, safety, or resources?",
    responses: {
      default: "Smart choice. I monitor 500+ data streams city-wide. Current priority alerts active - want the executive summary or drill into specifics?",
      traffic: "Traffic optimization engaged. Real-time signals adjusted - predicting 22% commute time reduction during peak hours across 15 corridors.",
      safety: "Safety systems active. AI vision detected 3 priority incidents. First responders dispatched with optimal routing - 8 min response prediction.",
      energy: "Energy grid balanced. Demand forecasting shows 15% excess capacity. I've redistributed to high-need areas preventing 4 potential outages."
    }
  },

  "open-innovation": {
    title: "Innovation Spark AI",
    welcome: "Hello Creator! I'm your Open Innovation AI for breakthrough idea discovery and collaboration matching. Share your concept or challenge to begin.",
    responses: {
      default: "Fascinating idea! My novelty engine scores this 87/100 for breakthrough potential. I've matched 12 collaborators and 3 funding sources.",
      prototype: "Prototype viability scan complete. 76% market fit with these pivot recommendations. Connected you with 3 manufacturing partners.",
      funding: "Funding matrix active. Your innovation matches 5 active VC mandates. Pitch deck optimized and warm intros scheduled for tomorrow.",
      team: "Team assembly launched. Found 8 perfect-fit experts (IP law, scaling, domain). Virtual innovation room ready - shall we start the session?"
    }
  }
};
