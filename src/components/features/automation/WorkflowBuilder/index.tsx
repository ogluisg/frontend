"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { WorkflowStep } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Database, Zap } from "lucide-react";
import { useState } from "react";

const workflowSteps: WorkflowStep[] = [
  {
    id: "1",
    type: "trigger",
    name: "New Lead",
    description: "When a new lead is created",
    config: { source: "website_form" },
  },
  {
    id: "2",
    type: "action",
    name: "Send Welcome Email",
    description: "Send automated welcome email",
    config: { template: "welcome_email" },
  },
  {
    id: "3",
    type: "action",
    name: "Add to CRM",
    description: "Create contact in CRM system",
    config: { crm: "salesforce" },
  },
  {
    id: "4",
    type: "condition",
    name: "Check Lead Score",
    description: "Evaluate lead quality",
    config: { threshold: 50 },
  },
  {
    id: "5",
    type: "action",
    name: "Schedule Follow-up",
    description: "Schedule sales call",
    config: { delay: "24h" },
  },
];

const stepIcons = {
  trigger: Zap,
  action: CheckCircle,
  condition: Database,
};

const stepColors = {
  trigger: "bg-blue-500",
  action: "bg-green-500",
  condition: "bg-yellow-500",
};

export function WorkflowBuilder() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runWorkflow = () => {
    setIsRunning(true);
    let currentStep = 0;

    const runStep = () => {
      if (currentStep < workflowSteps.length) {
        setActiveStep(currentStep);
        currentStep++;
        setTimeout(runStep, 1500);
      } else {
        setIsRunning(false);
        setActiveStep(-1);
      }
    };

    runStep();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-primary" />
          <span>AI Automation Workflow</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Workflow Steps */}
        <div className="space-y-4">
          {workflowSteps.map((step, index) => {
            const IconComponent = stepIcons[step.type];
            const isActive = activeStep === index;
            const isCompleted = activeStep > index;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                {/* Step Icon */}
                <div
                  className={cn(
                    "p-3 rounded-full text-white transition-all duration-300",
                    stepColors[step.type],
                    isActive && "scale-110 shadow-lg",
                    isCompleted && "bg-green-500"
                  )}
                >
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-muted/30 rounded-lg p-4 border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{step.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 bg-primary rounded-full animate-pulse"
                      />
                    )}
                    {isCompleted && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>

                {/* Arrow */}
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 pt-4 border-t">
          <Button
            onClick={runWorkflow}
            disabled={isRunning}
            className="min-w-[120px]"
          >
            {isRunning ? "Running..." : "Run Workflow"}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setActiveStep(-1);
              setIsRunning(false);
            }}
            disabled={isRunning}
          >
            Reset
          </Button>
        </div>

        {/* Status */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {isRunning
              ? "Workflow is running... Watch the steps execute automatically!"
              : "Click 'Run Workflow' to see the automation in action"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
