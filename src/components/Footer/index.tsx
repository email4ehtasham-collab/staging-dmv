// Footer/index.tsx
import FooterSwitcher from "./FooterSwitcher";
import FooterVisibility from "./FooterVisibility";

export default function Footer() {
  return (
    <>
      <FooterVisibility>
        <FooterSwitcher />
      </FooterVisibility>
    </>
  );
}