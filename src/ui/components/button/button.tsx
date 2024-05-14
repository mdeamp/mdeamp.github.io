import { memo } from 'react';

type ButtonProps = {
  label: string;
  icon: string;
  href: string;
};

export const Button = memo(({ label, icon, href }: ButtonProps) => {
  const openLink = () => {
    window.open(href);
  };

  return (
    <button
      onClick={openLink}
      className="transition-border m-2 rounded border-2 border-solid border-transparent bg-neutral-100 px-2 py-2 duration-300 hover:border-neutral-700 hover:bg-neutral-300 active:bg-neutral-400"
    >
      <div className="flex flex-row items-center justify-center">
        <img src={`/icons/${icon}.svg`} className="mr-2 w-5" />
        <span>{label}</span>
      </div>
    </button>
  );
});
