import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'Running Tests',
};

export default function ExecutionPage() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Running Tests</h1>
                <p className="page-description">
                    Execute and validate your tests with confidence
                </p>
            </div>

            {/* Basic Execution */}
            <section className="space-y-6">
                <h2>Basic Test Execution</h2>
                <p>Once you&apos;ve created tests, running them is straightforward. Bugster provides several ways to execute your test suites:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="Single Test" icon="🎯">
                        <div className="code-block">
{`bugster run path/to/test.yaml`}
                        </div>
                        <p>Run a specific test file to validate individual scenarios.</p>
                    </Card>

                    <Card title="All Tests" icon="🚀">
                        <div className="code-block">
{`bugster run`}
                        </div>
                        <p>Execute all tests in your test suite for comprehensive validation.</p>
                    </Card>

                    <Card title="Directory Tests" icon="📁">
                        <div className="code-block">
{`bugster run .bugster/tests/auth/`}
                        </div>
                        <p>Run all tests within a specific directory or feature area.</p>
                    </Card>

                    <Card title="Filtered Tests" icon="🔍">
                        <div className="code-block">
{`bugster run --filter "login"`}
                        </div>
                        <p>Execute tests matching specific patterns or keywords.</p>
                    </Card>
                </div>
            </section>

            {/* Advanced Options */}
            <section className="space-y-6">
                <h2>Advanced Execution Options</h2>
                
                <div className="space-y-4">
                    <h3>Environment Configuration</h3>
                    <div className="code-block">
{`# Run tests against different environments
bugster run --env staging
bugster run --env production

# Use specific credentials
bugster run --credential admin
bugster run --credential guest`}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3>Parallel Execution</h3>
                    <div className="code-block">
{`# Run tests in parallel for faster execution
bugster run --parallel 4

# Run tests concurrently (default)
bugster run --concurrent`}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3>Output and Reporting</h3>
                    <div className="code-block">
{`# Generate detailed reports
bugster run --report html
bugster run --report json

# Verbose output for debugging
bugster run --verbose

# Silent mode for CI/CD
bugster run --silent`}
                    </div>
                </div>
            </section>

            {/* CI/CD Integration */}
            <section className="space-y-6">
                <h2>CI/CD Integration</h2>
                <p>Integrate Bugster tests into your continuous integration pipeline:</p>

                <div className="space-y-4">
                    <h3>GitHub Actions</h3>
                    <div className="code-block">
{`name: Run Bugster Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Bugster
        run: npm install -g @bugster/cli
      - name: Run Tests
        run: bugster run --report json
        env:
          BUGSTER_API_KEY: \${{ secrets.BUGSTER_API_KEY }}`}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3>Exit Codes</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>0:</strong> All tests passed</li>
                        <li><strong>1:</strong> One or more tests failed</li>
                        <li><strong>2:</strong> Configuration or setup error</li>
                        <li><strong>3:</strong> Test files not found</li>
                    </ul>
                </div>
            </section>

            {/* Debugging Tests */}
            <section className="space-y-6">
                <h2>Debugging Failed Tests</h2>
                <p>When tests fail, Bugster provides comprehensive debugging information:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="Screenshots" icon="📸">
                        <p>Automatic screenshots are captured at failure points to help you understand what went wrong visually.</p>
                    </Card>

                    <Card title="Step-by-Step Logs" icon="📝">
                        <p>Detailed execution logs show exactly which step failed and why.</p>
                    </Card>

                    <Card title="Browser Console" icon="🖥️">
                        <p>JavaScript errors and console messages are captured and reported.</p>
                    </Card>

                    <Card title="Network Requests" icon="🌐">
                        <p>Failed API calls and network issues are logged with full request/response details.</p>
                    </Card>
                </div>

                <div className="callout callout-info">
                    <p><strong>Debug Mode:</strong> Run with <code>--debug</code> flag to get maximum verbosity and keep browser windows open for manual inspection.</p>
                    <div className="code-block">
{`bugster run --debug path/to/failing-test.yaml`}
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section className="space-y-6">
                <h2>Best Practices</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="Test Isolation" icon="🏠">
                        <p>Ensure tests don&apos;t depend on each other. Each test should set up its own state and clean up afterward.</p>
                    </Card>

                    <Card title="Data Management" icon="💾">
                        <p>Use test databases or mock data to avoid conflicts with production data during test runs.</p>
                    </Card>

                    <Card title="Retry Logic" icon="🔄">
                        <p>Configure automatic retries for flaky tests using <code>--retry 3</code> to handle temporary issues.</p>
                    </Card>

                    <Card title="Performance" icon="⚡">
                        <p>Monitor test execution time and optimize slow tests to maintain fast feedback loops.</p>
                    </Card>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
                <Link href="/management" className="btn btn-ghost">
                    ← Test Management
                </Link>
                <Link href="/examples" className="btn btn-primary">
                    Examples →
                </Link>
            </div>
        </div>
    );
}
