export function Card({ className = '', ...props }: any){ return <div className={`rounded-2xl bg-white shadow-soft ${className}`} {...props} /> }
export function CardContent({ className = '', ...props }: any){ return <div className={`p-6 ${className}`} {...props} /> }
