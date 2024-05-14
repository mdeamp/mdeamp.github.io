import { memo, type ReactNode } from 'react';

type TerminalCommandProps = {
  command: ReactNode;
};

export const TerminalCommand = memo(({ command }: TerminalCommandProps) => {
  return (
    <div>
      <span className="text-green-500">$</span>
      <span className="ml-2 text-gray-500">{command}</span>
    </div>
  );
});
