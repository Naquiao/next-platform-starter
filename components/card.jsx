export function Card({ title, children, className, icon }) {
    return (
        <div className={['bg-white border border-neutral-200 rounded-lg hover:shadow-sm transition-shadow duration-200', className].filter(Boolean).join(' ')}>
            <div className="p-6">
                {(title || icon) && (
                    <div className="notion-card-header">
                        {icon && <div className="notion-card-icon">{icon}</div>}
                        {title && <h3 className="notion-card-title">{title}</h3>}
                    </div>
                )}
                <div className="notion-card-description">
                    {children}
                </div>
            </div>
        </div>
    );
}
