import * as React from "react";
import IonIcon from "@reacticons/ionicons";

const SocialNavLink = ({ href, icon }) => {
  return (
    <a
      className="block text-2xl outline-none transition-colors hover:text-purple-600 focus:text-purple-600"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

const SocialNav = () => {
  return (
    <nav className="flex items-center justify-center space-x-6 md:order-1">
      <SocialNavLink
        href="https://behance.net/jenewland1999"
        icon={
          <IonIcon
            role="img"
            aria-label="Follow @jenewland1999 on Bēhance"
            name="logo-behance"
          />
        }
      />
      <SocialNavLink
        href="https://dribbble.com/jenewland1999"
        icon={
          <IonIcon
            role="img"
            aria-label="Follow @jenewland1999 on Dribbble"
            name="logo-dribbble"
          />
        }
      />
      <SocialNavLink
        href="https://github.com/jenewland1999"
        icon={
          <IonIcon
            role="img"
            aria-label="Follow @jenewland1999 on GitHub"
            name="logo-github"
          />
        }
      />
      <SocialNavLink
        href="https://linkedin.com/in/jenewland1999"
        icon={
          <IonIcon
            role="img"
            aria-label="Connect with @jenewland1999 on LinkedIn"
            name="logo-linkedin"
          />
        }
      />
      <SocialNavLink
        href="https://linkedin.com/in/jenewland1999"
        icon={
          <IonIcon
            role="img"
            aria-label="Follow @jenewland1999 on Twitter"
            name="logo-twitter"
          />
        }
      />
    </nav>
  );
};

export default SocialNav;
