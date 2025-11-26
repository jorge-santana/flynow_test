import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { FC } from 'react';

const ApiDocs: FC = () => {
  return <SwaggerUI url="/api/swagger.json" />;
};

export default ApiDocs;
