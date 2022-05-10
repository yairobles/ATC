import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Breadcrumb } from './components';
import { rootPath } from './routes';


/**
 * These are root pages
 */
const Inicio = ({ location }) => {
  return (
    <div>
      <h1 className="py-3">Inicio</h1>
      <Breadcrumb locationPath={location.pathname} />
    </div>
  );
};

const Ofertas = ({ location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    const _matchedRoutes = matchedRoutes.map((matchedRoute) => {
      if (matchedRoute.match && matchedRoute.match.path === '/ofertas/:id') {
        const ofertaId =
          matchedRoute.match.params && matchedRoute.match.params.id;
   
        return {
          match: matchedRoute.match,
          route: {
            ...matchedRoute.route,
            path: matchedRoute.match.url,
            breadcrumbName: ofertaId,
          },
        };
      } else {
        return matchedRoute;
      }
    });

   


    return [
      {
        route: {
          path: `${rootPath}/`,
          breadcrumbName: 'Inicio',
        },
      },
      ..._matchedRoutes,
    ];
  };

  return (
    <div>
      <h1 className="py-3">Ofertas</h1>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
    </div>
  );

};




const Acerca = ({ route, location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: `${rootPath}/`,
          breadcrumbName: 'Inicio',
        },
      },
      ...matchedRoutes,
    ];
  };

  return (
    <div>
      <h1 className="py-3">Acerca</h1>

      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />

      {renderRoutes(route.routes)}
    </div>
  );
};

/**
 * 
 * Anidados dentro de ACERCA DE...
 */
const Mision = () => {
  return <h3>Misión

<p className='texto'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique porta ex id eleifend. Praesent cursus semper augue, quis sodales tortor ullamcorper vitae. Quisque facilisis, purus eu malesuada elementum, turpis nunc suscipit dui, in finibus ligula risus vitae risus. Morbi sed velit at nibh viverra congue. Fusce sit amet sapien arcu. Nulla pretium pellentesque ante eu scelerisque. Proin nec neque vehicula massa bibendum varius non condimentum lorem.
  </p>

  <p className='texto'>
  Pellentesque sollicitudin efficitur odio, a finibus nunc vestibulum ut. Nullam ultrices ligula sit amet aliquet commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fringilla ex ac congue facilisis. Vivamus venenatis nunc erat. Nullam tempor pretium dui semper tincidunt. Sed auctor quam vitae elit rhoncus, eu sollicitudin ipsum finibus. Vestibulum quis mi porta, ultrices dolor consequat, egestas ante. Etiam sed pretium nisi. Morbi sit amet nibh luctus, pulvinar tortor sit amet, imperdiet odio. Duis lobortis scelerisque odio, posuere convallis augue vulputate ac. Maecenas convallis orci et tortor facilisis, sollicitudin eleifend enim euismod. Pellentesque vitae magna vel augue varius gravida eget quis metus. Aliquam eleifend, odio a ultricies laoreet, erat risus tristique enim, quis commodo purus sem vitae ipsum. Ut nec massa eget purus fringilla posuere vitae eget lectus. Aliquam sagittis ligula ac enim vehicula laoreet.
  </p>

  </h3>;
  
};

const Vision = () => {
  return <h3>Visión
    <p className='texto'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique porta ex id eleifend. Praesent cursus semper augue, quis sodales tortor ullamcorper vitae. Quisque facilisis, purus eu malesuada elementum, turpis nunc suscipit dui, in finibus ligula risus vitae risus. Morbi sed velit at nibh viverra congue. Fusce sit amet sapien arcu. Nulla pretium pellentesque ante eu scelerisque. Proin nec neque vehicula massa bibendum varius non condimentum lorem.
  </p>

  <p className='texto'>
  Pellentesque sollicitudin efficitur odio, a finibus nunc vestibulum ut. Nullam ultrices ligula sit amet aliquet commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fringilla ex ac congue facilisis. Vivamus venenatis nunc erat. Nullam tempor pretium dui semper tincidunt. Sed auctor quam vitae elit rhoncus, eu sollicitudin ipsum finibus. Vestibulum quis mi porta, ultrices dolor consequat, egestas ante. Etiam sed pretium nisi. Morbi sit amet nibh luctus, pulvinar tortor sit amet, imperdiet odio. Duis lobortis scelerisque odio, posuere convallis augue vulputate ac. Maecenas convallis orci et tortor facilisis, sollicitudin eleifend enim euismod. Pellentesque vitae magna vel augue varius gravida eget quis metus. Aliquam eleifend, odio a ultricies laoreet, erat risus tristique enim, quis commodo purus sem vitae ipsum. Ut nec massa eget purus fringilla posuere vitae eget lectus. Aliquam sagittis ligula ac enim vehicula laoreet.
  </p>
  </h3>;
};

const Valores = () => {
  return <h3>Valores
    <p className='texto'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique porta ex id eleifend. Praesent cursus semper augue, quis sodales tortor ullamcorper vitae. Quisque facilisis, purus eu malesuada elementum, turpis nunc suscipit dui, in finibus ligula risus vitae risus. Morbi sed velit at nibh viverra congue. Fusce sit amet sapien arcu. Nulla pretium pellentesque ante eu scelerisque. Proin nec neque vehicula massa bibendum varius non condimentum lorem.
  </p>

  <p className='texto'>
  Pellentesque sollicitudin efficitur odio, a finibus nunc vestibulum ut. Nullam ultrices ligula sit amet aliquet commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fringilla ex ac congue facilisis. Vivamus venenatis nunc erat. Nullam tempor pretium dui semper tincidunt. Sed auctor quam vitae elit rhoncus, eu sollicitudin ipsum finibus. Vestibulum quis mi porta, ultrices dolor consequat, egestas ante. Etiam sed pretium nisi. Morbi sit amet nibh luctus, pulvinar tortor sit amet, imperdiet odio. Duis lobortis scelerisque odio, posuere convallis augue vulputate ac. Maecenas convallis orci et tortor facilisis, sollicitudin eleifend enim euismod. Pellentesque vitae magna vel augue varius gravida eget quis metus. Aliquam eleifend, odio a ultricies laoreet, erat risus tristique enim, quis commodo purus sem vitae ipsum. Ut nec massa eget purus fringilla posuere vitae eget lectus. Aliquam sagittis ligula ac enim vehicula laoreet.
  </p>
  </h3>;
};

export { Inicio, Ofertas, Acerca, Mision, Vision, Valores };
