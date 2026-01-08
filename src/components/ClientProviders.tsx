// src/components/ClientProviders.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
        </TooltipProvider>
    );
}
