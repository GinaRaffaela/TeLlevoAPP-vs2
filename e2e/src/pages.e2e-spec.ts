import { browser, element, by } from "protractor";

describe("Prueba al iniciar la aplicacion", () => { 
    beforeEach(() => { 
        browser.get("/"); 
    }); 
    
    //Inicio
    it('Se muestra la animacion al correr la aplicacion', () => {
        expect(element(by.css('app-inicio')).isPresent()).toBeTruthy();
    });

});

describe("Prueba en login", () => { 
    beforeEach(() => { 
        browser.get("/login"); 
    }); 

    //Login
    it('Pagina login tiene boton para iniciar sesion y recuperar contraseña', () => {
        expect(element(by.css('page-selected ion-button')).getText()).toContain('Iniciar Sesión');
    });

    it('Se puede navegar para a la pagina restore y recuperar contraseña', () => {
        element(by.id('recuperar')).click();
        browser.driver.sleep(500);
        expect(element(by.id('.page-selected ion-button')).getText()).toContain('Recuperar clave');
    });

});

describe("Prueba en restore", () => { 
    beforeEach(() => { 
        browser.get("/restore"); 
    }); 

    //Restore
    it('Pagina restore tiene boton para recuperar contraseña', () => {
        expect(element(by.css('.page-selected ion-button')).getText()).toContain('Recuperar clave');
    });

});

describe("Prueba en home", () => { 
    beforeEach(() => { 
        browser.get("/home"); 
    });

    //Home
    it('Despues de iniciar sesion da la bienvenida al usuario', () => {
        expect(element(by.css('.page-selected ion-label')).getText()).toContain('Bienvenid@');
    });
   //Pasajero - MostrarViaje
    it('Se puede navegar a la pagina del pasajero', () => {
        element(by.id('pasajero')).click();
        browser.driver.sleep(500);
        expect(element(by.id('.page-selected ion-button')).getText()).toContain('Buscar viaje');
    });
    //Conductor - CrearViaje
    it('Se puede navegar a la pagina del conductor', () => {
        element(by.id('conductor')).click();
        browser.driver.sleep(500);
        expect(element(by.id('.page-selected ion-button')).getText()).toContain('Crear');
    });
    //Not-Found
    it('Error 404', () => {
        element(by.css('Oops')).click();
        browser.driver.sleep(500);
        expect(element(by.css('.page-selected ion-title')).getText()).toContain('Error 404 !');
    });

});

describe("Prueba en pasajero", () => { 
    beforeEach(() => { 
        browser.get("/pasajero"); 
    });
    //Pasajero - MostrarViaje
    it('El usuario puede solicitar un viaje', () => {
        expect(element(by.css('app-home ion-button')).getText()).toContain('Solicitar viaje');
    });
    
    it('Envio de correo con solicitud de reserva de viaje', () => {
        element(by.css('ion-button solicitar')).click();
        browser.driver.sleep(500);
    });

});

describe("Prueba en conductor", () => { 
    beforeEach(() => { 
        browser.get("/conductor"); 
    });
    //Conductor - Mapbox
    it('En la pagina del conductor se puede ver un mapa', () => {
        expect(element(by.css('page-selected div')).getText()).toContain('');
    });

});
