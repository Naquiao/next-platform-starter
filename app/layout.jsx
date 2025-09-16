import '../styles/globals.css';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Bugster',
        default: 'Bugster - AI Test Generation Platform'
    },
    description: 'Generate, manage, and run automated tests with AI-powered precision. Bugster makes testing simple and comprehensive.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased bg-white">
                <div className="flex min-h-screen">
                    <Header />
                    <main className="main-content flex-1">
                        <div className="max-w-4xl mx-auto px-8 py-8">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}
