import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components/macro';

const Nav = styled.nav`
    ${tw`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 h-16 transition-all duration-300`};
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavLogo = styled(Link)`
    ${tw`flex items-center gap-2 no-underline`};
    span {
        ${tw`text-2xl font-bold tracking-tight text-white`};
        background: linear-gradient(to right, #60a5fa, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const NavLinks = styled.div`
    ${tw`hidden md:flex items-center gap-8`};
`;

const NavLinkStyled = styled.a`
    ${tw`text-sm font-medium text-neutral-400 no-underline transition-colors duration-200`};
    &:hover {
        ${tw`text-white`};
    }
`;

const TaproNavbar: React.FC = () => {
    return (
        <Nav>
            <NavLogo to={'/'}>
                <img src={'/assets/svgs/pterodactyl.svg'} alt={'Tapro Cloud Logo'} css={tw`w-8 h-8`} />
                <span>Tapro Cloud</span>
            </NavLogo>
            <NavLinks>
                <NavLinkStyled href="https://taprocloud.com" target="_blank" rel="noreferrer">Website</NavLinkStyled>
                <NavLinkStyled href="https://status.taprocloud.com" target="_blank" rel="noreferrer">Status</NavLinkStyled>
                <NavLinkStyled href="https://discord.gg/tapro" target="_blank" rel="noreferrer">Discord</NavLinkStyled>
            </NavLinks>
        </Nav>
    );
};

export default TaproNavbar;
