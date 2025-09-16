import Link from 'next/link';
import { Card } from 'components/card';

export default function Page() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Generating and managing tests</h1>
                <p className="page-description">
                    How to create, modify, and remove tests in Bugster.
                </p>
            </div>

            {/* Introduction */}
            <div className="prose max-w-none">
                <p className="text-lg">
                    Generating tests in Bugster is simple and flexible. You can auto-generate tests across your entire app for quick coverage, manually craft precise test scenarios, or use AI assistance to write and refine tests. Once created, tests are easy to edit and delete as your application evolves.
                </p>
                
                <p>In this guide you will learn:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li><a href="#1-generate-tests">How to generate tests (3 ways)</a></li>
                    <li><a href="#2-test-morphology">The required test morphology</a></li>
                    <li><a href="#3-editing">How to edit any test field and validate changes</a></li>
                    <li><a href="#4-deleting">How to delete tests</a></li>
                </ol>
            </div>

            {/* Prerequisites Card */}
            <div className="callout callout-info">
                <h3 className="font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Bugster CLI installed and authenticated.</li>
                    <li>Run commands from your repo root (same folder containing <code>/.bugster/</code>).</li>
                    <li>Your app runs locally (if you plan to validate with <code>bugster run</code>).</li>
                </ul>
            </div>

            {/* Generate Tests Section */}
            <section id="1-generate-tests" className="space-y-6">
                <h2>1. Generate tests (3 ways)</h2>
                <p>Bugster supports <strong>three</strong> creation modes:</p>
                
                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>If you want to...</th>
                                <th>Use</th>
                                <th>Why</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Seed broad coverage fast</td>
                                <td>Automatic <code>bugster generate</code></td>
                                <td>Highest coverage per minute</td>
                            </tr>
                            <tr>
                                <td>Generate targeted scenarios</td>
                                <td><code>bugster generate --prompt</code></td>
                                <td>AI-guided generation with custom focus</td>
                            </tr>
                            <tr>
                                <td>Capture a very specific scenario</td>
                                <td>Manual YAML</td>
                                <td>Full control over task/steps/expected_result</td>
                            </tr>
                            <tr>
                                <td>Write/refine with an AI editor</td>
                                <td>Assisted (Claude Code/Cursor)</td>
                                <td>Faster authoring, inline edits</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Automatic Generation */}
                <div className="space-y-4">
                    <h3>1.1 Automatic (bulk) — <code>bugster generate</code></h3>
                    <p>Bugster can <strong>propose and create</strong> many tests across your app or for specific pages.</p>
                    
                    <h4>Commands:</h4>
                    <div className="code-block">
{`# Bulk auto-generation (across some pages)
bugster generate

# Generate for specific pages (using source file paths)
bugster generate --page path/to/page.tsx path/to/another/page.tsx

# Generate N tests distributed across pages
bugster generate --count 10

# Combine: 13 tests for a specific page
bugster generate --count 13 --page path/to/page.tsx

# Generate with custom AI guidance (requires --page)
bugster generate --page path/to/page.tsx --prompt "Focus on edge cases and error handling"

# Combine count, page, and custom prompt
bugster generate --count 5 --page path/to/page.tsx --prompt "Test form validation and user input scenarios"`}
                    </div>
                    
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Pros:</strong> fast, broad initial coverage, zero overhead, customizable with <code>--prompt</code> for targeted scenarios.</li>
                        <li><strong>Cons:</strong> if you need a <strong>very specific</strong> use case, it might not appear on the first pass (complement with a manual test or use <code>--prompt</code> for guidance).</li>
                    </ul>
                </div>
            </section>

            {/* Quick Start Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <Card title="🚀 Quick Start" className="notion-card">
                    <p className="notion-card-description">
                        Get up and running with Bugster in under 5 minutes. Install the CLI and generate your first tests.
                    </p>
                    <Link href="/generation" className="btn btn-primary btn-sm mt-4">
                        Start Generating
                    </Link>
                </Card>

                <Card title="📋 Test Management" className="notion-card">
                    <p className="notion-card-description">
                        Learn how to organize, edit, and maintain your test suites as your application grows.
                    </p>
                    <Link href="/management" className="btn btn-secondary btn-sm mt-4">
                        Manage Tests
                    </Link>
                </Card>

                <Card title="▶️ Running Tests" className="notion-card">
                    <p className="notion-card-description">
                        Execute your tests locally or in CI/CD pipelines. Monitor results and debug failures.
                    </p>
                    <Link href="/execution" className="btn btn-secondary btn-sm mt-4">
                        Run Tests
                    </Link>
                </Card>
            </div>
        </div>
    );
}
