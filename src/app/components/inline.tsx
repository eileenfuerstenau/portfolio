type InlineProps = {
  children: any;
  className?: string;
};
export const Inline = (props: InlineProps) => {
  const { children, className } = props;
  return <div className={`flex  items-center ${className}`}>{children}</div>;
};
