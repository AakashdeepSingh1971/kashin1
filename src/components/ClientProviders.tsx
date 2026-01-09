"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AdminHeader from "@/components/AdminHeader";
import AdminFooter from "@/components/AdminFooter";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");

    return (
        <TooltipProvider>
            <Toaster />
            <Sonner />

            {/* Conditional Header */}
            {isAdmin ? <AdminHeader /> : <Header />}

            {children}

            {/* Conditional Footer */}
            {isAdmin ? <AdminFooter /> : <Footer />}

            {/* WhatsApp only for normal users */}
            {!isAdmin && <WhatsAppButton />}
        </TooltipProvider>
    );
}
