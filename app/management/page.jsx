import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'Test Management',
};

export default function ManagementPage() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Test Management</h1>
                <p className="page-description">
                    Organize, edit, and maintain your test suites
                </p>
            </div>

            {/* Test Morphology */}
            <section className="space-y-6">
                <h2 id="2-test-morphology">2. Test morphology in Bugster</h2>
                <blockquote className="text-lg">
                    <strong>Definition:</strong> the minimal structure Bugster expects in a test.
                </blockquote>

                <div className="code-block">
{`name: Title of the test
page: Main page path of the test in /folder/subfolder format, e.g. "/dashboard/users"
page_path: Source path of the page, e.g. app/dashboard/users/page.tsx
credential_id (optional): The credential/role/permission you want Bugster to use.
task: The goal the test must achieve
steps:
- General or specific steps
- What you want the agent to do to achieve the task
- Because there can be multiple paths to the same goal
expected_result: What the agent should verify to confirm the goal was achieved`}
                </div>

                <div className="callout callout-success">
                    <h3 className="font-semibold mb-2">Test quality checklist:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>One clear task</strong> per test (avoid multi-goals).</li>
                        <li><strong>Steps are actionable</strong> (verbs first) and ordered.</li>
                        <li><strong><code>expected_result</code> is observable</strong> (URL change, element visible, text equals).</li>
                    </ul>
                </div>

                <p>Here&apos;s an example of a good vs. a bad <code>expected_result</code>:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="callout callout-error">
                        <h4 className="font-semibold mb-2">❌ Vague</h4>
                        <div className="code-block">
{`expected_result: The page works`}
                        </div>
                    </div>

                    <div className="callout callout-success">
                        <h4 className="font-semibold mb-2">✅ Observable</h4>
                        <div className="code-block">
{`expected_result: The URL includes "/users/123" and an element with text "User details" is visible`}
                        </div>
                    </div>
                </div>

                <h4>Example:</h4>
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
            </section>

            {/* Editing Tests */}
            <section className="space-y-6">
                <h2 id="3-editing">3. Editing an existing test</h2>
                <p>
                    You can <strong>edit</strong> any Bugster-generated (or user-created) test, as long as you keep the YAML <strong>morphology</strong> 
                    (<code>name</code>, <code>page</code>, <code>page_path</code>, <code>task</code>, <code>steps</code>, <code>expected_result</code>).
                </p>

                <ul className="list-disc list-inside space-y-1">
                    <li>Rename the <strong>test</strong> for team clarity.</li>
                    <li>Adjust the <strong>task</strong> to be more precise.</li>
                    <li>Add/remove <strong>steps</strong> to better guide the agent.</li>
                    <li>Update the <strong>expected_result</strong> if the verification changes.</li>
                </ul>

                <div className="callout callout-info">
                    <p><strong>Recommendation:</strong> run the test again to confirm the changes are honored:</p>
                    <div className="code-block">
{`bugster run relative_path_to_my_test.yaml`}
                    </div>
                </div>
            </section>

            {/* Deleting Tests */}
            <section className="space-y-6">
                <h2 id="4-deleting">4. Deleting tests</h2>
                <p>You can <strong>delete</strong> any test with no restrictions:</p>

                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Single file:</strong> remove the test file.</li>
                    <li><strong>Batch:</strong> delete a <strong>folder</strong> under <code>.bugster/tests/...</code> to remove all tests beneath it.</li>
                </ul>

                <div className="callout callout-info">
                    <p>This does not disrupt Bugster&apos;s functionality or your workflows.</p>
                </div>
            </section>

            {/* File Location */}
            <section className="space-y-6">
                <h2>5. File location and naming conventions</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Bugster tests folder: <code>/.bugster/tests/</code></li>
                    <li><strong>Hierarchy:</strong> mirror your app structure (based on <code>page_path</code>).</li>
                </ul>

                <h4>Mapping example:</h4>
                <p>If your test declares <code>page_path: app/dashboard/users/page.tsx</code>, the recommended location is:</p>
                <div className="code-block">
{`.bugster/tests/dashboard/users/test.yaml`}
                </div>

                <h4>File naming:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>use <strong>snake_case</strong>, lowercase, descriptive.</li>
                    <li>If <code>name: Navigation back to home from about page</code>, the recommended file name is:</li>
                </ul>
                <div className="code-block">
{`navigation_back_to_home_from_about_page.yaml`}
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
                <Link href="/generation" className="btn btn-ghost">
                    ← Test Generation
                </Link>
                <Link href="/execution" className="btn btn-primary">
                    Running Tests →
                </Link>
            </div>
        </div>
    );
}
