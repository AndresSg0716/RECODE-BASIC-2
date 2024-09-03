class AppConfig {
    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }

        this.config = {
            language: 'en',
            theme: 'carmesi',
            mode: 'modo1' 
        };
        AppConfig.instance = this;

        return this;
    }

    getConfig() {
        return this.config;
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
}


const appConfig1 = new AppConfig();
console.log(appConfig1.getConfig()); 

appConfig1.updateConfig({ language: 'es', mode: 'modo2' });
console.log(appConfig1.getConfig()); 

const appConfig2 = new AppConfig();
console.log(appConfig2.getConfig()); 

console.log(appConfig1 === appConfig2);
