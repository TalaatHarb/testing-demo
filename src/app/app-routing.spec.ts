import { routes } from './app-routing.module';
import { UsersComponent } from './integration-tests/users/users.component';

describe('routes', () => {
    it('should contain route for /users', () => {
        const expectedRoute = { path: 'users', component: UsersComponent };
        const matchingRoutes = routes.filter(r => r.path === expectedRoute.path);
        expect(matchingRoutes.length).toBeGreaterThan(0);

        const exactRoutes = matchingRoutes.filter(r => JSON.stringify(r.component) === JSON.stringify(expectedRoute.component));
        expect(exactRoutes.length).toBe(1);
    });
});
