"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  User,
  Volume2,
} from "lucide-react";
import { useEffect, useState } from "react";

const demoTranscript = [
  {
    speaker: "ai",
    text: "Thank you for calling Sanflow AI. How can I assist you today?",
    time: "0:05",
  },
  {
    speaker: "user",
    text: "Hi, I'm interested in your AI chatbot services.",
    time: "0:08",
  },
  {
    speaker: "ai",
    text: "Great! I'd be happy to help you with our AI chatbot solutions. Let me connect you with our sales team.",
    time: "0:12",
  },
  {
    speaker: "ai",
    text: "I'm transferring you now. Please hold for a moment.",
    time: "0:15",
  },
  {
    speaker: "system",
    text: "Call transferred to sales department",
    time: "0:18",
  },
];

export function VoiceDemo() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [currentTranscriptIndex, setCurrentTranscriptIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCallActive]);

  useEffect(() => {
    if (isCallActive && currentTranscriptIndex < demoTranscript.length) {
      const timer = setTimeout(() => {
        setCurrentTranscriptIndex((prev) => prev + 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCallActive, currentTranscriptIndex]);

  const startCall = () => {
    setIsCallActive(true);
    setCallDuration(0);
    setCurrentTranscriptIndex(0);
  };

  const endCall = () => {
    setIsCallActive(false);
    setCallDuration(0);
    setCurrentTranscriptIndex(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-primary" />
          <span>AI Voice Receptionist</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Call Status */}
        <div className="text-center space-y-2">
          <div
            className={cn(
              "inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium",
              isCallActive
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-muted text-muted-foreground"
            )}
          >
            <div
              className={cn(
                "h-2 w-2 rounded-full",
                isCallActive
                  ? "bg-green-500 animate-pulse"
                  : "bg-muted-foreground"
              )}
            />
            <span>{isCallActive ? "Call in Progress" : "Ready to Call"}</span>
          </div>

          {isCallActive && (
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{formatTime(callDuration)}</span>
            </div>
          )}
        </div>

        {/* Call Controls */}
        <div className="flex justify-center space-x-4">
          {!isCallActive ? (
            <Button
              onClick={startCall}
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <Phone className="mr-2 h-5 w-5" />
              Start Demo Call
            </Button>
          ) : (
            <>
              <Button
                onClick={() => setIsMuted(!isMuted)}
                variant={isMuted ? "destructive" : "outline"}
                size="lg"
              >
                {isMuted ? (
                  <MicOff className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </Button>
              <Button onClick={endCall} variant="destructive" size="lg">
                <PhoneOff className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>

        {/* Call Transcript */}
        {isCallActive && (
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center space-x-2">
              <Volume2 className="h-4 w-4" />
              <span>Live Transcript</span>
            </h4>
            <div className="h-48 overflow-y-auto space-y-3 p-3 border rounded-lg bg-muted/30">
              <AnimatePresence>
                {demoTranscript
                  .slice(0, currentTranscriptIndex + 1)
                  .map((entry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "flex items-start space-x-2",
                        entry.speaker === "user"
                          ? "justify-end"
                          : "justify-start"
                      )}
                    >
                      {entry.speaker === "ai" && (
                        <div className="p-1 rounded-full bg-primary/10">
                          <Phone className="h-3 w-3 text-primary" />
                        </div>
                      )}
                      <div className="max-w-[80%] space-y-1">
                        <div
                          className={cn(
                            "p-2 rounded-lg text-sm",
                            entry.speaker === "user"
                              ? "bg-primary text-primary-foreground"
                              : entry.speaker === "system"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-background border"
                          )}
                        >
                          {entry.text}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {entry.time}
                        </div>
                      </div>
                      {entry.speaker === "user" && (
                        <div className="p-1 rounded-full bg-primary/10">
                          <User className="h-3 w-3 text-primary" />
                        </div>
                      )}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            {isCallActive
              ? "Watch the AI receptionist handle the call automatically!"
              : "Click 'Start Demo Call' to see our AI voice receptionist in action"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
