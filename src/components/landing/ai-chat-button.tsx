'use client';
import { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AiChatButton() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <div className="fixed bottom-4 right-4 z-50">
                <Button size="icon" className="rounded-full w-14 h-14 shadow-lg" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
                    <span className="sr-only">Toggle AI Chat</span>
                </Button>
            </div>
            {isOpen && (
                <div className="fixed bottom-20 right-4 z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
                    <Card className="w-80 h-[28rem] flex flex-col shadow-2xl">
                        <CardHeader className="flex flex-row items-center justify-between">
                           <CardTitle className="flex items-center gap-2 text-lg">
                                <Bot className="h-6 w-6" />
                                <span>Verity AI Assistant</span>
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-hidden p-0">
                            <ScrollArea className="h-full p-4">
                                <div className="flex flex-col gap-4 text-sm">
                                    <div className="bg-primary text-primary-foreground p-3 rounded-lg self-start max-w-[90%]">
                                        Hello! I'm the Verity AI assistant. How can I help you learn about our services today?
                                    </div>
                                    {/* Example messages */}
                                </div>
                            </ScrollArea>
                        </CardContent>
                        <CardFooter>
                            <form className="flex w-full items-center gap-2">
                                <Input placeholder="Ask something..." />
                                <Button type="submit" size="icon"><Send className="h-4 w-4" /></Button>
                            </form>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </>
    )
}
