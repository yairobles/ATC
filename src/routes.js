import { Inicio, Ofertas, Acerca, Mision, Vision, Valores } from './pages';
const rootPath = process.env.PUBLIC_URL;

const routes = [
  {
    path: `${rootPath}/`,
    component: Inicio,
    exact: true,
    breadcrumbName: 'Inicio'
  },
  {
    path: `${rootPath}/Ofertas`,
    component: Ofertas,
    breadcrumbName: 'Ofertas',
    routes: [
      {
        path: `${rootPath}/Ofertas/:id`,
        component: Ofertas,
      }
    ]
  },
 
  {
    path: `${rootPath}/acerca`,
    component: Acerca,
    breadcrumbName: 'Acerca',
    routes: [
      {
        path: `${rootPath}/acerca/mision`,
        component: Mision,
        breadcrumbName: 'Mision'
      },
      {
        path: `${rootPath}/acerca/vision`,
        component: Vision,
        breadcrumbName: 'Vision'
      },
      {
        path: `${rootPath}/acerca/valores`,
        component: Valores,
        breadcrumbName: 'Valores'
      }
    ]
  }
];

export default routes;
export { rootPath };
