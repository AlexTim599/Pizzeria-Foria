import React from 'react';
import ContentLoader from 'react-content-loader';

const SceletonPizzas = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="136" cy="117" r="113" />
    <rect x="4" y="259" rx="10" ry="10" width="266" height="27" />
    <rect x="6" y="297" rx="10" ry="10" width="267" height="88" />
    <rect x="6" y="405" rx="10" ry="10" width="78" height="27" />
    <rect x="33" y="407" rx="0" ry="0" width="12" height="10" />
    <rect x="118" y="394" rx="10" ry="10" width="152" height="45" />
  </ContentLoader>
);

export default SceletonPizzas;
