import React, { Component, PropTypes } from 'react';
import { Container } from '../../theme/grid';
import {
  HomerImg,
  Image,
  HeroImage,
  StyledContainer,
  RevealP
} from './Home.style';
import WheninView from '../../components/WheninView/WheninView'



export default class Home extends Component {
  static PropTypes = {};

  render() {
    return (
      <StyledContainer>
        <HeroImage>
          <h1>Diogo R. Dias</h1>
          <h2>JavaScript Full Stack Developer</h2>
          <h3>
            Hi there, what sup? Welcome to my website =). I hope you have a great browsing experience. Press any key for continue the next session, but dont worry if you do not find. The Homer will help you.
          </h3>
          {/*<HomerImg src={require('../../assets/homer.gif')} />*/}
        </HeroImage>
        <Container>
          <RevealP hide={true}>
            Etiam a placerat risus. Sed vel nisi at diam vulputate ullamcorper ac quis nisl. Nulla dignissim, nibh at hendrerit tempus, urna dui consectetur felis, ut fermentum metus quam id erat. Aenean tincidunt consequat orci, nec hendrerit neque viverra sed. Ut eget vestibulum ligula, in elementum dui. Quisque hendrerit lobortis lacinia. Ut egestas, felis id venenatis pharetra, augue quam interdum mi, quis semper dolor magna sed mauris. Pellentesque eget massa non tellus consequat pharetra quis sagittis sem. Nulla eu leo sagittis, congue massa vitae, egestas ligula. Sed id imperdiet massa, a pretium mauris. Nunc lacus magna, elementum eu ligula sit amet, ultrices elementum eros.
          </RevealP>
        </Container>
      </StyledContainer>
    );
  }
}
