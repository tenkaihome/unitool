import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music, Coffee, ExternalLink, Facebook, Blocks, Sparkles, LayoutGrid } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { DonateInlineCard } from "@/components/donate-modal";

export const metadata: Metadata = {
    title: "UniTool - Universal Tools For You",
    description: "A collection of useful universal tools and an option to donate.",
};

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen py-10 px-4 sm:px-8 container mx-auto gap-12">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-4 space-y-8 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]"></div>

                <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Discover our new platform
                </div>

                <div className="relative group mt-4">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-2xl overflow-hidden border-2 border-indigo-500/20 bg-background/50 backdrop-blur-sm flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-300">
                        <Blocks className="h-12 w-12 text-indigo-500" />
                    </div>
                </div>

                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">UniTool</span>
                </h1>

                <p className="max-w-[700px] text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    A unified collection of powerful, free utilities designed to make your everyday tasks easier.
                    If you find these tools helpful, consider supporting the project! ☕
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button asChild size="lg" className="rounded-xl shadow-lg shadow-indigo-500/25 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0 h-14 px-8 text-base">
                        <Link href="#tools">
                            <LayoutGrid className="mr-2 h-5 w-5" />
                            Explore Everything
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-xl bg-background/50 backdrop-blur-sm border-indigo-500/20 hover:bg-indigo-500/10 h-14 px-8 text-base">
                        <Link href="#donate">
                            <Coffee className="mr-2 h-5 w-5" />
                            Buy us a Coffee
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Tools Section */}
            <section id="tools" className="flex flex-col items-center py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <LayoutGrid className="h-8 w-8 text-indigo-500" />
                        Available Tools
                    </h2>
                    <p className="text-muted-foreground">Select a tool below to get started immediately.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <Card className="group overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 rounded-2xl">
                        <CardHeader className="bg-muted/30 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-slate-800 text-slate-100 dark:bg-slate-100 dark:text-slate-900 shadow-sm">
                                    <Music className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle>TikTok Tools</CardTitle>
                                    <CardDescription>Video downloader & Trend tracker</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 flex-1">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Download TikTok videos without watermark, see trending songs in the last 48 hours,
                                and track trending products on TikTok Shop seamlessly.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full group-hover:bg-indigo-500 group-hover:text-white rounded-xl transition-colors" variant="secondary">
                                <Link href="/tiktok">
                                    Launch Tool <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="group overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:border-[#1877F2]/50 transition-all duration-300 rounded-2xl">
                        <CardHeader className="bg-muted/30 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-[#1877F2]/10 text-[#1877F2] shadow-sm">
                                    <Facebook className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle>Facebook Tools</CardTitle>
                                    <CardDescription>HD/SD video downloader</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 flex-1">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Download Facebook videos, Reels and Watch content in pristine HD or SD quality directly to your device with one click.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full group-hover:bg-[#1877F2] group-hover:text-white rounded-xl transition-colors" variant="secondary">
                                <Link href="/facebook">
                                    Launch Tool <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            {/* Donation Section */}
            <section id="donate" className="flex flex-col items-center py-16 pb-24">
                <div className="w-full max-w-3xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl p-8 sm:p-14 border border-indigo-500/20 text-center relative overflow-hidden backdrop-blur-sm shadow-xl">
                    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
                        <Coffee className="w-80 h-80 text-indigo-500/5 rotate-12" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative z-10 flex items-center justify-center gap-3">
                        <Coffee className="h-10 w-10 text-indigo-500" />
                        Support Development
                    </h2>
                    <p className="text-muted-foreground mb-10 relative z-10 text-lg max-w-2xl mx-auto">
                        Keeping servers alive and building new features takes time and resources.
                        If you love using UniTool, consider chipping in. Every coffee helps!
                    </p>

                    <div className="relative z-10">
                        <DonateInlineCard />
                    </div>
                </div>
            </section>
        </div>
    );
}
