import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { Box } from '@rebass/grid';
import { FormattedMessage } from 'react-intl';
import { ArrowRight } from '@styled-icons/feather/ArrowRight';

import { P, Span } from '../../Text';
import Hide from '../../Hide';
import Illustration from '../HomeIllustration';
import StyledCarousel from '../../StyledCarousel';
import Container from '../../Container';
import SectionTitle from '../SectionTitle';
import StyledLink from '../../StyledLink';

const List = styled.li`
  font-size: 20px;
  font-weight: 28px;
  letter-spacing: -0.6px;
  font-weight: 300;
  list-style: none;

  &::before {
    content: '•';
    color: ${themeGet('colors.blue.600')};
    display: ${props => (props.noListStyle ? 'none' : 'inline-block')};
    width: 1em;
    margin-left: -1em;
  }
`;

const openFeatures = [
  {
    id: 1,
    name: 'Open Source',
    description: 'We will never lock you in. Everything we do is open source (MIT License)',
    features: ['Submit a bug report', 'Submit a feature request', 'Contribute'],
    linkText: 'View our code base on github',
    url: '/',
  },
  {
    id: 2,
    name: 'Open Data',
    description: 'The data is yours and can be exported anytime in open data format.',
    features: ['All our metrics, financials, presentations and other documents are on our public drive.'],
    linkText: 'View our public drive',
    link: '/',
  },
];

const OpenFeature = ({ id, name, description, features, linkText, url }) => (
  <Container mr={[null, null, 3]} width={[null, null, null, null, '370px']}>
    <Box my={3}>
      <P
        fontSize={['H5', null, 'H4', null, 'H3']}
        lineHeight={['28px', null, 'H3', null, '40px']}
        color="blue.600"
        letterSpacing={['-0.2px', null, null, null, '-0.4px']}
        fontWeight="bold"
      >
        {name}
      </P>
    </Box>
    <Box width="289px" mb={3}>
      <P
        fontSize={['16px', null, 'Paragraph']}
        lineHeight={['22px', null, 'H4']}
        color="black.900"
        letterSpacing={['-0.008em']}
        fontWeight="bold"
      >
        {description}
      </P>
    </Box>
    <Box as="ul" listStyle="none" px={[null, null, 2]}>
      {features.map((feature, index) => (
        <List key={(id + index).toString()} noListStyle={features.length === 1}>
          {feature}
        </List>
      ))}
    </Box>
    <StyledLink href={url} color="blue.600">
      <Span mr={2} fontSize={'13px'} lineHeight={'16px'}>
        {linkText}
      </Span>
      <ArrowRight size="14" />
    </StyledLink>
  </Container>
);

OpenFeature.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
  linkText: PropTypes.string,
  url: PropTypes.string,
};

const WeAreOpen = () => (
  <Container
    display="flex"
    flexDirection="column"
    alignItems="center"
    mx={[3, 4]}
    position={[null, null, 'relative']}
    top={[null, null, '-90px']}
  >
    <SectionTitle>
      <FormattedMessage
        id="home.weAreOpenSection.title"
        defaultMessage="We are Open in  
        every way"
      />
    </SectionTitle>
    <Hide md lg>
      <Illustration src="/static/images/weareopen-mobile-illustration.png" alt="We are Open in every way" />
    </Hide>
    <StyledCarousel options={openFeatures} display={[null, null, 'none']}>
      {openFeature => <OpenFeature {...openFeature} />}
    </StyledCarousel>
    <Container display={['none', null, 'flex']} justifyContent={[null, null, null, null, 'center']}>
      <Illustration
        display={['none', null, 'block', null, 'none']}
        src="/static/images/weareopen-illustration-1x.png"
        alt="We are Open in every way"
      />
      <Illustration
        display={['none', null, null, null, 'block']}
        src="/static/images/weareopen-illustration-2x.png"
        alt="We are Open in every way"
      />
      {openFeatures.map(openFeature => (
        <Fragment key={openFeature.id}>
          <OpenFeature {...openFeature} />
        </Fragment>
      ))}
    </Container>
  </Container>
);

export default WeAreOpen;
