"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChatbotMessage } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Send, Bot, User } from "lucide-react";

const demoMessages: ChatbotMessage[] = [
  {
    id: "1",
    content: "Hello! I'm your AI assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

export function ChatbotDemo() {
  const [messages, setMessages] = useState<ChatbotMessage[]>(demoMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatbotMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: ChatbotMessage = {
        id: (Date.now() + 1).toString(),
        content:
          "Thank you for your message! I'm a demo chatbot. In a real implementation, I would process your request and provide a helpful response.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2">
          <Bot className="h-5 w-5 text-primary" />
          <span>AI Chatbot Demo</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Messages */}
        <div className="h-64 overflow-y-auto space-y-3 p-2 border rounded-lg bg-muted/30">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex items-start space-x-2",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.sender === "bot" && (
                <div className="p-1 rounded-full bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-lg text-sm",
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border"
                )}
              >
                {message.content}
              </div>
              {message.sender === "user" && (
                <div className="p-1 rounded-full bg-primary/10">
                  <User className="h-4 w-4 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start space-x-2"
            >
              <div className="p-1 rounded-full bg-primary/10">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-background border p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce" />
                  <div
                    className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            size="sm"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          This is a demo. Try typing a message to see the interaction!
        </p>
      </CardContent>
    </Card>
  );
}
