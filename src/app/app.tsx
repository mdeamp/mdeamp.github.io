import { MainTemplate, HeaderTemplate } from '@ui/templates';
import { FooterTemplate } from 'src/ui/templates/footer-template/footer-template';

export function App() {
  return (
    <div className="w-100 min-h-screen">
      <HeaderTemplate />
      <MainTemplate />
      <FooterTemplate />
    </div>
  );
}
