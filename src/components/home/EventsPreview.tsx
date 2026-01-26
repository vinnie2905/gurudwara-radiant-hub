import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    date: "Feb 2",
    day: "Sun",
    title: "Gurpurab Celebration",
    time: "9:00 AM - 6:00 PM",
    location: "Main Darbar Hall",
  },
  {
    date: "Feb 8",
    day: "Sat",
    title: "Youth Kirtan Program",
    time: "5:00 PM - 7:00 PM",
    location: "Community Center",
  },
  {
    date: "Feb 15",
    day: "Sat",
    title: "Langar Seva Day",
    time: "8:00 AM - 2:00 PM",
    location: "Langar Hall",
  },
];

const EventsPreview = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Upcoming <span className="text-gradient-saffron">Events</span>
            </h2>
            <p className="text-muted-foreground">
              Join us for community gatherings, celebrations, and seva opportunities
            </p>
          </div>
          <Link to="/calendar" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Full Calendar
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              <div className="flex">
                {/* Date Badge */}
                <div className="bg-gradient-saffron p-6 flex flex-col items-center justify-center min-w-[100px]">
                  <span className="text-primary-foreground/80 text-sm font-medium uppercase">
                    {event.day}
                  </span>
                  <span className="text-primary-foreground text-3xl font-bold">
                    {event.date.split(" ")[1]}
                  </span>
                  <span className="text-primary-foreground/80 text-sm">
                    {event.date.split(" ")[0]}
                  </span>
                </div>

                {/* Event Details */}
                <div className="p-6 flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
