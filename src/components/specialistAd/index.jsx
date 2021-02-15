import React from 'react'
import styled from 'styled-components';
import {BrandLogo} from '../brandLogo';
import FarmingImg from '../../images/farming.png'
import { Marginer } from '../marginer';
const SpecialistAdContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    background-color: #264653;
    align-items: center;
    justify-content: center;

`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-evenly;

`;

const SloganContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 5em;
    justify-content: flex-start;
`;

const Slogan = styled.h2`
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    line-height: 1.6;
    text-align: start;

`;

const StandoutImage = styled.div`
    width: 35em;
    height: 29em;

    img{
        width: 100%;
        height: 100%;
    }

`;

export function SpecialistAd(props)
{ return  <SpecialistAdContainer>
        <ContentContainer>
            <SloganContainer>
                <BrandLogo logoSize={40} textSize={35}/>
                <Marginer direction="vertical" margin="1em"/>
            <SloganContainer>
                <Slogan>You're a Spcialist, and you</Slogan>
                <Slogan>have an outstanding</Slogan>
                <Slogan>Service to offer?</Slogan>

            </SloganContainer>
            </SloganContainer>
            <StandoutImage>
                <img src={FarmingImg} alt=""/>
            </StandoutImage>
        </ContentContainer>
    </SpecialistAdContainer>
}