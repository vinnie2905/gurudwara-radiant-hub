import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { ChevronLeft, ChevronRight, Clock, MapPin, Users } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from "date-fns";

interface Event {
  date: Date;
  title: string;
  time: string;
  location: string;
  category: string;
}

const events: Event[] = [
  {
    date: new Date(2026, 1, 2),
    title: "Gurpurab Celebration",
    time: "9:00 AM - 6:00 PM",
    location: "Main Darbar Hall",
    category: "Festival",
  },
  {
    date: new Date(2026, 1, 8),
    title: "Youth Kirtan Program",
    time: "5:00 PM - 7:00 PM",
    location: "Community Center",
    category: "Youth",
  },
  {
    date: new Date(2026, 1, 15),
    title: "Langar Seva Day",
    time: "8:00 AM - 2:00 PM",
    location: "Langar Hall",
    category: "Seva",
  },
  {
    date: new Date(2026, 1, 22),
    title: "Sikh History Class",
    time: "10:00 AM - 12:00 PM",
    location: "Classroom A",
    category: "Education",
  },
  {
    date: new Date(2026, 0, 26),
    title: "Republic Day Celebration",
    time: "4:00 PM - 8:00 PM",
    location: "Main Hall",
    category: "Festival",
  },
];

const categoryColors: Record<string, string> = {
  Festival: "bg-gold text-accent-foreground",
  Youth: "bg-royal text-secondary-foreground",
  Seva: "bg-primary text-primary-foreground",
  Education: "bg-saffron-light text-primary-foreground",
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Add padding days for the calendar grid
  const startDayOfWeek = monthStart.getDay();
  const paddingDays = Array(startDayOfWeek).fill(null);

  const getEventsForDate = (date: Date) => {
    return events.filter((event) => isSameDay(event.date, date));
  };

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <Layout>
      <PageHeader
        title="Events Calendar"
        subtitle="Stay connected with our community activities and celebrations"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-6">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {format(currentMonth, "MMMM yyyy")}
                  </h2>
                  <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div
                      key={day}
                      className="text-center py-2 text-sm font-medium text-muted-foreground"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {paddingDays.map((_, index) => (
                    <div key={`padding-${index}`} className="aspect-square" />
                  ))}
                  {daysInMonth.map((day) => {
                    const dayEvents = getEventsForDate(day);
                    const isSelected = selectedDate && isSameDay(day, selectedDate);

                    return (
                      <button
                        key={day.toISOString()}
                        onClick={() => setSelectedDate(day)}
                        className={`aspect-square p-1 rounded-lg transition-all relative ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : isToday(day)
                            ? "bg-gold/20 text-foreground"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <span className="text-sm">{format(day, "d")}</span>
                        {dayEvents.length > 0 && (
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                            {dayEvents.slice(0, 3).map((_, i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isSelected ? "bg-primary-foreground" : "bg-primary"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Events Sidebar */}
            <div>
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {selectedDate
                    ? format(selectedDate, "EEEE, MMM d")
                    : "Select a Date"}
                </h3>

                {selectedDate && selectedEvents.length === 0 && (
                  <p className="text-muted-foreground text-sm">
                    No events scheduled for this day.
                  </p>
                )}

                <div className="space-y-4">
                  {selectedEvents.map((event, index) => (
                    <div
                      key={index}
                      className="p-4 bg-muted rounded-xl border border-border"
                    >
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${
                          categoryColors[event.category]
                        }`}
                      >
                        {event.category}
                      </span>
                      <h4 className="font-semibold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upcoming Events */}
                {!selectedDate && (
                  <>
                    <h4 className="font-semibold text-foreground mb-3">
                      Upcoming Events
                    </h4>
                    <div className="space-y-3">
                      {events.slice(0, 3).map((event, index) => (
                        <div
                          key={index}
                          onClick={() => setSelectedDate(event.date)}
                          className="p-3 bg-muted rounded-lg cursor-pointer hover:bg-primary/10 transition-colors"
                        >
                          <p className="text-xs text-primary font-medium">
                            {format(event.date, "MMM d")}
                          </p>
                          <p className="font-medium text-foreground text-sm">
                            {event.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calendar;
