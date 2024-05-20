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
      { icon: 'tool', label: 'skills', href: githubUrl('README.md') },
      { icon: 'book', label: 'learning', href: githubUrl('learning/README.md') },
      { icon: 'award', label: 'badges', href: githubUrl('badges/README.md') },
      { icon: 'star', label: 'projects', href: githubUrl('projects/README.md') },
      { icon: 'github', label: 'github', href: 'https://github.com/mdeamp' },
      { icon: 'linkedin', label: 'linkedin', href: 'https://linkedin.com/in/mdeamp' },
      { icon: 'pen', label: 'dev blog', href: 'https://dev.to/mdeamp' },
    ],
    [],
  );

  return (
    <div className="bg-[url('/img/main-bg.jpg')] bg-cover bg-right bg-no-repeat">
      <div className="flex min-h-screen flex-col items-center pb-24">
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
