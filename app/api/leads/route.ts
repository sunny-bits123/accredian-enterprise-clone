import { NextRequest, NextResponse } from 'next/server'

interface Lead {
  name: string
  email: string
  company: string
  phone: string
  message: string
  timestamp: string
}

// In-memory storage (replace with database in production)
const leads: Lead[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validation
    const { name, email, company, phone, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create lead object
    const lead: Lead = {
      name,
      email,
      company: company || '',
      phone: phone || '',
      message: message || '',
      timestamp: new Date().toISOString(),
    }

    // Store lead (in production, save to database)
    leads.push(lead)

    // Log to console (in production, send email notification)
    console.log('New lead received:', lead)

    // In production, you would:
    // 1. Save to database (MongoDB, PostgreSQL, etc.)
    // 2. Send confirmation email
    // 3. Notify sales team

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        lead,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // In production, add authentication/authorization
  return NextResponse.json(
    {
      message: 'Leads API endpoint',
      totalLeads: leads.length,
      leads: leads.slice(-10), // Return last 10 leads
    },
    { status: 200 }
  )
}
