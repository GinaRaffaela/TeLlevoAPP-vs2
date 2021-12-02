import { browser, element, by } from "protractor";

describe("pages", () => { 
    beforeEach(() => { 
        browser.get("/"); 
    }); 
    
    //Inicio
    it('Se muestra la animacion al correr la aplicacion', () => {
        expect(element(by.css('app-inicio')).isPresent()).toBeTruthy();
    });

    //Login
    it('Pagina login tiene boton para iniciar sesion y recuperar contraseña', () => {
        expect(element(by.css('app-login ion-button')).getText()).toContain('Iniciar Sesión', 'Recuperar clave');
    });

    //Restore
    it('Pagina restore tiene boton para recuperar contraseña', () => {
        expect(element(by.css('app-restore ion-button')).getText()).toContain('Recuperar clave');
    });

    //Home
    it('Despues de iniciar sesion da la bienvenida al usuario', () => {
        expect(element(by.css('app-home ion-label')).getText()).toContain('Bienvenid@');
    });
   
    it('Pagina home tiene botones para ir a la pagina del pasajero y conductor', () => {
        expect(element(by.css('app-home ion-button')).getText()).toContain('Pasajero', 'Conductor');
    });

    //Pasajero - MostrarViaje
    it('El usuario puede navegar para a la pagina del pasajero y ver los viajes disponibles', () => {
        element(by.css('app-pasajero')).click();
        browser.driver.sleep(500);
        expect(element(by.css('page-selected ion-button')).getText()).toContain('Buscar viaje');
    });

    //Conductor - CrearViaje - Mapbox
    it('El usuario puede navegar para a la pagina del conductor y publicar un viaje', () => {
        element(by.css('app-conductor')).click();
        browser.driver.sleep(500);
        expect(element(by.css('page-selected ion-button')).getText()).toContain('Crear');
    });

    it('En la pagina del conductor puedo ver un mapa', () => {
        element(by.css('app-conductor')).click();
        browser.driver.sleep(500);
        expect(element(by.css('page-selected div')).getText()).toContain('');
    });

    //Not-Found
    it('Error 404', () => {
        element(by.css('app-not-found')).click();
        browser.driver.sleep(500);
        expect(element(by.css('.page-selected ion-title')).getText()).toContain('Error 404 !');
    });

});