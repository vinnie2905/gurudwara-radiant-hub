import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Radio, 
  Calendar, 
  Clock,
  Users,
  Heart
} from "lucide-react";
import gurudwaraInterior from "@/assets/gurudwara-interior.jpg";

const scheduleData = [
  { time: "4:00 AM - 5:30 AM", program: "Amrit Vela Kirtan", description: "Early morning divine hymns" },
  { time: "6:00 AM - 7:30 AM", program: "Asa Di Var", description: "Morning prayer recitation" },
  { time: "9:00 AM - 12:00 PM", program: "Sukhmani Sahib Path", description: "Recitation of Sukhmani Sahib" },
  { time: "12:00 PM - 1:00 PM", program: "Rehras Sahib", description: "Afternoon prayers" },
  { time: "6:00 PM - 7:30 PM", program: "Evening Kirtan", description: "Evening devotional music" },
  { time: "9:00 PM - 10:00 PM", program: "Sohila Sahib", description: "Night-time prayers" },
];

const LiveKirtan = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [viewerCount] = useState(234);

  return (
    <Layout>
      <PageHeader
        title="Live Kirtan"
        subtitle="Experience divine connection through live prayers and hymns from our Gurudwara"
        backgroundImage={gurudwaraInterior}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Live Status Banner */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge className="bg-destructive text-destructive-foreground animate-pulse px-4 py-2 text-sm">
              <Radio className="w-4 h-4 mr-2" />
              LIVE NOW
            </Badge>
            <span className="text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              {viewerCount} viewers
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-2 border-primary/20">
                <div className="relative aspect-video bg-secondary">
                  {/* Placeholder for live stream - would be replaced with actual stream embed */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${gurudwaraInterior})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      {!isPlaying ? (
                        <Button
                          size="lg"
                          onClick={() => setIsPlaying(true)}
                          className="bg-primary hover:bg-primary/90 rounded-full w-20 h-20"
                        >
                          <Play className="w-10 h-10 ml-1" />
                        </Button>
                      ) : (
                        <div className="text-center text-primary-foreground">
                          <p className="text-lg font-medium">ਵਾਹਿਗੁਰੂ</p>
                          <p className="text-sm opacity-80">Waheguru</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-white hover:bg-white/20"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-white hover:bg-white/20"
                          onClick={() => setIsMuted(!isMuted)}
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </Button>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="destructive" className="animate-pulse">
                          <span className="w-2 h-2 bg-white rounded-full mr-2 inline-block"></span>
                          LIVE
                        </Badge>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-white hover:bg-white/20"
                        >
                          <Maximize className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        Evening Kirtan Session
                      </h3>
                      <p className="text-muted-foreground">
                        Live from the main Darbar Hall - Raag Kalyan
                      </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Heart className="w-4 h-4" />
                      Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Audio Only Option */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-saffron flex items-center justify-center">
                        <Radio className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Audio Only Stream</h4>
                        <p className="text-sm text-muted-foreground">
                          Lower bandwidth option for listening
                        </p>
                      </div>
                    </div>
                    <Button variant="secondary" className="gap-2">
                      <Play className="w-4 h-4" />
                      Listen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current Program */}
              <Card className="border-2 border-gold/30 bg-gradient-to-br from-gold/5 to-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5 text-gold" />
                    Now Playing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">
                    Evening Kirtan
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Raag Kalyan - Traditional evening melodies praising the divine
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>6:00 PM - 7:30 PM</span>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs defaultValue="schedule" className="w-full">
                    <TabsList className="w-full rounded-none border-b">
                      <TabsTrigger value="schedule" className="flex-1">Schedule</TabsTrigger>
                      <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
                    </TabsList>
                    <TabsContent value="schedule" className="p-4 space-y-3">
                      {scheduleData.map((item, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg transition-colors ${
                            item.program === "Evening Kirtan"
                              ? "bg-primary/10 border-l-4 border-primary"
                              : "hover:bg-muted"
                          }`}
                        >
                          <p className="text-xs text-muted-foreground mb-1">{item.time}</p>
                          <p className="font-medium text-foreground">{item.program}</p>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="upcoming" className="p-4">
                      <div className="space-y-4">
                        <div className="p-4 bg-saffron/10 rounded-lg border border-saffron/20">
                          <Badge className="bg-saffron text-primary-foreground mb-2">Special Event</Badge>
                          <h4 className="font-semibold text-foreground">Guru Nanak Dev Ji Gurpurab</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            48-hour Akhand Path & Special Kirtan
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">November 15, 2024</p>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-semibold text-foreground">Monthly Sangrand</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Special prayers for the new month
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">First of every month</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Prayer Request */}
              <Card className="bg-gradient-to-br from-royal/5 to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-saffron mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    Request Ardas
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Submit a prayer request to be included in our daily Ardas
                  </p>
                  <Button className="w-full bg-gradient-saffron hover:opacity-90">
                    Submit Prayer Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How to Watch Section */}
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-center text-foreground mb-8">
              How to Watch
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "On Your Computer",
                  description: "Watch directly on this page using any modern web browser",
                  icon: "💻"
                },
                {
                  title: "On Mobile",
                  description: "Access our live stream on your smartphone or tablet",
                  icon: "📱"
                },
                {
                  title: "On Smart TV",
                  description: "Cast to your TV using Chromecast or AirPlay",
                  icon: "📺"
                }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LiveKirtan;
