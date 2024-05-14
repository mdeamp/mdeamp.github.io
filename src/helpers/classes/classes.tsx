export function classes(...classList: unknown[]): React.HTMLAttributes<unknown>['className'] {
  let classNames = '';

  classList.forEach((className) => {
    if (typeof className === 'string') classNames += ` ${className}`;
  });

  return classNames;
}
