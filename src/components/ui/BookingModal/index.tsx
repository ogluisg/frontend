"use client";

import { Button } from "@/components/ui/Button";
import { CAL_CONFIG } from "@/lib/cal-config";
import Cal from "@calcom/embed-react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span>30 Minute Discovery Call</span>
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Book a 30 minute discovery call to discuss your needs.
                  </p>
                  <Cal
                    calLink={CAL_CONFIG.calLink}
                    config={CAL_CONFIG.defaultConfig}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book 30 Minute Discovery Call
                  </Cal>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
