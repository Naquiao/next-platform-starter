import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'Test Generation',
};

export default function GenerationPage() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Test Generation</h1>
                <p className="page-description">
                    AI-powered test creation for comprehensive coverage
                </p>
            </div>

            {/* Manual Generation */}
            <section className="space-y-6">
                <h2>1.2 Manual (YAML template)</h2>
                <p>For <strong>precise</strong> scenarios, create your own test explicitly.</p>
                
                <div className="callout callout-info">
                    <p className="mb-2"><strong>Requirements:</strong></p>
                    <ol className="list-decimal list-inside space-y-1">
                        <li><strong>Content:</strong> follow the <strong>YAML morphology</strong> (see test structure section).</li>
                        <li><strong>File:</strong> place it under the Bugster tests folder, mirroring your app&apos;s <strong>filesystem hierarchy</strong>.</li>
                    </ol>
                </div>

                <div className="callout callout-warning">
                    <p><code>page</code> = route (e.g., <code>/dashboard/users</code>)</p>
                    <p><code>page_path</code> = source file path (e.g., <code>app/dashboard/users/page.tsx</code>)</p>
                </div>

                <h4>Suggested template (copy/paste):</h4>
                <div className="code-block">
{`name: User details page navigation
page: /dashboard/users
page_path: app/dashboard/users/page.tsx
task: Navigate from users list to a specific user's details page
steps:
- Navigate to the dashboard users page
- Click on a specific user from the list
- Verify that the user is redirected to the user details page
- Verify that the user details are displayed correctly
expected_result: User should be redirected to the specific user's details page`}
                </div>

                <p><strong>Run your manual test to validate it:</strong></p>
                <div className="code-block">
{`bugster run relative_path_to_my_test.yaml`}
                </div>
            </section>

            {/* AI Assistance */}
            <section className="space-y-6">
                <h2>1.3 Assisted (Claude Code / Cursor)</h2>
                <p>Use AI coding assistants like Cursor or Claude to generate Bugster-compliant test specifications with intelligent guidance.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="AI-powered" icon="🤖">
                        <p>Intelligent test scenario generation based on your code structure and patterns.</p>
                    </Card>

                    <Card title="Compliant" icon="✅">
                        <p>Follows Bugster YAML structure when properly configured.</p>
                    </Card>

                    <Card title="Fast" icon="⚡">
                        <p>Quicker than manual YAML writing with built-in validation.</p>
                    </Card>

                    <Card title="Guided" icon="🧭">
                        <p>Built-in best practices and intelligent suggestions.</p>
                    </Card>
                </div>

                <div className="callout callout-info">
                    <p>See the <a href="https://docs.bugster.dev/guides/coding-agents/cursor">Cursor Integration guide</a> for complete setup instructions and usage patterns.</p>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
                <Link href="/" className="btn btn-ghost">
                    ← Back to Home
                </Link>
                <Link href="/management" className="btn btn-primary">
                    Test Management →
                </Link>
            </div>
        </div>
    );
}
