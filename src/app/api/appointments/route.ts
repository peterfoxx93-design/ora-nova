import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { service, professional, date, time, patientName, email, phone, country, notes, consent } = body

    // Validación básica
    if (!service || !patientName || !email || !consent) {
      return NextResponse.json(
        { success: false, message: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    // Aquí iría la integración real con Google Sheets API v1
    // usando POST /v1/spreadsheets/{id}/values/{range}:append
    //
    // Ejemplo de implementación futura:
    // const SHEET_ID = process.env.GOOGLE_SHEET_ID
    // const API_KEY = process.env.GOOGLE_API_KEY
    //
    // const response = await fetch(
    //   `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:append?valueInputOption=USER_ENTERED&key=${API_KEY}`,
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       values: [[new Date().toISOString(), service, professional, date, time, patientName, email, phone, country, notes || ""]],
    //     }),
    //   }
    // )

    console.log("[Appointment]", {
      service,
      professional,
      date,
      time,
      patientName,
      email,
      phone,
      country,
      notes,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: "Cita agendada exitosamente. Te confirmaremos en máximo 2 horas hábiles.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[Appointment Error]", error)
    return NextResponse.json(
      { success: false, message: "Error al procesar la cita. Intenta de nuevo." },
      { status: 500 }
    )
  }
}
