import Link from 'next/link';

const navItems = [
    { 
        linkText: 'Getting Started', 
        href: '/',
        icon: '🚀',
        description: 'Learn the basics'
    },
    { 
        linkText: 'Test Generation', 
        href: '/generation',
        icon: '⚡',
        description: 'AI-powered test creation'
    },
    { 
        linkText: 'Test Management', 
        href: '/management',
        icon: '📋',
        description: 'Organize and edit tests'
    },
    { 
        linkText: 'Running Tests', 
        href: '/execution',
        icon: '▶️',
        description: 'Execute and validate'
    },
    { 
        linkText: 'Examples', 
        href: '/examples',
        icon: '📚',
        description: 'Sample implementations'
    },
    { 
        linkText: 'API Reference', 
        href: '/api',
        icon: '🔧',
        description: 'Complete CLI documentation'
    }
];

export function Header() {
    return (
        <aside className="sidebar">
            <div className="p-4">
                {/* Logo/Brand */}
                <Link href="/" className="flex items-center mb-8">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <span className="text-xl font-semibold text-neutral-900">Bugster</span>
                    </div>
                </Link>

                {/* Navigation Items */}
                <nav className="space-y-1">
                    {navItems.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.href} 
                            className="sidebar-item group"
                        >
                            <span className="sidebar-item-icon">{item.icon}</span>
                            <div>
                                <div className="font-medium">{item.linkText}</div>
                                <div className="text-xs text-neutral-500 group-hover:text-neutral-600">
                                    {item.description}
                                </div>
                            </div>
                        </Link>
                    ))}
                </nav>

                {/* Footer Section */}
                <div className="mt-12 pt-6 border-t border-neutral-200">
                    <Link
                        href="https://github.com/bugster-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-item"
                    >
                        <span className="sidebar-item-icon">🔗</span>
                        <div>
                            <div className="font-medium">GitHub</div>
                            <div className="text-xs text-neutral-500">View source code</div>
                        </div>
                    </Link>
                    <Link
                        href="https://docs.bugster.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-item"
                    >
                        <span className="sidebar-item-icon">📖</span>
                        <div>
                            <div className="font-medium">Documentation</div>
                            <div className="text-xs text-neutral-500">Full guides & API</div>
                        </div>
                    </Link>
                </div>
            </div>
        </aside>
    );
}
