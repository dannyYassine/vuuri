import Buefy from 'buefy';
import 'buefy/dist/buefy.css'

import './styles/app.scss';
import './styles/demo-grid.css';

export default ({Vue, options, router, siteData}) => {
  
  Vue.use(Buefy, {
    defaultIconPack: 'fa'
  });
};