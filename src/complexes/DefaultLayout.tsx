import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderOuter = styled.div`
  background-color: #036;
  color: #fff;
  line-height: 1.6em;

  & a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderOuter>
      <div className="ui-container">
        <Link to={`${process.env.PUBLIC_URL}/`}>My Great App</Link>
      </div>
    </HeaderOuter>
  );
};

const FooterOuter = styled.div`
  border-top: dotted 1px #ccc;
  margin-top: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterOuter>
      <div className="ui-container">
        Copyright &copy; Ginpei Takanashi
      </div>
    </FooterOuter>
  );
};

const MainOuter = styled.div.attrs({
  className: 'ui-container',
})`
  margin-top: 1rem;
  min-height: 50vh;
`;

type Prop = React.ComponentPropsWithRef<'div'>;

const DefaultLayout: React.FC<Prop> = (props) => {
  const { children, ...restProps } = props;
  return (
    <div {...restProps}>
      <Header />
      <MainOuter>
        {children}
      </MainOuter>
      <Footer/>
    </div>
  );
}

export default DefaultLayout;
