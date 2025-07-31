const socialLinks = [
    {
        href: "https://instagram.com",
        label: "Instagram",
        icon: "fa-brands fa-instagram",
    },
    {
        href: "https://github.com",
        label: "GitHub",
        icon: "fa-brands fa-github",
    },
    {
        href: "https://linkedin.com",
        label: "LinkedIn",
        icon: "fa-brands fa-linkedin",
    },
];

export const SocialLinks = ({ iconSize = "text-4xl", hoverColor = "hover:text-gray-500", className = "" }) => (
    <div className={className}>
        {socialLinks.map(({ href, label, icon }) => (
            <a key={label} href={href} aria-label={label}>
                <i className={`${icon} ${iconSize} ${hoverColor}`}></i>
            </a>
        ))}
    </div>
);