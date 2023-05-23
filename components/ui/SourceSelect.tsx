import * as React from 'react';

export interface SourceSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const SourceSelect = React.forwardRef<HTMLSelectElement, SourceSelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        className={className}
        ref={ref}
        {...props}
      >
        <option value="">source select</option>
        <option value="pinecone">Pinecone</option>
        <option value="supabase">Supabase</option>
      </select>
    );
  },
);

SourceSelect.displayName = 'SourceSelect';

export { SourceSelect };
