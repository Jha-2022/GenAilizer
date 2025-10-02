import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, serviceType } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Define system prompts for each service type
    const systemPrompts: Record<string, string> = {
      "lead-gen": "You are a Lead Generation Agent. You help find and qualify leads. You can scan over 10 million companies to find perfect matches. Be professional and informative about lead generation strategies and pricing. Focus on automotive and tech sectors.",
      "onboarding": "You are an Onboarding Assistant. You streamline customer onboarding, handle KYC, document verification, and account setup. Process IDs and documents quickly. Be helpful and guide users through the onboarding process efficiently.",
      "claims": "You are a Claims Processing Agent. You help file and validate insurance claims quickly. Extract information from invoices, photos, and reports to pre-fill claim forms. Handle auto, home, and health claims professionally.",
      "scheduling": "You are an AI Appointment Scheduler. You book, reschedule, and cancel appointments. Check calendars and coordinate with multiple people. Be efficient and helpful in finding suitable time slots.",
      "support": "You are an E-commerce Support Bot. You help with returns, refunds, and order status. Process returns, track shipments, and provide excellent customer service. Be friendly and solution-oriented."
    };

    const systemPrompt = systemPrompts[serviceType] || "You are a helpful AI assistant. Provide clear, concise, and professional responses.";

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
