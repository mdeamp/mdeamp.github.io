import { useMemo } from 'react';

import { Button, TerminalContainer } from '@ui/components';
import { githubUrl } from '@helpers';

export const MainTemplate = () => {
  const commands = useMemo(
    () => [
      ['whoami', 'Mauricio Paulino'],
      ['cat main_skills.txt', 'Tech Lead | Software Engineer'],
      [
        'cat information.txt',
        "I'm a Tech Lead, Software Engineer and FullStack Developer located in Brazil. Currently focusing on Software Architecture (professionally) and Game Development (hobby). 🙂",
      ],
    ],
    [],
  );

  const buttons = useMemo(
    () => [
      { icon: 'tool', label: 'skills', href: githubUrl('mdeamp') },
      { icon: 'book', label: 'learning', href: githubUrl('mdeamp/learning') },
      { icon: 'award', label: 'badges', href: githubUrl('mdeamp/badges') },
      { icon: 'star', label: 'projects', href: githubUrl('mdeamp/projects') },
      { icon: 'github', label: 'github', href: githubUrl('') },
      { icon: 'linkedin', label: 'linkedin', href: 'https://linkedin.com/in/mdeamp' },
      { icon: 'pen', label: 'dev blog', href: 'https://dev.to/mdeamp' },
    ],
    [],
  );

  return (
    <div className="bg-[url('/img/main-bg.jpg')] bg-cover bg-fixed bg-right">
      <div className="flex min-h-screen flex-col items-center">
        <TerminalContainer commands={commands} />

        <div className="mt-4 flex w-3/4 flex-wrap items-center justify-center font-['Poppins']">
          {buttons.map((button) => (
            <Button icon={button.icon} label={button.label} href={button.href} />
          ))}
        </div>
      </div>
    </div>
  );
};
