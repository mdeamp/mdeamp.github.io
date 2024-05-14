import { Avatar } from '@ui/components';

export const HeaderTemplate = () => {
  return (
    <div className="fixed top-2 flex h-12 w-full items-center justify-center font-['Poppins'] text-xl font-bold">
      <Avatar rounded />
      <span className="text-white">mdeamp</span>
    </div>
  );
};
