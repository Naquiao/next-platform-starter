import { Alert } from './alert';

export function ContextAlert({ message, type = 'info', className }) {
    if (!message) return null;

    return (
        <Alert className={`callout callout-${type} ${className || ''}`}>
            <p>{message}</p>
        </Alert>
    );
}
