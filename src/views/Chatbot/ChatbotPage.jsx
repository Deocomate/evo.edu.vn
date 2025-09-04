"use client";

import React, {useState, useRef, useEffect} from 'react';
import {Send, Loader2, User} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {ScrollArea} from '@/components/ui/scroll-area';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {sendMessage} from '@/services/chatbotService';
import BrandLogo from '@/components/shared/BrandLogo';
import {cn} from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

// Một message
const ChatMessage = ({message, isUser}) => {
    return (<div
        className={cn("flex items-start gap-4 my-4", isUser ? "justify-end" : "justify-start")}
    >
        {!isUser && (<Avatar className="w-10 h-10 border-2 border-sky-200">
            <AvatarImage src="/assets/logos/evo-logo.png" alt="Evo AI Assistant"/>
            <AvatarFallback>EVO</AvatarFallback>
        </Avatar>)}
        <div
            className={cn("max-w-md lg:max-w-2xl px-4 py-3 rounded-2xl shadow-md prose prose-sm", isUser ? "bg-sky-500 text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none border border-gray-100")}
        >
            <ReactMarkdown
                components={{
                    a: ({node, ...props}) => (<a
                        {...props}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 font-semibold hover:underline"
                    />),
                    p: ({node, ...props}) => <p {...props} className="my-1"/>,
                    ul: ({node, ...props}) => <ul {...props} className="my-2 pl-5"/>,
                    li: ({node, ...props}) => <li {...props} className="my-1"/>,
                }}
            >
                {message}
            </ReactMarkdown>
        </div>
        {isUser && (<Avatar className="w-10 h-10">
            <AvatarFallback>
                <User/>
            </AvatarFallback>
        </Avatar>)}
    </div>);
};

export default function ChatbotPage() {
    const [messages, setMessages] = useState([{
        role: 'assistant', content: 'Xin chào! Tôi là Trợ lý AI của Evo Education. Tôi có thể giúp gì cho bạn hôm nay?',
    },]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = {role: 'user', content: input};
        setMessages((prev) => [...prev, userMessage]);
        const questionToSend = input;
        setInput('');
        setIsLoading(true);

        try {
            const response = await sendMessage(questionToSend);
            const assistantMessage = {role: 'assistant', content: response.answer};
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage = {
                role: 'assistant', content: 'Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại sau.',
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (// CHỈNH: dùng min-h-screen thay vì height:100vh + thêm flex layout & padding đáy
        <div className="min-h-screen flex flex-col bg-sky-50/70 pt-20 pb-10">
            <div className="container mx-auto flex-1 flex flex-col p-4 max-w-5xl min-h-0">
                <header className="text-center mb-4 py-4 shrink-0">
                    <BrandLogo imageSize={80} className="justify-center"/>
                    <h1 className="text-3xl font-extrabold text-sky-900 mt-2">Trợ Lý AI Evo</h1>
                    <p className="text-slate-600 font-medium">
                        Hỏi đáp mọi thông tin về Evo Education
                    </p>
                </header>

                {/* ScrollArea co giãn phần còn lại */}
                <div className="flex-1 min-h-0 flex flex-col">
                    <ScrollArea
                        className="flex-1 w-full bg-white/80 rounded-xl shadow-inner p-4"
                        ref={scrollAreaRef}
                    >
                        <div className="px-4">
                            {messages.map((msg, index) => (<ChatMessage
                                key={index}
                                message={msg.content}
                                isUser={msg.role === 'user'}
                            />))}
                            {isLoading && (<div className="flex items-start gap-4 my-4 justify-start">
                                <Avatar className="w-10 h-10 border-2 border-sky-200">
                                    <AvatarImage
                                        src="/assets/logos/evo-logo.png"
                                        alt="Evo AI Assistant"
                                    />
                                    <AvatarFallback>EVO</AvatarFallback>
                                </Avatar>
                                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none p-3 shadow-md">
                                    <Loader2 className="w-6 h-6 text-sky-500 animate-spin"/>
                                </div>
                            </div>)}
                        </div>
                    </ScrollArea>

                    {/* Form input tách riêng, không đè footer vì trang giờ có thể cao hơn */}
                    <div className="py-4 shrink-0">
                        <form
                            onSubmit={handleSend}
                            className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-md"
                        >
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Nhập câu hỏi của bạn..."
                                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                                disabled={isLoading}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        handleSend(e);
                                    }
                                }}
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="bg-sky-500 hover:bg-sky-600 rounded-full w-12 h-12"
                                disabled={isLoading || !input.trim()}
                            >
                                <Send className="h-6 w-6"/>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
}