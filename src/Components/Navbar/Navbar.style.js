import styled from "styled-components";

export const NavmenuStyle = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 1rem;
    background: var(--dark-bg);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;

        @media only screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
        }

        li{
            display: inline-block;
            border-radius: 5px;
            transition: 0.3s ease-in-out background-color;

            &:hover {
                background: var(--deep-dark);
            }

            @media only screen and (max-width: 768px) {
                margin-top: 10px;
            }
        }

        a{
            display: inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 2rem;
            font-size: 2rem;
            color: var(--gray-1);
        }
        .active{
            color: white;
            border-bottom: 2px solid white;
        }
    }

    @media only screen and (max-width: 768px) {
        background: var(--gray-2);
        max-width: 90%;
        max-height: 50%;
        position: absolute;
        right: 1;
        border-radius: 10px;
        transform: translate(5%,20%);
        font-size: clamp(.5rem, 3rem, .5rem);
        display: ${({mMenuActive}) => mMenuActive? 'block':'none'};
    }
`

export const MobileMenu = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: none;

    i{
        font-size: 2rem
    }
    @media only screen and (max-width: 768px){
        display: block;
    }
`
