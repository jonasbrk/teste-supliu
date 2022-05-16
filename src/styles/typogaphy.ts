import styled from 'styled-components';

interface TypographyProps {
    color?: string;
    fontWeight: 'bold' | 'regular' | 'light';
    marginTop?: string;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
  }

const fontWeight: Record<TypographyProps['fontWeight'], number> = {
  bold: 700,
  regular: 400,
  light: 100,
};

export const Title = styled.h1<TypographyProps>`
  font-size: 34px;
  color: ${(props) => props.color};
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  margin-top: ${(props) => props.marginTop && props.marginTop + 'px'};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom  + 'px'};
  margin-left: ${(props) => props.marginLeft && props.marginLeft + 'px'};
  margin-right: ${(props) => props.marginRight && props.marginRight + 'px' };
`;

export const SubTitle = styled.h2<TypographyProps>`
  font-size: 24px;
  color: ${(props) => props.color};
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  margin-top: ${(props) => props.marginTop && props.marginTop + 'px'};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom  + 'px'};
  margin-left: ${(props) => props.marginLeft && props.marginLeft + 'px'};
  margin-right: ${(props) => props.marginRight && props.marginRight + 'px' };
`;

export const Description = styled.h3<TypographyProps>`
  font-size: 16px;
  color: ${(props) => props.color};
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  margin-top: ${(props) => props.marginTop && props.marginTop + 'px'};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom  + 'px'};
  margin-left: ${(props) => props.marginLeft && props.marginLeft + 'px'};
  margin-right: ${(props) => props.marginRight && props.marginRight + 'px' };
`;

export const Small = styled.h4<TypographyProps>`
  font-size: 14px;
  color: ${(props) => props.color};
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  margin-top: ${(props) => props.marginTop && props.marginTop + 'px'};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom  + 'px'};
  margin-left: ${(props) => props.marginLeft && props.marginLeft + 'px'};
  margin-right: ${(props) => props.marginRight && props.marginRight + 'px' };
`;