import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'Examples',
};

export default function ExamplesPage() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="page-title">Examples</h1>
                <p className="page-description">
                    Real-world test implementations and patterns
                </p>
            </div>

            {/* Common Patterns */}
            <section className="space-y-6">
                <h2>Common Test Patterns</h2>
                <p>Here are some frequently used test scenarios and how to implement them in Bugster:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="User Authentication" icon="🔐">
                        <div className="code-block text-sm">
{`name: User login flow
page: /login
page_path: app/login/page.tsx
task: Successfully log in with valid credentials
steps:
- Navigate to the login page
- Enter valid email address
- Enter valid password
- Click the login button
- Verify redirect to dashboard
expected_result: User is redirected to /dashboard and sees welcome message`}
                        </div>
                    </Card>

                    <Card title="Form Validation" icon="✅">
                        <div className="code-block text-sm">
{`name: Contact form validation
page: /contact
page_path: app/contact/page.tsx
task: Validate required fields in contact form
steps:
- Navigate to contact page
- Click submit without filling fields
- Verify error messages appear
- Fill all required fields
- Submit form successfully
expected_result: Form shows validation errors, then submits when valid`}
                        </div>
                    </Card>

                    <Card title="E-commerce Workflow" icon="🛒">
                        <div className="code-block text-sm">
{`name: Add product to cart
page: /products
page_path: app/products/page.tsx
task: Add a product to shopping cart
steps:
- Browse to products page
- Click on a product
- Select size and color
- Click "Add to Cart"
- Verify cart icon updates
expected_result: Product appears in cart with correct details`}
                        </div>
                    </Card>

                    <Card title="Search Functionality" icon="🔍">
                        <div className="code-block text-sm">
{`name: Product search
page: /
page_path: app/page.tsx
task: Search for products using search bar
steps:
- Navigate to home page
- Enter search term in search bar
- Press enter or click search
- Verify results page loads
- Verify relevant products displayed
expected_result: Search results show products matching the query`}
                        </div>
                    </Card>
                </div>
            </section>

            {/* Advanced Scenarios */}
            <section className="space-y-6">
                <h2>Advanced Scenarios</h2>

                <div className="space-y-6">
                    <h3>Multi-step User Journey</h3>
                    <div className="code-block">
{`name: Complete user onboarding
page: /signup
page_path: app/signup/page.tsx
credential_id: guest
task: Complete the entire user onboarding process
steps:
- Navigate to signup page
- Fill registration form with valid data
- Submit registration
- Verify email confirmation message
- Navigate to profile setup
- Upload profile picture
- Fill personal information
- Complete tutorial walkthrough
- Verify dashboard access
expected_result: User completes onboarding and reaches main dashboard with tutorial completed`}
                    </div>

                    <h3>Error Handling</h3>
                    <div className="code-block">
{`name: Handle server errors gracefully
page: /api-test
page_path: app/api-test/page.tsx
task: Test application behavior when API returns 500 error
steps:
- Navigate to API test page
- Trigger action that causes server error
- Verify error message is displayed
- Verify user can retry the action
- Verify fallback UI is shown
expected_result: Application shows user-friendly error message and recovery options`}
                    </div>

                    <h3>Responsive Design</h3>
                    <div className="code-block">
{`name: Mobile navigation menu
page: /
page_path: app/page.tsx
task: Test mobile navigation menu functionality
steps:
- Set viewport to mobile size (375x667)
- Navigate to home page
- Click hamburger menu icon
- Verify menu slides out
- Click on a menu item
- Verify page navigation works
expected_result: Mobile menu opens, closes, and navigation works on small screens`}
                    </div>
                </div>
            </section>

            {/* Integration Examples */}
            <section className="space-y-6">
                <h2>Integration Examples</h2>
                
                <div className="space-y-4">
                    <h3>Testing with External APIs</h3>
                    <div className="code-block">
{`name: Weather widget integration
page: /dashboard
page_path: app/dashboard/page.tsx
task: Verify weather widget loads and displays data
steps:
- Navigate to dashboard
- Wait for weather widget to load
- Verify city name is displayed
- Verify temperature is shown
- Verify weather icon appears
- Test refresh functionality
expected_result: Weather widget shows current weather data and can refresh`}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3>Payment Processing</h3>
                    <div className="code-block">
{`name: Stripe payment integration
page: /checkout
page_path: app/checkout/page.tsx
credential_id: customer
task: Complete payment using Stripe test card
steps:
- Add items to cart
- Navigate to checkout
- Fill shipping information
- Enter test credit card details
- Click pay button
- Wait for payment processing
- Verify success page
expected_result: Payment processes successfully using Stripe test card 4242424242424242`}
                    </div>
                </div>
            </section>

            {/* Framework Examples */}
            <section className="space-y-6">
                <h2>Framework-Specific Examples</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card title="Next.js App Router" icon="⚛️">
                        <div className="code-block text-sm">
{`# Testing dynamic routes
name: Dynamic product page
page: /products/[id]
page_path: app/products/[id]/page.tsx
task: Test dynamic product page loading
steps:
- Navigate to /products/123
- Verify product details load
- Test related products section
- Verify breadcrumb navigation
expected_result: Product page loads with correct data for ID 123`}
                        </div>
                    </Card>

                    <Card title="React Components" icon="🔧">
                        <div className="code-block text-sm">
{`# Testing interactive components
name: Modal component interaction
page: /components
page_path: app/components/page.tsx
task: Test modal open/close functionality
steps:
- Navigate to components page
- Click "Open Modal" button
- Verify modal appears with overlay
- Click close button
- Verify modal disappears
expected_result: Modal opens and closes properly with backdrop`}
                        </div>
                    </Card>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
                <Link href="/execution" className="btn btn-ghost">
                    ← Running Tests
                </Link>
                <Link href="/api" className="btn btn-primary">
                    API Reference →
                </Link>
            </div>
        </div>
    );
}
