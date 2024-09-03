class NewsChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== user);
    }

    publishNews(news) {
        this.subscribers.forEach(subscriber => subscriber.update(news));
    }

    eliminarUsuario(nombreUsuario) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber.name !== nombreUsuario);
        console.log(`${nombreUsuario} ha sido eliminado.`);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(news) {
        console.log(`${this.name} ha recibido la noticia: ${news}`);
    }
}

const channel = new NewsChannel();

const user1 = new User('Juan');
const user2 = new User('usuario 2');
const user3 = new User('Jfvwgwegwg');
const user4 = new User('Apapapa');

channel.subscribe(user1);
channel.subscribe(user2);
channel.subscribe(user3);
channel.subscribe(user4);

channel.publishNews('Nueva noticia');

channel.eliminarUsuario('Jfvwgwegwg');

channel.publishNews('Otra noticia');
