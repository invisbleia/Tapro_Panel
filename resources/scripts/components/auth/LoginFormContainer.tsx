import React, { forwardRef } from 'react';
import { Form } from 'formik';
import styled from 'styled-components/macro';
import { breakpoint } from '@/theme';
import FlashMessageRender from '@/components/FlashMessageRender';
import tw from 'twin.macro';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
};

const Container = styled.div`
    ${tw`flex flex-col items-center justify-center min-h-screen px-4`};
`;

const FormWrapper = styled.div`
    ${tw`w-full max-w-md p-8 rounded-2xl`};
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    
    ${breakpoint('md')`
        ${tw`p-12`}
    `};
`;

export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => (
    <Container>
        <FormWrapper>
            <div css={tw`flex flex-col items-center mb-8`}>
                <img src={'/assets/svgs/pterodactyl.svg'} css={tw`w-20 h-20 mb-4`} alt="Logo" />
                {title && <h2 css={tw`text-3xl text-center text-white font-bold tracking-tight`}>{title}</h2>}
            </div>
            <FlashMessageRender css={tw`mb-4`} />
            <Form {...props} ref={ref}>
                <div css={tw`space-y-6`}>
                    {props.children}
                </div>
            </Form>
        </FormWrapper>
        <p css={tw`text-center text-neutral-500 text-xs mt-8`}>
            &copy; {new Date().getFullYear()}&nbsp;
            <a
                rel={'noopener nofollow noreferrer'}
                href={'https://taprocloud.com'}
                target={'_blank'}
                css={tw`no-underline text-neutral-500 hover:text-blue-400 transition-colors duration-200`}
            >
                Tapro Cloud
            </a>
        </p>
    </Container>
));
