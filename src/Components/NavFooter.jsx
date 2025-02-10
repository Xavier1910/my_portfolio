import React, { useEffect, useState } from 'react'

const NavFooter = () => {
    let navLinks;

    navLinks = [
        { name: "Home", href: "#home", icon: "bi-house-fill" },
        { name: "Skills", href: "#skills", icon: "bi-code-slash" },
        { name: "Projects", href: "#projects", icon: "bi-folder-fill" },
        { name: "Contact", href: "#contact", icon: "bi-person-rolodex" },
    ];

    const [activeLink, setActiveLink] = useState(0);

    const handleFooterLinkClick = (index) => {
        setActiveLink(index);
    };
    useEffect(() => {
            const handleScroll = () => {
            const scrollPosition = window.scrollY;
            navLinks.forEach((link, index) => {
                const section = document.querySelector(link.href); 
                
                if (section) {
                const sectionTop = section.offsetTop - 350; 
                const sectionBottom = sectionTop + section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveLink(index);
                }
                }
            });
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, [navLinks]);
    return (
        <div>
        <div className="MobileFooter">
                <div className="footerLinks">
                <ul id="FooterIcons">
                    {navLinks.map((link, index) => (
                    <li
                        key={index}
                        onClick={() => handleFooterLinkClick(index)}
                        className={activeLink === index ? "selected" : ""}
                    >
                        <a href={link.href}>
                        <i className={`bi ${link.icon}`}></i>
                        </a>
                    </li>
                    ))}
                    <div
                    id="circle"
                    style={{
                        left: `${activeLink * 25 + 7}%`,
                    }}
                    >
                    <i
                        id="CircleIcon"
                        className={`bi ${navLinks[activeLink]?.icon}`}
                        style={{ top: "0px" }}
                    ></i>
                    </div>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default NavFooter
