import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        AussieAlpha
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A target="_blank" href="https://www.linkedin.com/in/gurminder-multani-61a04577/">Gurminder</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
