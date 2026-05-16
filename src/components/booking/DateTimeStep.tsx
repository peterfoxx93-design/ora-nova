"use client"

interface DateTimeStepProps {
  selectedDate: string | null
  selectedTime: string | null
  onSelectDate: (date: string) => void
  onSelectTime: (time: string) => void
}

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30",
]

const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

// Generate next 30 days
function generateDays() {
  const today = new Date()
  const days = []
  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    days.push({
      day: date.getDate(),
      month: date.getMonth(),
      monthName: MONTHS[date.getMonth()],
      dayOfWeek: DAYS[date.getDay()],
      iso: date.toISOString().split("T")[0],
      isToday: i === 0,
    })
  }
  return days
}

export function DateTimeStep({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: DateTimeStepProps) {
  const days = generateDays()

  return (
    <div>
      <h3 className="font-heading text-xl font-semibold mb-1">
        Selecciona Fecha y Hora
      </h3>
      <p className="text-neutral-500 text-sm mb-6">
        Escoge el día y horario que mejor te convenga
      </p>

      {/* Calendar */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-neutral-500 mb-3 uppercase tracking-wider">
          Próximos 30 días
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          {days.map((d) => (
            <button
              key={d.iso}
              onClick={() => onSelectDate(d.iso)}
              className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center gap-1 border-2 transition-all touch-target ${
                selectedDate === d.iso
                  ? "border-accent bg-accent/5 text-accent"
                  : "border-neutral-300 hover:border-neutral-400"
              }`}
            >
              <span className="text-[10px] font-medium text-neutral-500 uppercase">
                {d.dayOfWeek.slice(0, 2)}
              </span>
              <span className="text-lg font-bold">{d.day}</span>
              <span className="text-[10px] text-neutral-400">
                {d.monthName.slice(0, 3)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div>
          <p className="text-sm font-semibold text-neutral-500 mb-3 uppercase tracking-wider">
            Horarios Disponibles
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {TIME_SLOTS.map((time) => (
              <button
                key={time}
                onClick={() => onSelectTime(time)}
                className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all touch-target ${
                  selectedTime === time
                    ? "border-accent bg-accent/5 text-accent"
                    : "border-neutral-300 hover:border-neutral-400 text-neutral-700"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
