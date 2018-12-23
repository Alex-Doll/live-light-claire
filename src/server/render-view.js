// @flow

import { STATIC_PATH, WDS_PORT } from '../shared/config';
import { scriptSource } from '../shared/util';

let viewContext = {
  STATIC_PATH,
  WDS_PORT,
  scriptSource,
  title: '',
  stylePath: '',
};

const renderView = (res: Object, title: string): null => {
  const viewFile = `${title}.ejs`;
  const stylePath = `${STATIC_PATH}/css/${title}.css`;

  viewContext.title = title;
  viewContext.stylePath = stylePath;

  if (res) {
    res.render(viewFile, viewContext);
  }

  return null;
};

export default renderView;
