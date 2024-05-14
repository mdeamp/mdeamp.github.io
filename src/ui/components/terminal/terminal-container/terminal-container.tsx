import { memo } from 'react';

import { ColoredCircle } from '../../colored-circle';
import { TerminalCommand } from '../terminal-command';
import { TerminalOutput } from '../terminal-output';

type TerminalContainerProps = {
  commands: string[][];
};

export const TerminalContainer = memo(({ commands }: TerminalContainerProps) => {
  return (
    <div className="mt-24 flex w-3/4 max-w-4xl flex-col rounded-lg bg-neutral-800  font-['Fira_Code'] text-white">
      <div className="justify-left flex w-full items-center border-b border-gray-600 p-4">
        <ColoredCircle color="red" />
        <ColoredCircle color="yellow" />
        <ColoredCircle color="green" />
      </div>

      <div className="p-4">
        {commands.map((command) => (
          <div className="mt-2">
            <TerminalCommand command={command[0]} />
            <TerminalOutput output={command[1]} />
          </div>
        ))}

        <div className="mt-2">
          <TerminalCommand command={<span className="ml-2 animate-blink text-green-500">|</span>} />
        </div>
      </div>
    </div>
  );
});
