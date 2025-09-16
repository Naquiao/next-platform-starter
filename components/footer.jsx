import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-t border-neutral-200">
            <div className="text-center">
                <p className="text-sm text-neutral-600 mb-4">
                    Built with ❤️ for better testing workflows
                </p>
                <div className="flex justify-center space-x-6 text-sm">
                    <Link
                        href="https://docs.bugster.dev"
                        className="text-neutral-500 hover:text-primary"
                    >
                        Documentation
                    </Link>
                    <Link
                        href="https://github.com/bugster-ai"
                        className="text-neutral-500 hover:text-primary"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="https://bugster.dev/support"
                        className="text-neutral-500 hover:text-primary"
                    >
                        Support
                    </Link>
                    <Link
                        href="https://bugster.dev/changelog"
                        className="text-neutral-500 hover:text-primary"
                    >
                        Changelog
                    </Link>
                </div>
            </div>
        </footer>
    );
}
