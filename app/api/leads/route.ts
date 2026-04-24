import { NextRequest, NextResponse } from "next/server";

// Simple in-memory storage for demonstration
const leads: Array<{
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  timestamp: string;
}> = [];

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create lead object
    const lead = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      company: body.company || "",
      phone: body.phone || "",
      message: body.message,
      timestamp: new Date().toISOString(),
    };

    // Store lead
    leads.push(lead);

    // Log to console (in production, this would go to a database)
    console.log("New lead captured:", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        lead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Lead API is working",
      totalLeads: leads.length,
    },
    { status: 200 }
  );
}
