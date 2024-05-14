import { FooterTemplate, HeaderTemplate, MainTemplate } from '@ui/templates';

export function App() {
  return (
    <div className="w-100 min-h-screen">
      <HeaderTemplate />
      <MainTemplate />
      <FooterTemplate />
    </div>
  );
}
