export const DescriptionSection = ({ description, title, srTitle, children }: { description?: string, title: string, srTitle: string, children?: React.ReactNode }) => (
  <div>
    <h3 className="sr-only">{srTitle}</h3>
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    {description && <p className="mt-2 text-gray-600">{description}</p>}
    {children}
  </div>
);
