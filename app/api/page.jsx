import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'API Reference',
};

export default function ApiPage() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">API Reference</h1>
                <p className="page-description">
                    Complete CLI documentation and configuration options
                </p>
            </div>

            {/* Installation */}
            <section className="space-y-6">
                <h2>Installation</h2>
                <div className="code-block">
{`# Install globally via npm
npm install -g @bugster/cli

# Or via yarn
yarn global add @bugster/cli

# Verify installation
bugster --version`}
                </div>
            </section>

            {/* Authentication */}
            <section className="space-y-6">
                <h2>Authentication</h2>
                <div className="space-y-4">
                    <h3>Login</h3>
                    <div className="code-block">
{`# Login to Bugster account
bugster auth login

# Login with API key
bugster auth login --api-key YOUR_API_KEY

# Check authentication status
bugster auth status`}
                    </div>

                    <h3>Logout</h3>
                    <div className="code-block">
{`# Logout from current session
bugster auth logout`}
                    </div>
                </div>
            </section>

            {/* Commands */}
            <section className="space-y-6">
                <h2>Core Commands</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="generate" icon="⚡">
                        <p className="mb-2">Generate tests automatically or with custom prompts.</p>
                        <div className="code-block text-sm">
{`# Basic generation
bugster generate

# Generate for specific pages
bugster generate --page path/to/page.tsx

# Generate with count
bugster generate --count 10

# Generate with custom prompt
bugster generate --prompt "Focus on error handling"`}
                        </div>
                    </Card>

                    <Card title="run" icon="▶️">
                        <p className="mb-2">Execute tests with various options.</p>
                        <div className="code-block text-sm">
{`# Run all tests
bugster run

# Run specific test
bugster run path/to/test.yaml

# Run with options
bugster run --parallel 4 --verbose

# Run with environment
bugster run --env staging`}
                        </div>
                    </Card>

                    <Card title="init" icon="🚀">
                        <p className="mb-2">Initialize Bugster in your project.</p>
                        <div className="code-block text-sm">
{`# Initialize new project
bugster init

# Initialize with template
bugster init --template nextjs

# Initialize with custom config
bugster init --config custom.json`}
                        </div>
                    </Card>

                    <Card title="validate" icon="✅">
                        <p className="mb-2">Validate test files and configuration.</p>
                        <div className="code-block text-sm">
{`# Validate all tests
bugster validate

# Validate specific test
bugster validate path/to/test.yaml

# Validate configuration
bugster validate --config`}
                        </div>
                    </Card>
                </div>
            </section>

            {/* Configuration */}
            <section className="space-y-6">
                <h2>Configuration</h2>
                
                <div className="space-y-4">
                    <h3>bugster.config.json</h3>
                    <div className="code-block">
{`{
  "baseUrl": "http://localhost:3000",
  "testDir": ".bugster/tests",
  "timeout": 30000,
  "retries": 2,
  "parallel": true,
  "maxParallel": 4,
  "browser": {
    "headless": true,
    "viewport": {
      "width": 1280,
      "height": 720
    }
  },
  "credentials": {
    "admin": {
      "email": "admin@example.com",
      "password": "admin123"
    },
    "user": {
      "email": "user@example.com", 
      "password": "user123"
    }
  },
  "environments": {
    "dev": "http://localhost:3000",
    "staging": "https://staging.example.com",
    "production": "https://example.com"
  }
}`}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3>Environment Variables</h3>
                    <div className="code-block">
{`# Required
BUGSTER_API_KEY=your_api_key_here

# Optional
BUGSTER_BASE_URL=http://localhost:3000
BUGSTER_TIMEOUT=30000
BUGSTER_HEADLESS=true
BUGSTER_PARALLEL=4`}
                    </div>
                </div>
            </section>

            {/* CLI Options */}
            <section className="space-y-6">
                <h2>Global Options</h2>
                
                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Option</th>
                                <th>Description</th>
                                <th>Default</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>--config</code></td>
                                <td>Path to configuration file</td>
                                <td>bugster.config.json</td>
                            </tr>
                            <tr>
                                <td><code>--verbose</code></td>
                                <td>Enable verbose logging</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td><code>--silent</code></td>
                                <td>Suppress all output</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td><code>--debug</code></td>
                                <td>Enable debug mode</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td><code>--help</code></td>
                                <td>Show help information</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td><code>--version</code></td>
                                <td>Show version number</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Run Command Options */}
            <section className="space-y-6">
                <h2>Run Command Options</h2>
                
                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Option</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>--env</code></td>
                                <td>Environment to run against</td>
                                <td><code>--env staging</code></td>
                            </tr>
                            <tr>
                                <td><code>--credential</code></td>
                                <td>Credential set to use</td>
                                <td><code>--credential admin</code></td>
                            </tr>
                            <tr>
                                <td><code>--parallel</code></td>
                                <td>Number of parallel executions</td>
                                <td><code>--parallel 4</code></td>
                            </tr>
                            <tr>
                                <td><code>--timeout</code></td>
                                <td>Test timeout in milliseconds</td>
                                <td><code>--timeout 60000</code></td>
                            </tr>
                            <tr>
                                <td><code>--retry</code></td>
                                <td>Number of retries on failure</td>
                                <td><code>--retry 3</code></td>
                            </tr>
                            <tr>
                                <td><code>--report</code></td>
                                <td>Report format (json, html, junit)</td>
                                <td><code>--report html</code></td>
                            </tr>
                            <tr>
                        <td><code>--filter</code></td>
                        <td>Filter tests by name pattern</td>
                        <td><code>--filter &quot;login&quot;</code></td>
                            </tr>
                            <tr>
                                <td><code>--headless</code></td>
                                <td>Run in headless mode</td>
                                <td><code>--headless false</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Exit Codes */}
            <section className="space-y-6">
                <h2>Exit Codes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="Success Codes" icon="✅">
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>0:</strong> All tests passed</li>
                        </ul>
                    </Card>

                    <Card title="Error Codes" icon="❌">
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>1:</strong> One or more tests failed</li>
                            <li><strong>2:</strong> Configuration error</li>
                            <li><strong>3:</strong> No tests found</li>
                            <li><strong>4:</strong> Authentication error</li>
                            <li><strong>5:</strong> Network/API error</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
                <Link href="/examples" className="btn btn-ghost">
                    ← Examples
                </Link>
                <Link href="/" className="btn btn-primary">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
