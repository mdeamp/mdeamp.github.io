import { memo } from 'react';

type TerminalOutputProps = {
  output: string;
};

export const TerminalOutput = memo(({ output }: TerminalOutputProps) => {
  return <span>{output}</span>;
});
