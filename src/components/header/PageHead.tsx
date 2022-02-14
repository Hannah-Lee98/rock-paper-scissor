import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
interface IPageHead {
  title?: string;
  name?: string;
  content?: string;
}
const PageHead: FC<IPageHead> = props => {
  const { title, name, content } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  );
};

export default PageHead;
